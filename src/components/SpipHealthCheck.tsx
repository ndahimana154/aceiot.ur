import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, LoaderCircle, ServerCrash, PlugZap } from 'lucide-react'

type SpipHealthResponse = {
    ok: boolean
    cms: string
    version?: string
    timestamp?: string
    message?: string
}

type LoadState =
    | { status: 'idle' | 'loading' }
    | { status: 'success'; data: SpipHealthResponse }
    | { status: 'error'; error: string }

const configuredBaseUrl = import.meta.env.VITE_SPIP_BASE_URL?.replace(/\/$/, '')
const fallbackBaseUrl = '/spip-v4.4.13'

export default function SpipHealthCheck() {
    const [state, setState] = useState<LoadState>({ status: 'loading' })

    const endpoint = useMemo(() => {
        const baseUrl = configuredBaseUrl || fallbackBaseUrl
        return `${baseUrl}/aceiot-health.php`
    }, [])

    useEffect(() => {
        const controller = new AbortController()

        async function load() {
            try {
                const response = await fetch(endpoint, {
                    signal: controller.signal,
                    headers: {
                        Accept: 'application/json',
                    },
                })

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`)
                }

                const data = (await response.json()) as SpipHealthResponse

                if (!data.ok || data.cms !== 'SPIP') {
                    throw new Error('Unexpected response payload')
                }

                setState({ status: 'success', data })
            }
            catch (error) {
                if (controller.signal.aborted) {
                    return
                }

                const message = error instanceof Error ? error.message : 'Unknown error'
                setState({ status: 'error', error: message })
            }
        }

        load()

        return () => controller.abort()
    }, [endpoint])

    return (
        <section className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--ace-primary)]">SPIP check</p>
                    <h2 className="text-xl font-semibold text-[color:var(--ace-text)]">Simple SPIP integration probe</h2>
                    <p className="max-w-2xl text-sm leading-6 text-[color:var(--ace-muted)]">
                        This card calls a minimal PHP endpoint inside the SPIP folder to confirm the frontend can reach it.
                    </p>
                </div>

                <a
                    href={endpoint}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--ace-border)] px-4 py-2 text-sm font-semibold text-[color:var(--ace-muted-strong)] transition hover:border-[color:var(--ace-primary)] hover:text-[color:var(--ace-primary)]"
                >
                    Open endpoint
                </a>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[color:var(--ace-card)] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--ace-muted)]">Endpoint</p>
                <p className="mt-2 break-all text-sm font-medium text-[color:var(--ace-text)]">{endpoint}</p>

                <div className="mt-5 rounded-[1.25rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-4">
                    {state.status === 'loading' || state.status === 'idle' ? (
                        <div className="flex items-center gap-3 text-sm text-[color:var(--ace-muted-strong)]">
                            <LoaderCircle className="h-4 w-4 animate-spin text-[color:var(--ace-primary)]" />
                            Checking SPIP endpoint...
                        </div>
                    ) : null}

                    {state.status === 'success' ? (
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm font-semibold text-emerald-700">
                                <CheckCircle2 className="h-4 w-4" />
                                SPIP responded successfully.
                            </div>
                            <div className="grid gap-3 text-sm text-[color:var(--ace-muted-strong)] sm:grid-cols-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ace-muted)]">CMS</p>
                                    <p className="mt-1 font-medium text-[color:var(--ace-text)]">{state.data.cms}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ace-muted)]">Version</p>
                                    <p className="mt-1 font-medium text-[color:var(--ace-text)]">{state.data.version || 'Unknown'}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--ace-muted)]">Timestamp</p>
                                    <p className="mt-1 font-medium text-[color:var(--ace-text)]">{state.data.timestamp || 'Unavailable'}</p>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {state.status === 'error' ? (
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm font-semibold text-amber-700">
                                <ServerCrash className="h-4 w-4" />
                                SPIP did not respond yet.
                            </div>
                            <p className="text-sm leading-6 text-[color:var(--ace-muted-strong)]">
                                Error: {state.error}. If SPIP runs on another host or port, set <strong>VITE_SPIP_BASE_URL</strong> to that base URL.
                            </p>
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--ace-muted)]">
                                <PlugZap className="h-4 w-4" />
                                Current fallback assumes SPIP is served from /spip-v4.4.13
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}