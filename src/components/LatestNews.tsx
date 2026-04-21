import SectionHeader from './ui/SectionHeader'
import NewsCard from './ui/NewsCard'
import { newsList } from '../data/content'
import { useNavigate } from 'react-router-dom'

const LatestNews = () => {
    const navigate = useNavigate();
    return (
        <section className="space-y-1 mx-auto  max-w-7xl py-1">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <SectionHeader
                    label="News"
                    title="Latest updates from ACEIoT"
                    description="Stay informed with the latest announcements, research milestones, and partnership news."
                />
                <div>

                    <button onClick={() => {
                        navigate('/news')
                    }}
                        className='inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50'
                    >
                        View all news
                    </button>
                </div>
            </div>
            <div className="grid gap-3 lg:grid-cols-3">
                {newsList.slice(0, 6).map((item) => (
                    <NewsCard key={item.slug}
                        title={item.title} summary={item.summary} date={item.date}
                        category={item.category} href={`/news/${item.slug}`} />
                ))}
            </div>
        </section>)
}

export default LatestNews