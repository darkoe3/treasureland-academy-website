"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

export default function SafeImage({ src, alt, className = "", fill = true, sizes = "100vw", priority = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`image-fallback flex h-full min-h-[180px] w-full items-center justify-center ${className}`}>
        <div className="rounded-full bg-white/20 p-4 text-white">
          <ImageOff aria-hidden="true" size={34} />
        </div>
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
