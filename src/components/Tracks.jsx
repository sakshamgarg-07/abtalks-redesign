import {
  Code2,
  Server,
  Brain,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

function Tracks() {
  const tracks = [
    {
      icon: Code2,
      title: "Frontend",
      description: "Build websites, dashboards and modern interfaces.",
      projects: "12 projects",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Build APIs, services and real-world applications.",
      projects: "12 projects",
    },
    {
      icon: Brain,
      title: "AI / ML",
      description: "Build practical machine learning and AI projects.",
      projects: "12 projects",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create useful mobile experiences from scratch.",
      projects: "12 projects",
    },
  ];

  return (
    <section className="px-5 py-20">

      {/* Heading */}
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
        Choose your path
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
        Build what
        <br />
        excites you.
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        Pick a track and spend the next 60 days building
        projects you can actually show.
      </p>


      {/* Track cards */}
      <div className="mt-10 grid gap-4">

        {tracks.map((track) => {
          const Icon = track.icon;

          return (
            <div
              key={track.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-purple-500/40 hover:bg-white/[0.05]"
            >

              {/* Top row */}
              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Icon size={22} />
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-zinc-600 transition group-hover:text-purple-400"
                />

              </div>


              {/* Content */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {track.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {track.description}
              </p>

              <p className="mt-4 text-xs font-medium text-purple-400">
                {track.projects}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Tracks;