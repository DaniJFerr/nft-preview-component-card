
import { IconWithTextProps } from "./types";

export function IconWithText({
  iconSrc,
  text,
  className = "",
}: IconWithTextProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain shrink-0 self-center w-4 aspect-square"
        alt=""
      />
      <div>{text}</div>
    </div>
  );
}
