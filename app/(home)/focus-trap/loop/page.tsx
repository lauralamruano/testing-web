'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ESCAPE_VISUAL_FEEDBACK_DURATION = 2000; // 2s
const TRAP_REACTIVATION_DELAY = 3000; // 3s

export default function KeyboardTrapPage() {
  const trapZoneRef = useRef<HTMLDivElement | null>(null);
  const beforeTrapBtnRef = useRef<HTMLButtonElement | null>(null);
  const unreachableBtnRef = useRef<HTMLButtonElement | null>(null);

  const [trapActive, setTrapActive] = useState(false);
  const [escapedVisual, setEscapedVisual] = useState(false);

  const focusables = useMemo(() => {
    const root = trapZoneRef.current;
    if (!root) return [] as HTMLElement[];
    return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
  }, [trapZoneRef.current, escapedVisual]); // re-eval after visual flip

  const firstEl = focusables[0];
  const lastEl = focusables[focusables.length - 1];

  const isInTrap = (el: Element | null) =>
    !!(el && trapZoneRef.current && trapZoneRef.current.contains(el));

  // --- Keydown handler that enforces the loop when trap is active
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!trapActive || e.key !== 'Tab') return;

      const current = document.activeElement as HTMLElement | null;
      if (!isInTrap(current)) return;

      if (e.shiftKey) {
        // backwards
        if (current === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        // forwards
        if (current === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [trapActive, firstEl, lastEl]);

  // --- Activate trap when any element inside trap gains focus
  useEffect(() => {
    function onFocusIn(e: FocusEvent) {
      if (isInTrap(e.target as Element)) setTrapActive(true);
    }
    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, []);

  // --- Initial focus to the button before the trap
  useEffect(() => {
    beforeTrapBtnRef.current?.focus();
  }, []);

  // --- Escape trap: demonstrate focusing the "unreachable" button and visual feedback
  function escapeTrap() {
    setTrapActive(false);
    unreachableBtnRef.current?.focus();

    // visual feedback (green border/bg) for 2s
    setEscapedVisual(true);
    const t1 = setTimeout(() => {
      setEscapedVisual(false);

      // reactivate after delay to simulate the "trap returns"
      const t2 = setTimeout(() => {
        setTrapActive(false);
      }, TRAP_REACTIVATION_DELAY);

      return () => clearTimeout(t2);
    }, ESCAPE_VISUAL_FEEDBACK_DURATION);

    return () => clearTimeout(t1);
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-800">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Ir al contenido principal
      </a>

      <h1 className="mb-6 text-3xl font-bold">Keyboard Trap (Focus Loop) Test</h1>

      <div id="main-content" className="mx-auto max-w-4xl space-y-6">
        {/* Explanation */}
        <section className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Test Scenario</h2>
          <p className="mb-4 text-gray-600">
            This mock demonstrates a keyboard trap where focus becomes trapped within a specific
            section. When navigating with Tab or Shift+Tab, the focus loops between internal
            elements and cannot escape.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Instructions:</strong> Use Tab and Shift+Tab to navigate. Notice how focus gets
            trapped in the red-bordered area below and cannot reach the “Unreachable Button” at the
            bottom.
          </p>
        </section>

        {/* Before trap */}
        <section className="rounded-lg bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-gray-700">Before the Trap</h3>
          <button
            ref={beforeTrapBtnRef}
            id="before-trap"
            className="custom-focus rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Normal Button (Before Trap)
          </button>
        </section>

        {/* Trap zone */}
        <section
          ref={trapZoneRef}
          id="trap-zone"
          aria-label="Keyboard trap zone"
          className={[
            'rounded-lg p-6 transition-colors',
            escapedVisual ? 'trap-zone-escaped' : 'trap-zone',
          ].join(' ')}
        >
          <h3 className="mb-4 text-lg font-medium text-red-700">⚠️ Keyboard Trap Zone</h3>
          <p className="mb-4 text-sm text-red-600">
            Focus is trapped within this area. Tab and Shift+Tab will cycle between these elements
            only.
          </p>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="trapped-input-1" className="mb-1 block text-sm font-medium text-gray-700">
                First Trapped Input
              </label>
              <input
                id="trapped-input-1"
                type="text"
                className="custom-focus w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="Type here (trapped)"
              />
            </div>

            <div>
              <label htmlFor="trapped-select" className="mb-1 block text-sm font-medium text-gray-700">
                Trapped Select
              </label>
              <select
                id="trapped-select"
                className="custom-focus w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button
              id="trapped-button-1"
              className="custom-focus rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Trapped Button 1
            </button>
            <button
              id="trapped-button-2"
              className="custom-focus rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Trapped Button 2
            </button>
          </div>

          <div className="mt-4">
            <label htmlFor="trapped-textarea" className="mb-1 block text-sm font-medium text-gray-700">
              Trapped Textarea
            </label>
            <textarea
              id="trapped-textarea"
              rows={3}
              className="custom-focus w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="This textarea is also trapped"
            />
          </div>

          <div className="mt-4">
            <input id="trapped-checkbox" type="checkbox" className="custom-focus mr-2" />
            <label htmlFor="trapped-checkbox" className="text-sm text-gray-700">
              Trapped Checkbox (last element in trap)
            </label>
          </div>
        </section>

        {/* After trap (unreachable while active) */}
        <section className="unreachable rounded-lg bg-white p-4 shadow-sm">
          <h3 className="mb-2 text-lg font-medium text-gray-700">After the Trap (Unreachable)</h3>
          <p className="mb-3 text-sm text-gray-600">
            This button should be unreachable via Tab navigation due to the focus trap above.
          </p>
          <button
            ref={unreachableBtnRef}
            id="unreachable-button"
            className="custom-focus rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Unreachable Button
          </button>
        </section>

        {/* Escape instructions */}
        <section className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <h3 className="mb-2 text-lg font-medium text-yellow-800">How to Escape</h3>
          <p className="text-sm text-yellow-700">In a real application, you would typically escape a focus trap using:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-yellow-700">
            <li>Escape key to close modal/dialog</li>
            <li>Clicking outside the trapped area</li>
            <li>Specific close button within the trap</li>
            <li>Programmatic focus management</li>
          </ul>
          <button
            onClick={escapeTrap}
            className="mt-3 rounded bg-yellow-600 px-3 py-1 text-sm text-white hover:bg-yellow-700"
          >
            Escape Trap (Click Me)
          </button>
        </section>
      </div>
    </main>
  );
}
