import { useEffect, useMemo, useState } from 'react'
import { newsList } from '../data/content'

export type NewsItem = {
    slug: string
    title: string
    summary: string
    category: string
    date: string
}

type SpipNewsResponse = {
    ok: boolean
    source?: string
    count?: number
    items?: NewsItem[]
}

type NewsState = {
    data: NewsItem[]
    loading: boolean
    source: 'spip' | 'local'
    error: string | null
}

const configuredBaseUrl = import.meta.env.VITE_SPIP_BASE_URL?.replace(/\/$/, '')
const fallbackBaseUrl = '/spip-v4.4.13'

export function useSpipNews(): NewsState {
    const [state, setState] = useState<NewsState>({
        data: newsList,
        loading: true,
        source: 'local',
        error: null,
    })

    const endpoint = useMemo(() => {
        const baseUrl = configuredBaseUrl || fallbackBaseUrl
        return `${baseUrl}/aceiot-news.php`
    }, [])

    useEffect(() => {
        const controller = new AbortController()

        async function loadNews() {
            try {
                const response = await fetch(endpoint, {
                    signal: controller.signal,
                    headers: { Accept: 'application/json' },
                })

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`)
                }

                const payload = (await response.json()) as SpipNewsResponse
                const items = payload.items ?? []

                if (!payload.ok || !Array.isArray(items)) {
                    throw new Error('Invalid SPIP news payload')
                }

                setState({
                    data: items,
                    loading: false,
                    source: 'spip',
                    error: null,
                })
            } catch (error) {
                if (controller.signal.aborted) {
                    return
                }

                const message = error instanceof Error ? error.message : 'Unknown error'

                setState({
                    data: newsList,
                    loading: false,
                    source: 'local',
                    error: message,
                })
            }
        }

        loadNews()

        return () => controller.abort()
    }, [endpoint])

    return state
}
