"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref} className="fixed top-0 left-0 right-0 z-50 w-full bg-black">
			<StarsBackground 
				starDensity={0.002} 
				twinkleProbability={0.8} 
				home={false}
			/>
			<div className="relative mx-auto flex w-full max-w-7xl items-center justify-center p-6">

				<div className="flex items-center justify-center gap-8">
					<Link
						href="/"
						className="duration-200 text-zinc-400 hover:text-zinc-100"
					>
						<Home size={20} />
						<span className="sr-only">Home</span>
					</Link>
					<Link
						href="/projects"
						className="duration-200 text-zinc-400 hover:text-zinc-100"
					>
						Projects
					</Link>
				</div>
			</div>
		</header>
	);
};
