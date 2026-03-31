import { useEffect, useState } from 'react'

type AsyncState<T> = {
    data: T | null
    loading: boolean
}

export function useAsyncData<T>(resource: T, delay = 850): AsyncState<T> {
    const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true })

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setState({ data: resource, loading: false })
        }, delay)
        return () => window.clearTimeout(timer)
    }, [resource, delay])

    return state
}
