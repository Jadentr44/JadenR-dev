import React from "react";
import Image from "next/image";
const projectArr = [
  { code: "portfolio", name: "Portfolio" },
  { code: "portfolio", name: "Portfolio" },
];
export default function Projects() {
  return (
    <div className=" max-w-6xl pb-12 grid md:grid-cols-2 gap-5 mx-auto justify-items-center  re">
      {projectArr.map((e, i) => {
        return projectCard(e);
      })}
    </div>
  );
}
function projectCard(e, i) {
  return (
    // card container
    <div
      key={i}
      style={{ backgroundImage: `url(/portfolio.png)` }}
      className="w-full aspect-[3/2]  bg-cover  border-2  rounded-lg  relative shadow-lg max-w-xl "
    >
      {/* card content */}
      <div className="group absolute left-0 right-0 top-0 bottom-0 bg-red-500 text-white opacity-0 hover:opacity-100 bg-opacity-95 p-4 transition-opacity duration-500 flex md:flex-col overflow-hidden  items-center gap-8 md:gap-0 justify-center">
        <div>

        {/* name */}
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          {e.name}
        </h4>
        <button onClick={()=>alert("clicked")}
          className="border-2 border-white font-semibold px-4 py-1 my-3 rounded-md  md:text-lg
          }"
          >
          Learn More
        </button>
          </div>
{/* image */}
        <div className="duration-500 transition-transform transform translate-y-4 group-hover:translate-y-0 w-1/3 aspect-[9/16] relative  ">
          <Image
            src={`/mobilePortfolio.png`}
            alt="Picture of the author"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
          />
        </div>
      </div>
    </div>
  );
}
