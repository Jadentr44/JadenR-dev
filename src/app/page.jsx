"use client";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme?storedTheme:"light");



  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleDarkMode() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <main
      className={`${theme} bg-mainBg dark:bg-gray-600 text-black dark:text-white overflow-hidden `}
    >
      <Navbar toggle={toggleDarkMode} theme={theme} />

      <Hero />

      <Projects />

      <Contact />
    </main>
  );
}
