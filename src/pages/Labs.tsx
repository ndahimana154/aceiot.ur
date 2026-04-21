import Labs from '../components/Labs';
import PageMeta from '../components/ui/PageMeta';

export default function LabsPage() {
  return (
    <>
      <PageMeta
        title="Labs · ACEIoT"
        description="Explore ACEIoT laboratories and facilities supporting IoT experimentation, prototyping, and applied research."
      />
      <Labs />
    </>
  );
}
