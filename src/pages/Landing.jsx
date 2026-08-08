import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import DashboardPreview from "../components/DashboardPreview";
import HowItWorks from "../components/HowItWorks";
import Tracks from "../components/Tracks";
import ProofSection from "../components/ProofSection";
import After60Days from "../components/After60Days";
import Testimonials from "../components/Testimonials";

function Landing() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white">
      <Navbar />

      <section className="px-5 pt-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
          60-Day Coding Challenge
        </p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">
          Build every day.
          <br />
          <span className="text-purple-500">
            Get noticed.
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
          Turn 60 days of consistent coding into proof of work
          that recruiters can see.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link
  to="/dashboard"
  className="w-full rounded-2xl bg-purple-600 px-6 py-4 text-center font-semibold text-white transition hover:bg-purple-500"
>
  Start My Challenge →
</Link>

         <a
  href="#how-it-works"
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-zinc-200 transition hover:bg-white/10 text-center block"
>
  See How It Works
</a>
        </div>
        <DashboardPreview />
        <HowItWorks />
        <Tracks />
        <ProofSection />
        <After60Days />
        <Testimonials />

      </section>
    </main>
  );
}

export default Landing;