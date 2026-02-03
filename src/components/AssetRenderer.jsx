import ImageAsset from './ImageAsset';

export default function AssetRenderer({ asset }) {
  if (asset.type && asset.type.startsWith('image/')) {
    return <ImageAsset asset={asset} />;
  }

  return (
    <div className="border border-dashed border-gray-300 dark:border-gray-700 p-4 text-sm text-muted-foreground">
      Unsupported file type: {asset.type || 'unknown'}
    </div>
  );
}
