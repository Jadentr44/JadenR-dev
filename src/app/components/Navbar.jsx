import React from "react";
import Menu from "./icons/Menu";
export default function navbar({ toggle, theme }) {
  const name = "Jaden";
  return (
    <nav className="fixed top-0 left-0 right-0 bg-mainBg dark:bg-gray-600 dark:text-white z-10">
      <div className="max-w-7xl py-2 px-4 flex mx-auto items-center justify-between">
        <a className="flex items-center gap-2" href="#">
          <img className="sm:h-12 h-10" src="/logo.png " alt="" />
          <ul className="flex sm:text-4xl name text-3xl font-bold">
            {name.split("").map((e, i) => {
              return (
                <li
                  key={i}
                  className=" transition-all hover:text-red-500 hover:scale-110 hover:translate-y-1"
                >
                  {e}
                </li>
              );
            })}
          </ul>
        </a>
        <div className="flex items-center gap-4">
          <ul className="gap-4 text-xl font-semibold hidden md:flex items-center">
            <li className="hover:text-red-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-red-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <label className="relative flex items-center cursor-pointer">
            <input
              id="darkToggle"
              onChange={() => toggle()}
              type="checkbox"
              checked={theme === "dark" ? true : false}
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
          </label>
          <div className="block md:hidden navbar-burger">
            <Menu theme={theme} />
          </div>
        </div>
      </div>
    </nav>
  );
}
