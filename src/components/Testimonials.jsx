function Testimonials() {
  const testimonials = [
    {
      quote:
        "I stopped waiting for motivation and started shipping every day.",
      name: "SAKSHAM GARG",
      role: "CSE Student • Day 20",
    },
    {
      quote:
        "The GitHub + LinkedIn proof made my progress feel real.",
      name: "SATYAM SRIVASTAVA",
      role: "CSE Student • Day 12",
    },
    {
      quote:
        "After two months, I finally had projects I was confident showing recruiters.",
      name: "SAHIL JACKSON",
      role: "CSE Student • Day 60",
    },
  ];

  return (
    <section className="px-5 py-20">

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
        Student stories
      </p>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Built by students.
        <br />
        Proved in public.
      </h2>

      <div className="mt-10 space-y-4">

        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >

            <p className="text-base leading-7 text-zinc-300">
              “{testimonial.quote}”
            </p>

            <div className="mt-5">

              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {testimonial.role}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;