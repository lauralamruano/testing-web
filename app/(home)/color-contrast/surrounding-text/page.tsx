"use client";
import React from "react";

/**
 * LinkContrastFixtures
 * Test page for detecting links that differ from surrounding text only by color.
 * This version adds explicit 1:1 (same color) cases and surrounding-text
 * differentiation scenarios.
 *
 * Notes for validators:
 * - Group A0: absolute FAIL — link color equals surrounding text (1:1), no extra cues.
 * - Group A1: FAIL — color-only links with contrast < 3:1.
 * - Group B: PASS — color-only links with contrast ≥ 3:1.
 * - Group B2: Borderline — near 3:1 to test threshold handling.
 * - Group C: Conforming — non-color cues (underline, bold, size).
 * - Group C2: Same-color but with extra cues (underline/bold) — should PASS.
 * - Group F: Surrounding-text differentiation — ensure detector compares the link
 *            to its immediate surrounding text, not the page background.
 * - Group E: Out of scope elements.
 */
export default function LinkContrastFixtures() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-3xl font-bold">Link Contrast Fixtures (Intentional Errors)</h1>
      <p className="mb-6 text-sm text-gray-600">
        This page includes <strong>intentional failures</strong> where links differ from surrounding
        text <em>only by color</em>. Some pairs are below <code>3:1</code> contrast to help validate
        your detector. This build also includes explicit <strong>1:1 same-color</strong> cases.
      </p>

      {/* Styles to neutralize default UA styles for anchors in test zones */}
      <style>{`
        .no-ua a, .no-ua a:visited, .no-ua a:hover, .no-ua a:focus {
          text-decoration: none;
          outline: none;
        }
      `}</style>

      {/* Group A0: FAIL — 1:1 (Same Color as Surrounding Text) */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="a0">
        <h2 id="a0" className="mb-2 text-xl font-semibold">A0. FAIL — Same color (1:1) as surrounding text</h2>
        {/* Case A0-1: Same color, no cues, pointer cursor removed */}
        <p className="mb-3" style={{ color: "#4A5568" }}>
          Surrounding copy uses <code>#4A5568</code>. The link below is the <strong>exact same color</strong>
          and provides no additional visual cue: 
          <a
            className="ml-1 no-underline"
            style={{ color: "#4A5568", cursor: "inherit" }}
            href="#a0-1"
            data-case="a0-1"
          >
            indistinguishable link
          </a>
          .
        </p>
        {/* Case A0-2: Same color + surrounding text italic/bold (cue on text, not on link) */}
        <p className="mb-3" style={{ color: "#374151" }}>
          <em>Surrounding text adds emphasis</em>, but the link is still only differentiated by color and
          shares the same color: 
          <a
            className="ml-1 no-underline"
            style={{ color: "#374151", cursor: "inherit" }}
            href="#a0-2"
            data-case="a0-2"
          >
            same-color link
          </a>
          .
        </p>
        {/* Case A0-3: Same color across normal/visited/hover (via .no-ua style), still no cues */}
        <p className="mb-1" style={{ color: "#4B5563" }}>
          Same color for normal/visited/hover states (neutralized above); still fails: 
          <a
            className="ml-1 no-underline"
            style={{ color: "#4B5563", cursor: "inherit" }}
            href="#a0-3"
            data-case="a0-3"
          >
            persistent same-color link
          </a>
          .
        </p>
        <p className="text-xs text-gray-500">All A0 links are <strong>1:1 color-only</strong> and should be flagged.</p>
      </section>

      {/* Group A1: FAIL — Color-only < 3:1 */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="a1">
        <h2 id="a1" className="mb-2 text-xl font-semibold">A1. FAIL — Color-only links with contrast &lt; 3:1</h2>
        <p className="mb-3" style={{ color: "#4A5568" }}>
          In this paragraph the link is styled purely by color and is too close to the surrounding text.
          Try this 
          <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#a1-1" data-case="a1-1">subtle link</a>.
        </p>
        <p className="mb-3" style={{ color: "#374151" }}>
          Another low-contrast color-only link appears here 
          <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#a1-2" data-case="a1-2">color-only link</a>,
          which should fail the 3:1 threshold.
        </p>
        <p className="mb-1" style={{ color: "#4A5568" }}>
          And one more barely different 
          <a className="ml-1 no-underline" style={{ color: "#5A6B85", cursor: "inherit" }} href="#a1-3" data-case="a1-3">barely different link</a>.
        </p>
        <p className="text-xs text-gray-500">All links above are <strong>color-only</strong> and should be flagged if contrast &lt; 3:1.</p>
      </section>

      {/* Group B: PASS — Color-only ≥ 3:1 */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="b">
        <h2 id="b" className="mb-2 text-xl font-semibold">B. PASS — Color-only links with contrast ≥ 3:1</h2>
        <p className="mb-3" style={{ color: "#4B5563" }}>
          This paragraph contains a color-only link that should pass the 3:1 threshold: 
          <a className="ml-1 no-underline" style={{ color: "#6EA8FF", cursor: "inherit" }} href="#b1" data-case="b1">passing color-only link</a>.
        </p>
        <p className="mb-1" style={{ color: "#1F2937" }}>
          Against darker surrounding text, the same link color should clearly pass: 
          <a className="ml-1 no-underline" style={{ color: "#6EA8FF", cursor: "inherit" }} href="#b2" data-case="b2">high-contrast link</a>.
        </p>
        <p className="text-xs text-gray-500">Links here are <strong>color-only</strong> but should be <strong>PASSED</strong> by your tool.</p>
      </section>

      {/* Group B2: Borderline Cases */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="b2">
        <h2 id="b2" className="mb-2 text-xl font-semibold">B2. Borderline Cases (Near Threshold)</h2>
        <p className="mb-3" style={{ color: "#4B5563" }}>
          Link slightly below threshold (~2.95:1): 
          <a className="ml-1 no-underline" style={{ color: "#5F8FCC", cursor: "inherit" }} href="#b21" data-case="b21">almost pass</a>.
        </p>
        <p className="mb-1" style={{ color: "#4B5563" }}>
          Link slightly above threshold (~3.05:1): 
          <a className="ml-1 no-underline" style={{ color: "#5E8CE0", cursor: "inherit" }} href="#b22" data-case="b22">just passes</a>.
        </p>
      </section>

      {/* Group C: Conforming — extra cues */}
      <section className="mb-8 rounded-2xl border p-4" aria-labelledby="c">
        <h2 id="c" className="mb-2 text-xl font-semibold">C. Conforming — Links with extra visual cues</h2>
        <p className="mb-2 text-gray-800">Underlined link (conforming): <a className="underline" href="#c1" data-case="c1">underlined link</a></p>
        <p className="mb-2 text-gray-800">Bold link (conforming): <a className="font-bold no-underline" href="#c2" data-case="c2">bold link</a></p>
        <p className="mb-2 text-gray-800">Larger link (conforming): <a className="text-lg no-underline" href="#c3" data-case="c3">larger link</a></p>
      </section>

      {/* Group C2: Same-color but with extra cues — should PASS */}
      <section className="mb-8 rounded-2xl border p-4" aria-labelledby="c2">
        <h2 id="c2" className="mb-2 text-xl font-semibold">C2. PASS — Same color as text, but with non-color cues</h2>
        <p className="mb-2" style={{ color: "#374151" }}>
          Same color as surrounding text, but <a className="underline" style={{ color: "#374151" }} href="#c2-1" data-case="c2-1">underlined</a> — should pass.
        </p>
        <p className="mb-2" style={{ color: "#4A5568" }}>
          Same color as surrounding text, but <a className="font-bold" style={{ color: "#4A5568" }} href="#c2-2" data-case="c2-2">bold</a> — should pass.
        </p>
      </section>

      {/* Group D: Mixed */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="d">
        <h2 id="d" className="mb-2 text-xl font-semibold">D. Mixed paragraph with multiple links</h2>
        <p className="mb-1" style={{ color: "#4A5568" }}>
          Here we mix several links: a failing color-only 
          <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#d1" data-case="d1">subtle</a>,
          a passing color-only 
          <a className="ml-1 no-underline" style={{ color: "#0066CC", cursor: "inherit" }} href="#d2" data-case="d2">clearly blue</a>,
          and an <a className="ml-1 underline" href="#d3" data-case="d3">underlined link</a> (conforming).
        </p>
      </section>

      {/* Group F: Surrounding-text differentiation checks */}
      <section className="mb-8 rounded-2xl border p-4 no-ua" aria-labelledby="f">
        <h2 id="f" className="mb-2 text-xl font-semibold">F. Surrounding-text differentiation checks</h2>
        {/* F1: Link same color; surrounding text has added decoration (italics). Should still FAIL. */}
        <p className="mb-3" style={{ color: "#374151" }}>
          <em>Surrounding text has italics</em>, but the link adds no non-color cue and is the same color: 
          <a className="ml-1 no-underline" style={{ color: "#374151", cursor: "inherit" }} href="#f1" data-case="f1">same-color link</a>.
        </p>
        {/* F2: Link same color; surrounding text is lighter via opacity. Should still FAIL if relying only on color. */}
        <p className="mb-3" style={{ color: "#374151", opacity: 0.9 }}>
          Surrounding text uses slight opacity; the link is the exact same color (no cues): 
          <a className="ml-1 no-underline" style={{ color: "#374151", cursor: "inherit" }} href="#f2" data-case="f2">same-color link</a>.
        </p>
        {/* F3: Non-interactive element styled like a link to test false positives */}
        <p className="mb-1" style={{ color: "#4B5563" }}>
          Non-interactive element that looks like a link (should NOT be flagged as an anchor): 
          <span className="ml-1 underline">text styled like a link</span>.
        </p>
      </section>

      {/* Out of scope */}
      <section className="mb-8 rounded-2xl border p-4" aria-labelledby="e">
        <h2 id="e" className="mb-2 text-xl font-semibold">E. Out of Scope</h2>
        <p className="text-gray-800">
          <a href="#e1" style={{ display: "none" }}>Hidden link (display:none)</a>
          <span className="sr-only"><a href="#e2">Screen-reader-only link</a></span>
        </p>
      </section>

      <footer className="text-center text-xs text-gray-500">
        Use this page to validate detection of color-only links, including exact same-color (1:1) failures,
        surrounding-text differentiation, and the 3:1 threshold.
      </footer>
    </main>
  );
}
