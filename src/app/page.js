import assets from '@/data/assets.json';
import AssetRenderer from '@/components/AssetRenderer';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 bg-white dark:bg-black min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 uppercase text-center">Branding Assets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset) => (
          <AssetRenderer key={asset.name} asset={asset} />
        ))}
      </div>
    </main>
  );
}
