export default function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="bg-purple-brand py-20 text-white">
      <div className="container-pad max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-yellow-brand">{eyebrow}</p>
        <h1 className="text-balance text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        {text ? <p className="mt-6 text-lg leading-8 text-white/82 md:text-xl">{text}</p> : null}
      </div>
    </section>
  );
}
