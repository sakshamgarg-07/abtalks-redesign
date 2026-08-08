import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Clock,
  ExternalLink,
  Code2,
  Share2,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

function ChallengeDay() {
  const [submitted, setSubmitted] = useState(false);

  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const completedProofs = [
    githubUrl,
    linkedinUrl,
    liveUrl,
  ].filter((value) => value.trim() !== "").length;

  const proofPercentage = Math.round(
    (completedProofs / 3) * 100
  );

  const proofReady = completedProofs === 3;

  function handleSubmit(event) {
    event.preventDefault();

    if (!githubUrl || !linkedinUrl || !liveUrl) {
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#09090B] px-5 pb-10 text-white">

      {/* Header */}
      <header className="flex items-center justify-between py-5">

        <Link
          to="/dashboard"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
        >
          <ArrowLeft size={19} />
        </Link>

        <div className="text-center">
          <p className="text-xs text-zinc-500">
            60-Day Challenge
          </p>

          <p className="mt-1 text-sm font-semibold">
            Day 12
          </p>
        </div>

        <div className="w-10" />

      </header>


      {/* Day information */}
      <section className="pt-6">

        <div className="flex items-center gap-2">

          <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-400">
            DAY 12
          </span>

          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Clock size={14} />
            ~2 hours
          </span>

        </div>


        <h1 className="mt-5 text-3xl font-bold leading-tight">
          Build a Landing Page
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-400">
          Create a responsive landing page for a student-focused
          product. Focus on clear hierarchy, strong visual design
          and mobile responsiveness.
        </p>

      </section>


      {/* Task */}
      <section className="mt-8">

        <h2 className="text-lg font-semibold">
          Today's task
        </h2>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">

          <p className="text-sm leading-7 text-zinc-300">
            Design and build a landing page that communicates
            the product clearly within the first few seconds.
          </p>

          <div className="mt-5 space-y-3">

            <TaskItem>
              Create a mobile-first layout
            </TaskItem>

            <TaskItem>
              Include a clear hero section and CTA
            </TaskItem>

            <TaskItem>
              Make the page responsive
            </TaskItem>

            <TaskItem>
              Deploy the project publicly
            </TaskItem>

          </div>

        </div>

      </section>


      {/* Submission */}
      <section className="mt-8">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-purple-400">
              Proof of work
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Show what you built
            </h2>
            {/* Proof Health */}
<div className="mt-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-sm font-semibold text-white">
        Proof health
      </p>

    <p className="mt-1 text-xs text-zinc-500">
  {proofReady
    ? "Everything is ready to submit."
    : `${3 - completedProofs} proof${
        3 - completedProofs === 1 ? "" : "s"
      } remaining.`}
</p>

    </div>

    <span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    proofReady
      ? "bg-green-500/10 text-green-400"
      : "bg-yellow-500/10 text-yellow-400"
  }`}
>
  {proofReady ? "Ready" : `${completedProofs}/3`}
</span>

  </div>


  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

    <div
  className={`h-full rounded-full transition-all duration-500 ${
    proofReady ? "bg-green-500" : "bg-purple-500"
  }`}
  style={{ width: `${proofPercentage}%` }}
/>

  </div>


  <div className="mt-4 grid grid-cols-3 gap-2">

    <div className="rounded-xl bg-white/5 p-3 text-center">

     <div
  className={
    githubUrl.trim()
      ? "text-sm text-green-400"
      : "text-sm text-zinc-600"
  }
>
  {githubUrl.trim() ? "✓" : "○"}
</div>

      <p className="mt-1 text-[11px] text-zinc-500">
        GitHub
      </p>

    </div>


    <div className="rounded-xl bg-white/5 p-3 text-center">

     <div
  className={
    linkedinUrl.trim()
      ? "text-sm text-green-400"
      : "text-sm text-zinc-600"
  }
>
  {linkedinUrl.trim() ? "✓" : "○"}
</div>

      <p className="mt-1 text-[11px] text-zinc-500">
        LinkedIn
      </p>

    </div>


    <div className="rounded-xl bg-white/5 p-3 text-center">

     <div
  className={
    liveUrl.trim()
      ? "text-sm text-green-400"
      : "text-sm text-zinc-600"
  }
>
  {liveUrl.trim() ? "✓" : "○"}
</div>

      <p className="mt-1 text-[11px] text-zinc-500">
        Live Demo
      </p>

    </div>

  </div>

</div>
          </div>

          {!submitted && (
            <span className="text-xs text-zinc-500">
              3 links required
            </span>
          )}

        </div>


        {submitted ? (
          <SuccessState />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-4"
          >

            {/* GitHub */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
               <Code2 size={16} />
                GitHub commit
              </label>

              <input
                type="url"
                value={githubUrl}
                onChange={(event) => setGithubUrl(event.target.value)}
                placeholder="https://github.com/..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />

              <p className="mt-2 text-xs text-zinc-600">
                Paste the URL of today's commit.
              </p>
            </div>


            {/* LinkedIn */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <Share2 size={16} />
                LinkedIn post
              </label>

              <input
                type="url"
                value={linkedinUrl}
                onChange={(event) => setLinkedinUrl(event.target.value)}
                placeholder="https://linkedin.com/posts/..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />

              <p className="mt-2 text-xs text-zinc-600">
                Share the post where you documented today's work.
              </p>
            </div>


            {/* Live URL */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                <ExternalLink size={16} />
                Live deployment
              </label>

              <input
                type="url"
                value={liveUrl}
                onChange={(event) => setLiveUrl(event.target.value)}
                placeholder="https://your-project.vercel.app"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-purple-500"
              />

              <p className="mt-2 text-xs text-zinc-600">
                Give reviewers a link they can open and test.
              </p>
            </div>


            {/* Submit */}
            <button
  type="submit"
  disabled={!proofReady}
  className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-4 text-sm font-semibold transition ${
    proofReady
      ? "bg-purple-600 hover:bg-purple-500 text-white"
      : "bg-white/10 text-zinc-600 cursor-not-allowed"
  }`}
>
  {proofReady ? "Submit today's proof" : `${3 - completedProofs} proofs remaining`}
  <Send size={16} />
</button>
          </form>
        )}

      </section>


      {/* Footer note */}
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4">

        <p className="text-xs leading-5 text-zinc-500">
          Your submission creates a public record of your progress.
          Don't worry about perfection — consistency is the goal.
        </p>

      </div>

    </main>
  );
}


/* Task checklist item */
function TaskItem({ children }) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10">
        <Check
          size={13}
          className="text-green-400"
        />
      </div>

      <p className="text-sm text-zinc-400">
        {children}
      </p>

    </div>
  );
}


/* Successful submission */
function SuccessState() {
  return (
    <div className="mt-5 rounded-3xl border border-green-500/20 bg-green-500/5 p-6 text-center">

      {/* Success icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">

        <Check
          size={30}
          className="text-green-400"
        />

      </div>


      {/* Heading */}
      <h3 className="mt-5 text-2xl font-bold text-white">
        Day 12 complete 🎉
      </h3>


      {/* Message */}
      <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-zinc-400">
        You showed up, built something and left proof
        behind. That's another day shipped.
      </p>


      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-3">

        <div className="rounded-2xl bg-white/5 p-4">

          <p className="text-xl font-bold text-white">
            +150
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            XP earned
          </p>

        </div>


        <div className="rounded-2xl bg-white/5 p-4">

          <p className="text-xl font-bold text-white">
            🔥 12
          </p>

          <p className="mt-1 text-xs text-zinc-500">
            Day streak
          </p>

        </div>

      </div>


      {/* Proof confirmation */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left">

        <p className="text-xs font-medium uppercase tracking-[0.15em] text-purple-400">
          Proof saved
        </p>

        <div className="mt-3 space-y-2">

          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">
              GitHub
            </span>

            <span className="text-green-400">
              ✓ Submitted
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">
              LinkedIn
            </span>

            <span className="text-green-400">
              ✓ Submitted
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-zinc-400">
              Live Demo
            </span>

            <span className="text-green-400">
              ✓ Submitted
            </span>
          </div>

        </div>

      </div>


      {/* Back button */}
      <Link
        to="/dashboard"
        className="mt-5 flex w-full items-center justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
      >
        Back to dashboard →
      </Link>

    </div>
  );
}

export default ChallengeDay;