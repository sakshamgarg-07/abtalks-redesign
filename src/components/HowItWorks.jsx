function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick your track",
      description:
        "Choose a path that matches what you want to build — Frontend, Backend, AI and more.",
    },
    {
      number: "02",
      title: "Build every day",
      description:
        "Get one focused challenge each day. Build something real and improve one skill at a time.",
    },
    {
      number: "03",
      title: "Share your proof",
      description:
        "Submit your GitHub commit and LinkedIn post. Turn your daily work into public proof.",
    },
  ];

  return (
    <section
  id="how-it-works"
  className="px-5 py-20"
>

      {/* Section heading */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
          How it works
        </p>

        <h2 className="mt-3 text-3xl font-bold leading-tight text-white">
          60 days.
          <br />
          One day at a time.
        </h2>

        <p className="mt-4 text-sm leading-6 text-zinc-400">
          No complicated roadmap. Just show up, build,
          and prove your progress.
        </p>
      </div>


      {/* Steps */}
      <div className="mt-10 space-y-4">

        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >

            {/* Number */}
            <span className="text-sm font-semibold text-purple-400">
              {step.number}
            </span>

            {/* Title */}
            <h3 className="mt-3 text-xl font-semibold text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;