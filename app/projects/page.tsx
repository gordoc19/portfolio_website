import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { ShootingStars } from "../components/shooting-stars";
import { StarsBackground } from "../components/stars-background";

export default function ProjectsPage() {
  const projects = allProjects
    .filter((project) => project.published)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
          <ShootingStars
            starWidth={15}
            trailColor="#ff65fa"
            starColor="#67e8f9"
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
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="flex flex-nowrap justify-center gap-2 whitespace-nowrap text-3xl md:text-8xl font-bold tracking-tight text-transparent">
            <span className="px-2 z-10 bg-cyan-300 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
              Project
            </span>
            <span className="px-2 z-10 bg-pink-400 cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
              Portfolio
            </span>
          </div>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <p
            className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg md:text-xl font-semibold opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            Ordered Chronologically
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-3xl border border-white-700/80 bg-zinc-950/70 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden bg-zinc-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 to-zinc-800 text-sm text-zinc-400">
                      Add `image` to the project frontmatter
                    </div>
                  )}
                </div>
                <div className="space-y-3 p-6">
                  <div className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-semibold">
                    {project.category}
                  </div>
                  <h2 className="text-xl font-semibold text-pink-400">{project.title}</h2>
                  <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
                  <div className="text-sm font-medium text-cyan-300">View project details →</div>
                </div>
              </Link>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-zinc-700/80 bg-zinc-950/70 p-12 text-center text-zinc-400">
              No projects are available yet. Add markdown files under <code>content/projects</code> with title, description, and image frontmatter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
