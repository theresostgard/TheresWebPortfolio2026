import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LANGS: Record<string, string> = { en: 'English', sv: 'Svenska' };

function FlagBadge({ code }: { code: string }) {
  return (
    <span className="lang-flag" aria-hidden>
      {code.toUpperCase()}
    </span>
  );
}

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const current = (i18n.language || (typeof navigator !== 'undefined' ? navigator.language : 'en')).split('-')[0];

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }

    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button
        ref={btnRef}
        className="lang-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        type="button"
      >
        <FlagBadge code={current} />
        <span className="lang-label">{LANGS[current] || current}</span>
        <span className="chev" aria-hidden>{open ? '▴' : '▾'}</span>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox" ref={menuRef} tabIndex={-1}>
          {Object.entries(LANGS).map(([key, label]) => (
            <li
              key={key}
              id={`lang-${key}`}
              role="option"
              aria-selected={current === key}
              className={`lang-item ${current === key ? 'selected' : ''}`}
              onClick={() => change(key)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') change(key); }}
              tabIndex={0}
            >
              <FlagBadge code={key} />
              <span className="lang-item-label">{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageToggle;
