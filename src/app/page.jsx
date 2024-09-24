"use client"
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
export default function Home() {
  return (
    
    <main className="  bg-mainBg dark:bg-gray-600 text-black dark:text-white">
      
<Navbar />

<Hero />

<Projects/>
    </main>
  );
}
