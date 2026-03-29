import RecordButton from "./components/RecordButton";

const mockMemory = {
  title: "Memaw's Sunday Lasagna",
  memory:
    "Oh honey, this is the lasagna I made the night your grandfather proposed. He was so nervous he almost knocked the pan right out of the oven! We lived in that tiny apartment on 4th street, and the whole hallway smelled like garlic for a week.",
  ingredients: [
    "1 lb ground sausage",
    "2 cans crushed tomatoes",
    "A healthy pinch of sugar",
    "Ricotta cheese",
  ],
  author: "Memaw",
  year: "1967",
};

export default function Home() {
  return (
    <main className="h-full flex flex-col lg:flex-row overflow-hidden">
      {/* ── Left Pane: Record ── */}
      <section
        className="
          flex-none lg:w-[42%] xl:w-[38%]
          flex flex-col items-center justify-center
          gap-8 px-10 py-12
          border-b lg:border-b-0 lg:border-r
        "
        style={{
          background:
            "linear-gradient(160deg, var(--color-sepia-100) 0%, var(--color-parchment) 100%)",
          borderColor: "var(--color-sepia-200)",
        }}
      >
        {/* Wordmark */}
        <div className="text-center mb-2">
          <h1
            className="text-3xl xl:text-4xl font-bold tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-ink)",
            }}
          >
            Ask Nana Anything
          </h1>
          <p
            className="text-sm uppercase tracking-widest mt-1"
            style={{ color: "var(--color-ink-muted)" }}
          >
            The Family Lore Archive
          </p>
        </div>

        {/* Big Record Button (client component for interactivity) */}
        <RecordButton />
      </section>

      {/* ── Right Pane: Memory Card ── */}
      <section
        className="flex-1 overflow-y-auto p-8 xl:p-12 flex items-start justify-center"
        style={{ background: "var(--color-parchment)" }}
      >
        <article
          className="w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden"
          style={{
            background: "var(--color-parchment-dark)",
            border: "1px solid var(--color-sepia-200)",
          }}
        >
          {/* Card Header */}
          <div
            className="px-8 pt-8 pb-4"
            style={{ borderBottom: "2px solid var(--color-sepia-200)" }}
          >
            <div className="flex items-baseline gap-3 flex-wrap">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: "var(--color-sepia-300)",
                  color: "var(--color-parchment)",
                }}
              >
                Recipe + Memory
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {mockMemory.author} &middot; {mockMemory.year}
              </span>
            </div>
            <h2
              className="text-3xl xl:text-4xl font-bold mt-3 leading-tight"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-ink)",
              }}
            >
              {mockMemory.title}
            </h2>
          </div>

          {/* Memory Quote + Play Button */}
          <div className="px-8 py-6">
            <p
              className="text-lg xl:text-xl leading-relaxed italic"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-ink-light)",
              }}
            >
              &ldquo;{mockMemory.memory}&rdquo;
            </p>

            <button
              className="
                mt-5 flex items-center gap-3
                px-6 py-3 rounded-full
                font-semibold text-base
                transition-all duration-200
                hover:scale-105 active:scale-95
                shadow-md hover:shadow-lg
                cursor-pointer
              "
              style={{
                background:
                  "linear-gradient(135deg, var(--color-burnt-orange), var(--color-crimson))",
                color: "#fdfbf7",
              }}
              aria-label="Play memory in Memaw's cloned voice"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 flex-none"
                aria-hidden="true"
              >
                <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14Z" />
              </svg>
              Play Audio in Memaw&rsquo;s Voice
            </button>
          </div>

          {/* Dashed Divider */}
          <div
            className="mx-8"
            style={{ borderTop: "1px dashed var(--color-sepia-300)" }}
          />

          {/* Ingredients */}
          <div className="px-8 py-6">
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sepia-400)" }}
            >
              Ingredients
            </h3>
            <ul className="space-y-2">
              {mockMemory.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-2 h-2 rounded-full flex-none"
                    style={{ background: "var(--color-sepia-300)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-lg"
                    style={{ color: "var(--color-ink-light)" }}
                  >
                    {ingredient}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Footer */}
          <div
            className="px-8 py-4 flex items-center justify-between"
            style={{
              background: "var(--color-sepia-100)",
              borderTop: "1px solid var(--color-sepia-200)",
            }}
          >
            <span
              className="text-sm"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Extracted by Gemini &middot; Voiced by ElevenLabs
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "var(--color-sepia-400)" }}
            >
              ✦ asknanaanything.tech
            </span>
          </div>
        </article>
      </section>
    </main>
  );
}
