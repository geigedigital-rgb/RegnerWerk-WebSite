export function ProcessSteps({
  steps,
}: {
  steps: {
    number?: string;
    title: string;
    description?: string;
    body?: string;
  }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => {
        const text = step.description || step.body;
        return (
          <li
            key={step.title}
            className="rounded-3xl border border-gray-100 bg-white p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-bold text-forest">
              {step.number || String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-bold text-forest">{step.title}</h3>
            {text ? (
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
