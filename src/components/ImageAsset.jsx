import Image from 'next/image';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export default function ImageAsset({ asset }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl">
      <div className="relative group flex items-center justify-center h-52 overflow-hidden p-4">
        
        {/* Image */}
        <Image
          src={asset.url}
          alt={asset.name}
          width={asset.width || 200}
          height={asset.height || 200}
          className="max-h-48 object-contain"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
            {/* Vertical separator on the right */}
            <div className="absolute top-0 bottom-0 right-0 h-full p-4 flex flex-row items-center text-white text-xs">
                <span className="-rotate-90">{asset.height} {asset.unit}</span>
                <Separator orientation="vertical" className="h-full w-1 border-gray-400 dark:border-gray-600" />
            </div>

            {/* Horizontal separator at the bottom */}
            <div className="absolute left-0 right-0 bottom-0 p-4 flex flex-col items-center justify-center gap-2 text-white text-xs">
                {/* Width text */}
                <span className="whitespace-nowrap">{asset.width} {asset.unit}</span>

                {/* Horizontal line */}
                <Separator className="border-gray-400 dark:border-gray-600" />
            </div>

            {/* Centered description */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-2">
                <span className="text-sm font-medium text-white">{asset.name}</span>
                <Button size="xs" variant="outline" asChild>
                    <a href={asset.url} download={asset.name} target="_blank">Download</a>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
