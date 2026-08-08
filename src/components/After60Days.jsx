import { Trophy, FolderGit2, Flame, Eye } from "lucide-react";

function After60Days() {
  const results = [
    {
      icon: Flame,
      value: "60",
      label: "Days of consistency",
    },
    {
      icon: FolderGit2,
      value: "12+",
      label: "Projects shipped",
    },
    {
      icon: Eye,
      value: "60+",
      label: "Proof-of-work posts",
    },
    {
      icon: Trophy,
      value: "1",
      label: "Stronger portfolio",
    },
  ];

  return (
    <section className="px-5 py-20">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
        Imagine day 60
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
        What will you have
        <br />
        to show for it?
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        Start with one small build today. Finish with
        a portfolio that tells your story.
      </p>


      <div className="mt-10 grid grid-cols-2 gap-3">

        {results.map((result) => {
          const Icon = result.icon;

          return (
            <div
              key={result.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >

              <Icon
                size={20}
                className="text-purple-400"
              />

              <p className="mt-5 text-2xl font-bold text-white">
                {result.value}
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {result.label}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default After60Days;