import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-gray-900 dark:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          // X icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-20 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 z-50 lg:hidden">
            <nav className="flex flex-col px-6 py-6 space-y-4">
              <a
                href="#articles"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                Articles
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              >
                À Propos
              </a>
              <a
                href="mailto:contact@global-climat.com"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2 border-t border-gray-200 dark:border-white/10 pt-4"
              >
                Contact
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
