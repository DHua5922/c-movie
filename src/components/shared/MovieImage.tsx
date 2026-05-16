import { type ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  posterPath: string;
}

export default function MovieImage({ className, title, posterPath }: Props) {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
      alt={title}
      className={`img ${className}`}
    />
  );
}
