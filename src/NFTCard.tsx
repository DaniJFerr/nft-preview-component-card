import { IconWithText } from "./components/IconWithText.tsx";
import { NFTCardProps } from "./types.ts";

export function NFTCard({
  imageUrl = "main-image.gif",
  title = "Equilibrium #3429",
  description = "Our Equilibrium collection promotes balance and calm.",
  price = "0.041 ETH",
  timeLeft = "3 days left", 
  creator = { name: "Jules Wyvern", avatarUrl: "image-avatar.png" }
}: NFTCardProps) {
  return (
    <div className="flex overflow-hidden flex-col justify-center md:items-center w-screen h-screen text-base bg-slate-900 px-0 ">
      <article className="flex flex-col px-6 py-7 max-md:w-full justify-center w-screen h-screen md:rounded-2xl shadow-2xl bg-slate-800 md:w-[350px] md:h-[610px] max-md:px-5">
        <div className="relative group cursor-pointer">
          <img
            loading="lazy"
            src={imageUrl}
            className="object-contain w-full rounded-lg aspect-square"
            alt={title}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-cyan-400/70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <img
              src="icon-view.svg"
              alt="View"
              className="w-12 h-12"
            />
          </div>
        </div>
        <h1 className="self-start mt-6 text-2xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer">
          {title}
        </h1>
        <p className="mt-4 text-base font-light leading-7 text-slate-400">
          {description}
        </p>
        <div className="flex gap-10 justify-between mt-6 w-full">
          <IconWithText
            iconSrc="icon-ethereum.svg"
            text={price}
            className="font-semibold text-cyan-400"
          />
          <IconWithText
            iconSrc="icon-clock.svg"
            text={timeLeft}
            className=" text-slate-400"
          />
        </div>
        <div className="flex shrink-0 mt-6 h-px bg-slate-700" />
        <div className="flex gap-4 self-start mt-4">
          <img
            loading="lazy"
            src={creator.avatarUrl}
            className="object-contain shrink-0 rounded-full aspect-square w-[33px]"
            alt={`${creator.name}'s avatar`}
          />
          <div className="flex gap-1.5 my-auto">
            <div className="grow text-slate-400">Creation of</div>
            <div className="text-white hover:text-cyan-400 transition-colors cursor-pointer">{creator.name}</div>
          </div>
        </div>
      </article>
    </div>
  );
}
