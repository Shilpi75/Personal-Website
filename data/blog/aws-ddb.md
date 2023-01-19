---
title: Job Scheduling in AWS Using DDB Streams
date: "2020-03-25"
draft: false
summary: "Keep calm and let AWS do the scheduling for you. This article is about using AWS services to periodically schedule your jobs. Some of the use cases where such a type of scheduling is required include sending timely notifications to users, checking the status of a task, etc."
author: default
---

<p align="center">
  <img src="/static/img/blog/aws-ddb/img1.jpeg" />
</p>

This article is about using AWS services to periodically schedule your jobs. Some of the use cases where such a type of scheduling is required include sending timely notifications to users, checking the status of a task, etc.

Different AWS services, like DynamoDB Streams, cloud watch events, and SQS, can be used to implement job scheduling in AWS. This article focuses on using [DynamoDB TTL](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html) and [Streams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html) for scheduling jobs.

### High-Level Approach

<p align="center">
  <img src="/static/img/blog/aws-ddb/img2.jpeg" />
</p>

1.  The scheduler will put the items to be scheduled in a DynamoDB. The item will be stored with the TTL value equal to the time after which it needs to be executed.
2.  Enable DynamoDB Streams for the DynamoDB to capture and send all the data modification events to executer lambda.
3.  After the TTL expires, the item will be deleted by DynamoDB, sending a DELETE event to executer lambda using DynamoDB Streams.
4.  The executer can perform an action on the item scheduled.
5.  If the item needs to be scheduled again, it can be again added to DynamoDB with the new TTL value.

# Error Handling With DynamoDB Streams and Executer Lambda

DynamoDB Streams will resend records until they are successfully processed by the lambda (i.e. no exception is thrown by the executer lambda) or they exceed the maximum age configured on the event source mapping. Until then, lambda will not execute the next events in the stream.

If there is a situation where you need to process the message separately due to an error, you can use the [dead-letter queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) (with Amazon SQS) to push the message and continue with the remaining items in the stream.

## Pros of this solution

1.  Using Dynamo TTL allows for setting dynamic values for the scheduling interval. The scheduling interval can be configured per item.
2.  AWS auto-scales the number of shards in the stream, so as throughput increases, the number of shards would go up accordingly. So you only need to worry about the scale.

## Limitations of this solution

1.  According to the [official documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/howitworks-ttl.html) of DynamoDB TTL, an item can take up to 48 hours to actually delete after the TTL expires. The actual time depends on the nature of the workload and the size of the table. The DynamoDB Stream DELETE event will be triggered only after the item is actually deleted. Thus this solution is not recommended when the scheduling interval is too slow (like one minute, five minutes, etc.) or when the event scheduling interval needs to be precise.
2.  DynamoDB Streams will deliver all of the data modification events (e.g. insert, update, etc.) to the executer lambda. Executer lambda will have to filter the DELETE events.
3.  It will involve the cost of inserting the item again if it needs to be scheduled again. Any failure in the insertion may lead to loss of that item. The probability of the solution above can be reduced by configuring retries.
4.  DynamoDB supports a retention period of 24 hours. Data that is older than 24 hours is susceptible to trimming (removal) at any moment. So if your use case may involve such a scenario, then DynamoDB Streams is not the right solution.

# Conclusion

Thanks for reading. I hope you liked the article!
