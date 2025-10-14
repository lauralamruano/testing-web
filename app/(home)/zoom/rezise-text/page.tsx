// app/resize-text-mock/page.tsx
// app/resize-text-mock/page.tsx
"use client";
import React from "react";

/**
 * Mock page for WCAG 2.2 SC 1.4.4 Resize Text — Intentional failures included
 * Tech stack: React + Next.js + TypeScript + Tailwind CSS
 *
 * What you'll see:
 *  - PASS block: normal text that scales with page zoom.
 *  - FAIL A: text wrapped in a counter‑zoom transform (appears not to grow at 200%).
 *  - FAIL B: fixed‑pixel container that clips when zoomed (layout break).
 *  - FAIL C: Chromium‑only `zoom: 0.5` (non‑standard) to simulate non‑scaling text.
 *
 * QA Steps (per ticket):
 * 1) 100% zoom on 1366×768 viewport → take a reference screenshot.
 * 2) Increase to 200% (Ctrl/Cmd + until 200%).
 * 3) Observe which texts visibly scale; record the ones that do not as FAIL.
 */
// Small client component to display the current page zoom (uses VisualViewport when available)
function ZoomIndicator(): JSX.Element {
  const [scale, setScale] = React.useState<number>(1);

  React.useEffect(() => {
    const read = () => {
      // Prefer VisualViewport scale (Chromium/Safari). Fallback to 1.
      const vv = (typeof window !== "undefined" && (window as any).visualViewport)
        ? (window as any).visualViewport.scale
        : 1;
      setScale(vv || 1);
    };
    read();
    const vv = (typeof window !== "undefined" && (window as any).visualViewport);
    vv?.addEventListener("resize", read);
    vv?.addEventListener("scroll", read);
    window.addEventListener("resize", read);
    return () => {
      vv?.removeEventListener("resize", read);
      vv?.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  const pct = Math.round((scale * 100) / 5) * 5; // round to nearest 5%

  return (
    <div className="mt-6 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
      <span className="font-medium">Approx. page zoom:</span>
      <span aria-live="polite" className="tabular-nums">{pct}%</span>
    </div>
  );
}

export default function ResizeTextMock(): JSX.Element {
  // Keep text visually fixed across page zoom by updating CSS vars with the inverse zoom.
  React.useEffect(() => {
    const apply = () => {
      const vv = (typeof window !== "undefined" && (window as any).visualViewport) || null;
      const scale = vv?.scale || (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1);
      const inv = scale ? 1 / scale : 1;
      document.documentElement.style.setProperty("--vv", String(scale));
      document.documentElement.style.setProperty("--inv", String(inv));
    };
    apply();
    const vv = (typeof window !== "undefined" && (window as any).visualViewport) || null;
    vv?.addEventListener("resize", apply);
    vv?.addEventListener("scroll", apply);
    window.addEventListener("resize", apply);
    return () => {
      vv?.removeEventListener("resize", apply);
      vv?.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <style jsx global>{`
        /* Dynamic counter-zoom using VisualViewport scale */
        :root { --vv: 1; --inv: 1; }

        .counterzoom {
          /* Counteract browser zoom with the inverse scale */
          transform: scale(var(--inv));
          transform-origin: top left;
          /* Grow the box so its layout footprint remains comparable */
          width: calc(100% * var(--vv));
        }

        /* Non-standard (Chromium) zoom technique kept for reference */
        .chromezoom { zoom: 0.5; }
      `}</style>

      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight">Resize Text – Mock Page</h1>
          <p className="mt-1 text-sm text-gray-600">
            This page intentionally mixes PASS and FAIL examples for WCAG 1.4.4 testing at 200% zoom.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-12 px-6 py-10">
        {/* PASS section */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">PASS: Regular scalable text</h2>
          <p className="text-base leading-7">
            This paragraph uses relative fonts and no transforms. It should visibly increase in size when you zoom the page
            to 200%. Headings, paragraphs, links, and buttons in this section are expected to scale.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="#" className="underline underline-offset-2">
              A normal link
            </a>
            <button className="rounded-xl border px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50">
              Normal button
            </button>
          </div>
        </section>

        {/* FAIL A: Counter-zoom transform */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">FAIL A: Counter‑zoom via CSS transform</h2>
          <p className="text-sm text-gray-600">Expected behavior at 200% zoom: text appears roughly the same size as at 100%.</p>
          <div className="counterzoom mt-4 rounded-xl border bg-gray-50 p-4">
            <h3 className="text-lg font-semibold">Counter‑zoomed heading</h3>
            <p className="mt-2 text-base leading-7">
              This block is wrapped in <code className="rounded bg-gray-200 px-1 py-0.5">transform: scale(0.5)</code> with
              <code className="rounded bg-gray-200 px-1 py-0.5">transform-origin: top left</code>. When you zoom the page to
              200%, the browser doubles everything, but this element permanently halves itself, resulting in text that
              appears to <span className="font-semibold">not scale</span>.
            </p>
            <button className="mt-3 rounded-lg border px-3 py-2 text-sm">Action</button>
          </div>
        </section>

        {/* A/B comparison to make the non-scaling visually obvious */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">A/B Comparison: Scales vs Counter-zoom</h2>
          <p className="text-sm text-gray-600">At 200% page zoom, the left block should look ~2× bigger; the right block should look ~the same as at 100% (because it permanently halves itself).</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Control: scales with page zoom */}
            <div className="rounded-xl border p-4">
              <div className="mb-2 text-xs uppercase tracking-wide text-gray-500">Control (scales)</div>
              <h3 className="text-2xl font-bold">Aa Bb Cc 123</h3>
              <p className="mt-2 text-base leading-7">This is normal text. It should look roughly twice as large at 200% compared to 100%.</p>
            </div>

            {/* Test: counter-zoomed */}
            <div className="rounded-xl border p-4">
              <div className="mb-2 text-xs uppercase tracking-wide text-gray-500">Counter-zoom (should NOT look 2×)</div>
              <div className="counterzoom">
                <h3 className="text-2xl font-bold">Aa Bb Cc 123</h3>
                <p className="mt-2 text-base leading-7">This text is inside <code className="rounded bg-gray-200 px-1">transform: scale(0.5)</code>. At 200% page zoom it should look ~the same size as at 100%.</p>
              </div>
            </div>
          </div>

          {/* Live zoom indicator (Chromium/Edge) */}
          <ZoomIndicator />
        </section>

        {/* FAIL B: Fixed-pixel clipping container */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">FAIL B: Fixed‑pixel container causing clipping</h2>
          <p className="text-sm text-gray-600">
            Expected behavior at 200% zoom: content becomes clipped, hiding part of the text.
          </p>
          <div className="mt-4 w-[320px] overflow-hidden rounded-xl border p-3">
            <p className="text-[14px] leading-4">
              This paragraph sits in a narrow, fixed‑width container with tight line‑height. At 200% zoom, the text grows but
              the box does not, so lines are clipped or require horizontal scrolling. This illustrates layout issues often
              seen alongside non‑resizing text bugs.
            </p>
          </div>
        </section>

        {/* FAIL C: Non-standard CSS zoom (Chromium) */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">FAIL C: Non‑standard <code>zoom: 0.5</code> (Chromium only)</h2>
          <p className="text-sm text-gray-600">
            Expected behavior at 200% zoom in Chromium: text appears about the same size as at 100%.
          </p>
          <div className="chromezoom mt-4 rounded-xl border bg-gray-50 p-4">
            <p className="text-base leading-7">
              This block uses the non‑standard <code className="rounded bg-gray-200 px-1 py-0.5">zoom</code> property. In
              Chromium, <code className="rounded bg-gray-200 px-1 py-0.5">zoom: 0.5</code> counteracts page zoom similarly to
              a transform, making the text appear not to scale at 200%.
            </p>
            <a href="#" className="mt-2 inline-block underline underline-offset-2">
              A link inside a zoomed block
            </a>
          </div>
        </section>

        {/* Helper panel for QA screenshots */}
        <section className="rounded-2xl border p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-semibold">QA Helper</h2>
          <ol className="list-decimal space-y-2 pl-6 text-base">
            <li>Set browser window to 1366×768 at 100% zoom. Capture a full‑page screenshot.</li>
            <li>Increase to 200% zoom (Ctrl/Cmd +). Capture another screenshot in the same viewport.</li>
            <li>Record elements that do <span className="font-semibold">not</span> visibly scale (FAIL A & C).
            </li>
            <li>Note any clipping or layout breakages (FAIL B).</li>
          </ol>
        </section>
      </div>
    </main>
  );
}
