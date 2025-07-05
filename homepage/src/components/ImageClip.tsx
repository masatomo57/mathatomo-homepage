
interface ImageClipProps {
  src: string;
  alt?: string;
  shape?: 'circle' | 'rounded' | 'square';
  size?: number;
  caption?: string;
}

const shapeClass = {
  circle: 'rounded-full',
  rounded: 'rounded-xl',
  square: '',
};

export default function ImageClip({ src, alt = '', shape = 'square', size = 128, caption = '' }: ImageClipProps) {
  return (
    <div className="flex flex-col">
      <img
        src={src}
        alt={alt}
        className={`object-cover ${shapeClass[shape]}`}
        style={{ width: size, height: size }}
      />
      {caption && (
        <div className="text-sm text-secondary mt-2">
          {caption}
        </div>
      )}
    </div>
  );
}
