import React from 'react';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // This allows passing standard img props like src, alt, className, etc.
}

export function Logo({ src = "/images/logo.png", alt = "Mullick Library Logo", ...props }: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
    />
  );
}