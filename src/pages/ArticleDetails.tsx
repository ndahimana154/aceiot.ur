import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';
import { useSpipNews } from '../hooks/useSpipNews';

export default function ArticleDetails() {
  const { slug } = useParams();
  const { data, loading } = useSpipNews();

  const article = useMemo(
    () => data?.find((item) => item.slug === slug) ?? null,
    [data, slug],
  );

  if (loading) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <div className="h-6 w-48 animate-pulse rounded-full bg-slate-200" />
          <div className="h-10 rounded-[32px] bg-slate-200 p-8" />
          <div className="grid gap-4">
            <div className="h-6 rounded-full bg-slate-200" />
            <div className="h-6 rounded-full bg-slate-200" />
            <div className="h-6 rounded-full bg-slate-200" />
          </div>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-lg font-semibold text-slate-900">
            Article not found
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Please return to the news page and select another story.
          </p>
          <Link
            to="/news"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-10">
        <PageMeta
          title={article ? `${article.title} · ACEIoT` : 'Article · ACEIoT'}
          description={
            article
              ? article.summary
              : 'Read the latest ACEIoT news and announcements.'
          }
        />
        <PageBanner
          label="Article"
          title={article.title}
          description={article.summary}
          imageUrl={`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80&sig=${article.slug.length + 20}`}
        />

        <SectionHeader
          label="Details"
          title="Full story"
          description="Read the full update and track progress across ACEIoT initiatives."
        />
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                {article.category}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Published on {article.date}
              </p>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to news
            </Link>
          </div>
          <div className="mb-10 h-72 overflow-hidden rounded-[28px]">
            <img
              src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80&sig=${article.slug.length + 25}`}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 text-sm leading-7 text-slate-700">
            <p>
              ACEIoT continues to expand its research footprint through targeted
              partnerships and funded programs that connect academic expertise
              to real-world challenges.
            </p>
            <p>
              This article highlights our latest achievements while sharing how
              students, staff, and partners collaborate on innovation in smart
              systems, digital infrastructure, and sustainable technology
              solutions.
            </p>
            <p>
              Stay tuned for future announcements, events, and research updates
              as ACEIoT supports a new generation of African leaders in Internet
              of Things scholarship.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
