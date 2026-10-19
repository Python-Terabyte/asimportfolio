import Image from "next/image";

interface PhotoProps {
  id: string;
  alt: string;
  className?: string;
}

export default function Photo({ id, alt, className = "" }: PhotoProps) {
  return (
    <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-ivory/[0.08] ${className}`}>
      <Image
        src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`}
        alt={alt}
        fill
        sizes="(min-width: 768px) 520px, 100vw"
        className="object-cover grayscale-[40%] brightness-90"
      />
    </div>
  );
}
