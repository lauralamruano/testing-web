"use client";

import React from "react";

export default function LinkContrastFixtures() {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <h1 className="mb-4 text-3xl font-bold">Link Contrast Fixtures (Intentional Errors)</h1>
        <p className="mb-6 text-sm text-gray-600">
          This page includes <strong>intentional failures</strong> where links differ from surrounding text
          <em>only by color</em>. Some pairs are below <code>3:1</code> contrast to help validate your detector.
        </p>
  
        {/* Group A: FAIL — Color-only < 3:1 */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">A. FAIL — Color-only links with contrast &lt; 3:1</h2>
          <p className="mb-3" style={{ color: "#4A5568" }}>
            In this paragraph the link is styled purely by color and is too close to the surrounding text. Try this
            <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#a1">subtle link</a>.
          </p>
          <p className="mb-3" style={{ color: "#374151" }}>
            Another low-contrast color-only link appears here
            <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#a2">color-only link</a>, which should fail the 3:1 threshold.
          </p>
          <p className="mb-1" style={{ color: "#4A5568" }}>
            And one more barely different
            <a className="ml-1 no-underline" style={{ color: "#5A6B85", cursor: "inherit" }} href="#a3">barely different link</a>.
          </p>
          <p className="text-xs text-gray-500">All links above are <strong>color-only</strong> and should be flagged if contrast &lt; 3:1.</p>
        </section>
  
        {/* Group B: PASS — Color-only ≥ 3:1 */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">B. PASS — Color-only links with contrast ≥ 3:1</h2>
          <p className="mb-3" style={{ color: "#4B5563" }}>
            This paragraph contains a color-only link that should pass the 3:1 threshold:
            <a className="ml-1 no-underline" style={{ color: "#6EA8FF", cursor: "inherit" }} href="#b1">passing color-only link</a>.
          </p>
          <p className="mb-1" style={{ color: "#1F2937" }}>
            Against darker surrounding text, the same link color should clearly pass:
            <a className="ml-1 no-underline" style={{ color: "#6EA8FF", cursor: "inherit" }} href="#b2">high-contrast link</a>.
          </p>
          <p className="text-xs text-gray-500">Links here are <strong>color-only</strong> but should be <strong>PASSED</strong> by your tool.</p>
        </section>
  
        {/* Group B2: Borderline Cases */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">B2. Borderline Cases (Near Threshold)</h2>
          <p className="mb-3" style={{ color: "#4B5563" }}>
            Link slightly below threshold (~2.95:1):
            <a className="ml-1 no-underline" style={{ color: "#5F8FCC", cursor: "inherit" }} href="#b21">almost pass</a>.
          </p>
          <p className="mb-1" style={{ color: "#4B5563" }}>
            Link slightly above threshold (~3.05:1):
            <a className="ml-1 no-underline" style={{ color: "#5E8CE0", cursor: "inherit" }} href="#b22">just passes</a>.
          </p>
        </section>
  
        {/* Group C: Conforming */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">C. Conforming — Links with extra visual cues</h2>
          <p className="mb-2 text-gray-800">
            Underlined link (conforming): <a className="underline" href="#c1">underlined link</a>
          </p>
          <p className="mb-2 text-gray-800">
            Bold link (conforming): <a className="font-bold no-underline" href="#c2">bold link</a>
          </p>
          <p className="mb-2 text-gray-800">
            Larger link (conforming): <a className="text-lg no-underline" href="#c3">larger link</a>
          </p>
        </section>
  
        {/* Group D: Mixed */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">D. Mixed paragraph with multiple links</h2>
          <p className="mb-1" style={{ color: "#4A5568" }}>
            Here we mix several links: a failing color-only
            <a className="ml-1 no-underline" style={{ color: "#5E6B7A", cursor: "inherit" }} href="#d1">subtle</a>,
            a passing color-only
            <a className="ml-1 no-underline" style={{ color: "#0066CC", cursor: "inherit" }} href="#d2">clearly blue</a>, and an
            <a className="ml-1 underline" href="#d3">underlined link</a> (conforming).
          </p>
        </section>
  
        {/* Out of scope */}
        <section className="mb-8 rounded-2xl border p-4">
          <h2 className="mb-2 text-xl font-semibold">E. Out of Scope</h2>
          <p className="text-gray-800">
            <a href="#e1" style={{ display: "none" }}>Hidden link (display:none)</a>
            <span className="sr-only"><a href="#e2">Screen-reader-only link</a></span>
          </p>
        </section>
  
        <footer className="text-center text-xs text-gray-500">Use this page to validate detection of color-only links and contrast threshold at 3:1.</footer>
      </main>
    );
  }