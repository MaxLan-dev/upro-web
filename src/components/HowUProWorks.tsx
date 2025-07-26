import { CSSProperties, ReactElement } from "react";

export default function HowUProWorks(): ReactElement {
  const cardClass =
    "bg-green-900 rounded-lg overflow-hidden flex flex-col h-96";

  return (
    <div className="flex flex-col gap-5 bg-black h-auto p-10">
      <div className="flex flex-col gap-5 my-10">
        <h1 className="text-center font-bold text-white text-5xl">
          A New Way to Train Starts Here
        </h1>
        <p className="text-center text-white">
          No more boring drills. No more wasted screen time. With U-Pro, kids
          learn real soccer skills through fun, personalized missions — all from
          home.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className={`col-span-2 ${cardClass}`}>
          <CardDetails title="Title" description="Description" />
        </div>
        <div className={cardClass}>05</div>

        <div className={cardClass}>
          <CardDetails
            title="🎉 Get Rewarded"
            description="Earn badges, unlock content, and show off your skills."
            imgSrc="https://cataas.com/cat/gif"
            imgClassName="rounded-lg w-[80%] mx-auto"
          />
        </div>

        <div className={`col-span-2 ${cardClass}`}>
          <CardDetails
            title="👨‍👩‍👧 Train Together"
            description="Designed for siblings, parents, and teammates to join in. Build healthy habits and memories that last beyond the game."
            imgSrc="https://cataas.com/cat/gif"
            imgClassName="rounded-lg"
            style={{
              WebkitMaskImage: `
              radial-gradient(circle at top right, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at bottom right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 100%)
            `,
              maskImage: `
              radial-gradient(circle at top right, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at bottom right, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 100%)
            `,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
}

type CardDetailsProps = {
  title: string;
  description: string;
  imgSrc?: string;
  imgClassName?: string;
  style?: CSSProperties; // style is an object here
};

function CardDetails({
  title,
  description,
  imgSrc,
  imgClassName = "",
  style = {},
}: CardDetailsProps): ReactElement {
  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-4">
        <h1 className="font-bold text-white text-2xl mb-2">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt=""
          className={`w-200 h-full object-cover ${imgClassName}`}
          style={style} // directly pass object here
        />
      ) : (
        <div className="bg-white grow"></div>
      )}
    </div>
  );
}
