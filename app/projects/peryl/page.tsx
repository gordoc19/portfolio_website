import Image from "next/image";
import Link from "next/link";
import { ShootingStars } from "../../components/shooting-stars";
import { StarsBackground } from "../../components/stars-background";
import { Social } from "../../components/social";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden">
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
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="flex flex-nowrap justify-center whitespace-nowrap text-3xl md:text-8xl font-bold tracking-tight">
            <span className="inline-block z-10 text-transparent bg-clip-text cursor-default text-edge-outline animate-title font-display whitespace-nowrap"
              style={{ backgroundImage: "linear-gradient(to right, #67e8f9, #ff65fa)" }}>
              Peryl
            </span>
          </div>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/80 shadow-lg">
          <Image
            src="/images/perylDW.png"
            alt="Peryl after a great hit"
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/80 shadow-lg">
          <Image
            src="/images/perylHero.png"
            alt="Peryl hero shot"
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xs:grid-cols-1">
        <div className="p-8 text-zinc-400 shadow-lg md:px-40 xs:px-10">
          <h1 className="text-2xl xs:text-lg font-bold text-zinc-200 mb-4 text-center">Goals</h1>
          <p className="text-base leading-7">
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}Peryl is a three pound combat robot. The features I designed around were an abnormally large beater bar, four wheel drive, and a six cell high voltage lithium polymer battery. I was able to make a 3.15 inch wide beater bar with a diameter of 3.85 inches and a measured tip speed of 160 mph. Peryl also has a theoretical mas drive speed of 16 mph.
          </p>
        </div>
        <div className="p-8 text-zinc-400 shadow-lg md:px-40 xs:px-10">
          <h1 className="text-2xl xs:text-lg font-bold text-zinc-200 mb-4 text-center">Timeline</h1>
          <p className="text-base leading-7">
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}My goal was for Peryl to compete in the April 2026 CMRC (Central Massachusetts Robot Combat) competition, and then be prepared to fight the again the weekend after in the May 2026 NHRL (National Havoc Robot League) Open
          </p>
        </div>
        <div className="overflow-hidden shadow-lg">
          <iframe width={800} height={450} src="https://www.youtube.com/embed/KsMVWsLJgn8?si=8dZiFrHyIoCuJopC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="h-full w-full object-cover px-40"></iframe>
        </div>
        <div className="p-8 text-zinc-400 shadow-lg md:px-40 xs:px-10">
          <h1 className="text-2xl xs:text-lg font-bold text-zinc-200 mb-4 text-center">Debut Fight</h1>
          <p className="text-base leading-7">
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}Peryl made fought it's debut versus "Plumbop" at the April 2026 CMRC competition. I ran Peryl with its fork configuration, and found out that I had sprung the forks too much and designed them poorly, so they kept my front wheels off the ground and severly inhibited mainly my turning, but also my entire drive.
          </p>
          <p>
            {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}I spun slowly for the majority of the fight and lost a lot of the head to head engagements as a result. However, towards the end of the fight, I spun up to max speed and my opponent made a driving error. The resulting engagement shattered one of my opponents drive motors and quickly led to Peryl winning by knockout.
          </p>
        </div>
      </div>
    </div>
  );
}
