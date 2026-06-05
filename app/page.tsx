import Link from "next/link";
import React from "react";
import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";
import { Social } from "./components/social";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <ShootingStars
        starWidth={15}
        trailColor={"#67e8f9"}
        starColor={"#ff65fa"}
        minSpeed={8}
        maxSpeed={10}
        starHeight={5}
        minDelay={1000}
        maxDelay={3000}
      />
      <StarsBackground
        starDensity={0.002}
        twinkleProbability={0.8}
        home={true}
      />
      <div className="grid grid-cols-2 px-8 md:grid-cols-1 pt-20">
        <div className="z-10 flex items-center justify-center md:flex-col sm:items-start sm:justify-start">
          <div className="pl-20 md:pl-0 md:w-full">
            <div className="flex flex-col justify-center overflow-hidden">
              <div className="px-10 mb-8">
                <Social />
              </div>
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
              <div className="flex-row flex">
                <span className="text-3xl md:text-8xl pl-10 z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
                  <span className="mr-5 text-left md:mr-3">I&apos;m </span>
                </span>
                <span className="text-3xl md:text-8xl px-2 z-10 text-transparent duration-1000 bg-pink-400 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
                  <span className="mr-5 md:mr-3">Corin </span>
                </span>
                <span className="text-3xl md:text-8xl px-2 z-10 text-transparent duration-1000 bg-cyan-300 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
                  <span className="mr-5 md:mr-3">Gordon.</span>
                </span>
              </div>
              <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
              <div className="inline-block px-10 text-left animate-fade-in z-15 w-full md:w-1/2 mt-8">
                <h2 className="text-md text-zinc-500 md:text-3xl">
                  I&apos;m a full time student from Upstate New York studying robotics engineering at WPI.
                </h2>
                <h2 className="text-md text-zinc-500 md:text-3xl mt-4">
                  Currently working on combat robots and starting up some kinematics centered projects.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
