import { Link } from 'react-router-dom'
import { ArrowLeftCircle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-16 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Page not found</p>
            <h1 className="mt-6 text-5xl font-semibold text-slate-900">404</h1>
            <p className="mt-4 text-base leading-7 text-slate-600">The page you were looking for does not exist. Return to the home page to continue exploring.</p>
            <Link
                to="/"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
                <ArrowLeftCircle className="h-4 w-4" />
                Back to home
            </Link>
        </div>
    )
}
