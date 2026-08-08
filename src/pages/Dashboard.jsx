import { Link } from "react-router-dom";

import {
  Flame,
  ArrowUpRight,
  Clock,
  Trophy,
  Target,
} from "lucide-react";

function Dashboard() {

  const isFirstDay = false;
  const missedYesterday = false;
  return (
    <main className="min-h-screen bg-[#09090B] pb-24 text-white">

      {/* Header */}
      <header className="px-5 pb-6 pt-6">

        <p className="text-sm text-zinc-500">
  Day 12 of your challenge
</p>
        <div className="mt-2 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              Good evening, Saksham 👋
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Keep showing up. You're doing great.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 font-semibold">
            S
          </div>

        </div>

      </header>


      {/* Streak card */}
      <section className="px-5">

        <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-purple-500/5 p-5">

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                <Flame
                  size={22}
                  className="text-orange-400"
                />
              </div>

              <div>
                <p className="text-xs text-zinc-400">
                  Current streak
                </p>

                <p className="text-2xl font-bold">
                  12 days
                </p>
              </div>

            </div>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
              On track
            </span>

          </div>

          {/* First day encouragement */}
<section className="px-5 pt-4">

  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">

    <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple-400">
      Starting today
    </p>

    <p className="mt-2 text-sm leading-6 text-zinc-300">
      Everyone starts at Day 1. Complete today's challenge
      to light your first streak.
    </p>

  </div>

</section>


          {/* Progress */}
          <div className="mt-6 flex items-center justify-between text-xs">

            <span className="text-zinc-400">
              Challenge progress
            </span>

            <span className="font-medium text-white">
              12 / 60 days
            </span>

          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-[20%] rounded-full bg-purple-500" />

          </div>

          <p className="mt-3 text-xs text-zinc-500">
            48 days left. Keep the streak alive.
          </p>

        </div>

      </section>


      {/* Today's challenge */}
      <section className="px-5 pt-8">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-400">
              Today's challenge
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Day 12
            </h2>
          </div>

          <span className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
            Medium
          </span>

        </div>


        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <h3 className="text-xl font-semibold">
            Build a Landing Page
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Create a responsive landing page for a student-focused
            product and publish your work.
          </p>


          <div className="mt-5 flex items-center gap-4 text-xs text-zinc-500">

            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              2 hours
            </div>

            <span>•</span>

            <span>150 XP</span>

          </div>


          <Link
             to="/day/12"
             className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3.5 text-sm font-semibold transition hover:bg-purple-500">
             Continue challenge

  <ArrowUpRight size={16} />
</Link>

        </div>

      </section>

      {/* Streak recovery */}
<section className="px-5 pt-8">

  <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-5">

    <div className="flex items-start gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
        <Flame
          size={21}
          className="text-orange-400"
        />
      </div>

      <div>

        <p className="text-sm font-semibold text-white">
          Missed a day?
        </p>

        <p className="mt-1 text-sm leading-6 text-zinc-500">
          Your streak may pause, but your progress doesn't.
          Come back today and keep building.
        </p>

      </div>

    </div>

  </div>

</section>


      {/* Progress stats */}
      <section className="px-5 pt-8">

        <div className="flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            Your progress
          </h2>

          <span className="text-xs text-purple-400">
            View all
          </span>

        </div>


        <div className="mt-4 grid grid-cols-3 gap-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <Target
              size={18}
              className="text-purple-400"
            />

            <p className="mt-4 text-xl font-bold">
              12
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Days done
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <ArrowUpRight
              size={18}
              className="text-green-400"
            />

            <p className="mt-4 text-xl font-bold">
              8
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Projects
            </p>

          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">

            <Trophy
              size={18}
              className="text-yellow-400"
            />

            <p className="mt-4 text-xl font-bold">
              3
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Badges
            </p>

          </div>

        </div>

      </section>


      {/* Achievement */}
      <section className="px-5 pt-8">

        <h2 className="text-lg font-semibold">
          Latest achievement
        </h2>

        <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10">

            <Flame
              size={24}
              className="text-orange-400"
            />

          </div>

          <div className="flex-1">

            <p className="font-semibold">
              7 Day Streak
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              You showed up for seven days in a row.
            </p>

          </div>

          <span className="text-xs font-medium text-green-400">
            Unlocked
          </span>

        </div>

      </section>

      {/* Proof Stack */}
<section className="px-5 pt-8 pb-8">

  <div className="flex items-end justify-between">

    <div>
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple-400">
        Your Proof Stack
      </p>

      <h2 className="mt-2 text-xl font-bold text-white">
        Public work, day by day.
      </h2>

      <p className="mt-1 text-sm text-zinc-500">
        Your challenge is becoming your portfolio.
      </p>
    </div>

    <button
      type="button"
      className="text-sm font-medium text-purple-400"
    >
      View all
    </button>

  </div>


  {/* Proof item 1 */}
  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

    <div className="flex items-start justify-between gap-3">

      <div>

        <p className="text-xs font-medium text-purple-400">
          DAY 12
        </p>

        <h3 className="mt-1 font-semibold text-white">
          Build a Landing Page
        </h3>

      </div>

      <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
        Complete
      </span>

    </div>


    <div className="mt-4 flex flex-wrap gap-2">

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ GitHub
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ LinkedIn
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ Live Demo
      </span>

    </div>


    <button
      type="button"
      className="mt-4 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-white"
    >
      View proof →
    </button>

  </div>


  {/* Proof item 2 */}
  <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

    <div className="flex items-start justify-between gap-3">

      <div>

        <p className="text-xs font-medium text-purple-400">
          DAY 11
        </p>

        <h3 className="mt-1 font-semibold text-white">
          Student Dashboard
        </h3>

      </div>

      <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
        Complete
      </span>

    </div>


    <div className="mt-4 flex flex-wrap gap-2">

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ GitHub
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ LinkedIn
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ Live Demo
      </span>

    </div>

  </div>


  {/* Proof item 3 */}
  <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

    <div className="flex items-start justify-between gap-3">

      <div>

        <p className="text-xs font-medium text-purple-400">
          DAY 10
        </p>

        <h3 className="mt-1 font-semibold text-white">
          Weather Dashboard
        </h3>

      </div>

      <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
        Complete
      </span>

    </div>


    <div className="mt-4 flex flex-wrap gap-2">

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ GitHub
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ LinkedIn
      </span>

      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-xs text-zinc-400">
        ✓ Live Demo
      </span>

    </div>

  </div>

</section>


      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#09090B]/95 px-5 py-3 backdrop-blur">

        <div className="mx-auto flex max-w-md items-center justify-around">

          <button className="text-xs font-medium text-purple-400">
            Home
          </button>

          <button className="text-xs font-medium text-zinc-500">
            Challenges
          </button>

          <button className="text-xs font-medium text-zinc-500">
            Progress
          </button>

          <button className="text-xs font-medium text-zinc-500">
            Profile
          </button>

        </div>

      </nav>

    </main>
  );
}

export default Dashboard;