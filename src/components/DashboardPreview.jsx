import { Flame, Clock, ArrowUpRight } from "lucide-react";

function DashboardPreview() {
  return (
    <div className="relative mx-auto mt-12 max-w-sm">

      {/* Purple glow */}
      <div className="absolute inset-0 -z-10 bg-purple-600/20 blur-3xl" />

      {/* Dashboard card */}
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#111113] p-5 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs text-zinc-500">
              ABTalks
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              Good evening 👋
            </p>
          </div>

          <div className="h-8 w-8 rounded-full bg-purple-600" />

        </div>


        {/* Streak */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <Flame
                size={18}
                className="text-orange-400"
              />

              <span className="text-sm font-medium">
                12 day streak
              </span>

            </div>

            <span className="text-xs text-green-400">
              +150 XP
            </span>

          </div>


          {/* Progress */}
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[20%] rounded-full bg-purple-500" />

          </div>

          <p className="mt-2 text-xs text-zinc-500">
            Day 12 of 60
          </p>

        </div>


        {/* Today's challenge */}
        <div className="mt-5">

          <p className="text-xs font-medium uppercase tracking-wider text-purple-400">
            Today's challenge
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Build a Landing Page
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Create a responsive landing page and publish your work.
          </p>


          {/* Challenge information */}
          <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">

            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              2 hours
            </div>

            <span>•</span>

            <span>Medium</span>

          </div>


          {/* Start button */}
          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black">

            Start Challenge

            <ArrowUpRight size={16} />

          </button>

        </div>

      </div>

    </div>
  );
}

export default DashboardPreview;