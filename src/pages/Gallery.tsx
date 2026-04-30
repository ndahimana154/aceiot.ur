import Gallery from '../components/Gallery';
import PageMeta from '../components/ui/PageMeta';

export default function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Gallery · ACEIoT"
        description="Browse ACEIoT photos and media highlights from labs, events, partnerships, and community activities."
      />
      <Gallery />
    </>
  );
}
