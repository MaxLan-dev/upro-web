import { ReactElement } from "react";

export default function HowUProWorks(): ReactElement {
  const cardClass = "bg-green-900 rounded-lg min-h-80";
  return (
    <div className="flex flex-col gap-5 px-15">
      <h1 className="text-center font-bold text-5xl">
        A New Way to Train Starts Here
      </h1>
      <p className="text-center ">
        No more boring drills. No more wasted screen time. With U-Pro, kids
        learn real soccer skills through fun, personalized missions — all from
        home.
      </p>
      <div className="grid grid-cols-3 gap-5">
        <div className={`col-span-2 ${cardClass}`}>
          {CardDetails("Title", "Description")}
        </div>
        <div className={cardClass}>05</div>
        <div className={cardClass}>06</div>
        <div className={`col-span-2 ${cardClass}`}>07</div>
      </div>
    </div>
  );
}

/**
 * Returns a JSX element representing a card with a title and description.
 * @param {string} title The title of the card.
 * @param {string} description The description of the card.
 * @returns {ReactElement} A JSX element representing a card with a title and description.
 */
function CardDetails(title: string, description: string): ReactElement {
  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-white text-2xl">{title}</h1>
      <p className="text-white ">{description}</p>
    </div>
  );
}
