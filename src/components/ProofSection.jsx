import { Code2, Share2, Check, ArrowRight } from "lucide-react";

function ProofSection() {
  return (
    <section className="px-5 py-20">

      {/* Heading */}
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
        Your work matters
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
        Don't just learn.
        <br />
        <span className="text-purple-500">
          Leave proof.
        </span>
      </h2>

      <p className="mt-4 text-sm leading-6 text-zinc-400">
        Every day turns into something you can show,
        share and build your reputation around.
      </p>


      {/* Flow */}
      <div className="mt-10 space-y-4">

        {/* GitHub */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white">
              <Code2 size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Build on GitHub
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Commit your work and build a public portfolio.
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
            <Check size={14} />
            GitHub commit submitted
          </div>

        </div>


        {/* Arrow */}
        <div className="flex justify-center text-zinc-600">
          <ArrowRight size={18} className="rotate-90" />
        </div>


        {/* LinkedIn */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Share2 size={22} />
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Share on LinkedIn
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Turn your daily progress into public visibility.
              </p>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
            <Check size={14} />
            LinkedIn post submitted
          </div>

        </div>

      </div>


      {/* Bottom message */}
      <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">

        <p className="text-sm leading-6 text-zinc-300">
          After 60 days, you don't just have a streak.
          You have a trail of real work that proves what
          you can build.
        </p>

      </div>

    </section>
  );
}

export default ProofSection;