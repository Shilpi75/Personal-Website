import { useState, useRef } from 'react'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import SuccessMessage from '@/components/SuccessMessage'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Subscribe() {
  const [form, setForm] = useState(false)
  const inputEl = useRef(null)
  const { data } = useSWR('/api/subscribers', fetcher)
  const subscriberCount = new Number(data?.count)

  const subscribe = async (e) => {
    e.preventDefault()
    setForm({ state: 'loading' })

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setForm({
        state: 'error',
        message: error,
      })
      return
    }

    inputEl.current.value = ''
    setForm({
      state: 'success',
      message: `Yay! Thanks for subscribing.`,
    })
  }

  return (
    <div className="max-w-full py-6">
      <div className="w-full rounded-md bg-gray-100 px-4 py-2  dark:bg-gray-800">
        <h2 className="text-center dark:prose-dark">METAVIEW</h2>
        <p className="text-center">
          An irregular digest about experiments with 2-3 interwebz bookmarks.
        </p>
        <form className="relative my-4" onSubmit={subscribe}>
          <input
            ref={inputEl}
            aria-label="Newsletter subscription"
            placeholder="you.are@awesome.com"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-gray-300 py-2.5 px-4  focus:ring-primary-500 dark:border-gray-300 dark:text-gray-700 dark:focus:border-gray-300 dark:focus:ring-primary-500"
          />
          <button
            className="w-25 absolute top-1 right-2 flex h-9 items-center rounded-md bg-primary-700 px-6 py-4 text-white hover:bg-primary-900 dark:text-white"
            type="submit"
          >
            {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribe'}
          </button>
        </form>
        {form.state === 'error' ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === 'success' ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="prose text-center dark:prose-dark">
            {`${
              subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
            } subscribers`}

            {/* <a>2 issues</a> */}
          </p>
        )}
      </div>
    </div>
  )
}
