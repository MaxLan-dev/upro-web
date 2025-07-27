import { CSSProperties, ReactElement } from "react";

export default function HowUProWorks(): ReactElement {
  const cardClass =
    "bg-lime-950/70 rounded-lg  overflow-hidden flex flex-col h-96";

  return (
    <div className="flex flex-col gap-5 bg-black h-auto p-10 ">
      <div className="flex flex-col gap-10 my-10 w-1/2 mx-auto my-40">
        <h1 className="text-center font-bold text-white text-5xl ">
          A New Way to Train Starts Here
        </h1>
        <p className="text-center text-white">
          No more boring drills. No more wasted screen time. With U-Pro, kids
          learn real soccer skills through fun, personalized missions — all from
          home.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-y-16 gap-x-10 w-4/5 mx-auto">
        {/* Capture Movement */}
        <div className={`col-span-3  ${cardClass}`}>
          <CardDetails
            title="Capture Movement"
            description="U-Pro uses your phone’s camera and our patent-pending AI
            to track real-time biomechanics. No wearables. No setup. Just
            hit record."
            imgSrc="tracking.png"
            imgClassName="rounded-lg w-7/12 mx-auto"
          />
        </div>

        {/* Level Up Skills */}
        <div className={`col-span-3 h-64 overflow-visible ${cardClass} `}>
          <div className="relative flex flex-row  h-full ">
            <div className="flex flex-col gap-2 px-6 py-4 text-white w-2/3 justify-start items-start">
              <h1 className="font-bold text-2xl mb-2">Level Up Skills</h1>
              <p className="">
                Each session adapts to your player’s age and level. Earn XP by
                completing challenges, improving form, and unlocking new drills.
              </p>
            </div>

            <img
              src="level_up_skills.svg"
              alt="level_up_skills image"
              className="shadow-lg shadow-green-800 p-4"
            />
          </div>
        </div>

        {/* Get Rewarded */}
        <div className={`col-span-4 ${cardClass}`}>
          <div className="relative flex flex-row content-center h-full items-center">
            <img
              src="badges.svg"
              alt=""
              className="h-full shadow-2xl shadow-green-400"
            />
            <div className="flex flex-col gap-10 px-6 py-4 text-white">
              <h1 className="font-bold text-2xl mb-2 text-center">
                Get Rewarded
              </h1>
              <p className="">
                Earn badges, unlock content, and show off your skills.
              </p>
            </div>
          </div>
        </div>

        {/* Train Together */}
        <div className={`col-span-2 ${cardClass}`}>
          <CardDetails
            title="Train Together"
            description="Designed for siblings, parents, and teammates to join in. Build healthy habits and memories that last beyond the game."
            imgSrc="train_together.jpg"
            imgClassName="rounded-lg"
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
    <div className="flex flex-col h-full gap-5">
      <div className="px-6 py-4">
        <h1 className="font-bold text-white text-2xl mb-2">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${imgSrc}_image`}
          className={`shadow-2xl shadow-green-400 ${imgClassName}`}
          style={style} // directly pass object here
        />
      ) : (
        <div className="bg-white grow"></div>
      )}
    </div>
  );
}
