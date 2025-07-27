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

      {/* Cards */}
      <div className="grid grid-cols-6 gap-y-16 gap-x-10 w-4/5 mx-auto">
        {/* Capture Movement */}
        <div className={`col-span-3  ${cardClass}`}>
          <CardDetails
            title="Capture Movement"
            description="U-Pro uses your phone’s camera and our patent-pending AI
            to track real-time biomechanics. No wearables. No setup. Just
            hit record."
            imgSrc="tracking.png"
            imgClassName="rounded-lg w-[50%] mx-auto"
            contentClassName=" flex flex-col h-full gap-2"
          />
        </div>

        {/* Level Up Skills */}
        <div className={`col-span-3 h-64 overflow-visible ${cardClass} `}>
          <CardDetails
            title="Level Up Skills"
            description="Each session adapts to your player’s age and level. Earn XP by
                completing challenges, improving form, and unlocking new drills."
            imgSrc="level_up_skills.svg"
            imgClassName="shadow-lg shadow-green-800 p-4"
            headerClassName="flex flex-col gap-2 px-6 py-4 text-white w-2/3 justify-start items-start"
            contentClassName=" flex flex-row  h-full"
          />
        </div>

        {/* Get Rewarded */}
        <div className={`col-span-4 ${cardClass}`}>
          <CardDetails
            title="Get Rewarded"
            description="Earn badges, unlock exclusive content, and show off your skills. Share your progress, connect with a community, and take your understanding of the game to new heights. Discover new insights, learn from experts, and get recognized for your knowledge of soccer machine learning applications."
            imgSrc="badges.svg"
            imgClassName="w-[45%]"
            imgStyle={{
              WebkitMaskImage: `
              radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at top right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0) 100%)
            `,
              maskImage: `
              radial-gradient(circle at bottom right, rgba(0,0,0,0.1) 90%, rgba(0,0,0,0) 100%),
              radial-gradient(circle at top right, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 100%),
              linear-gradient(to left, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0) 100%)
            `,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            headerClassName="flex flex-col gap-2 px-6 py-4 text-white w-[55%]"
            contentClassName="flex flex-row-reverse h-full justify-start items-start gap-5"
          />
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

/**
 * Properties for the CardDetails component
 * @typedef {Object} CardDetailsProps
 * @property {string} title - The title of the card
 * @property {string} description - The description of the card
 * @property {string} imgSrc - The source of the image
 * @property {string} imgClassName - The class name of the image
 * @property {React.CSSProperties} imgStyle - The style of the image
 */
type CardDetailsProps = {
  title: string;
  description: string;
  imgSrc?: string;
  imgClassName?: string;
  imgStyle?: CSSProperties;
  headerClassName?: string;
  contentClassName?: string;
};

/**
 * A component to display a card with a title, description, and an optional image.
 * @param {string} title - The title of the card
 * @param {string} description - The description of the card
 * @param {string} [imgSrc] - The source of the image
 * @param {string} [imgClassName=""] - The class name of the image
 * @param {React.CSSProperties} [imgStyle={}] - The style of the image
 * @param {string} [headerClassName=""] - The class name of the header
 * @param {string} [contentClassName=""] - The class name of the content
 * @returns {ReactElement} - A React element representing the component
 */
function CardDetails({
  title,
  description,
  imgSrc,
  imgClassName = "",
  imgStyle = {},
  headerClassName = "",
  contentClassName = "",
}: CardDetailsProps): ReactElement {
  return (
    <div className={`${contentClassName || "flex flex-col h-full gap-5"}`}>
      <div className={`${headerClassName || "px-6 py-4 flex flex-col gap-2"}`}>
        <h1 className="font-bold text-white text-2xl mb-2">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${imgSrc}_image`}
          className={`shadow-2xl shadow-green-400 ${imgClassName}`}
          style={imgStyle} // directly pass object here
        />
      ) : (
        <div className="bg-white grow"></div>
      )}
    </div>
  );
}
