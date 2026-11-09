import './Logo.css'

/** Custom SB mark - circuit node + signal arc */
export default function Logo({ compact = false, className = '' }) {
  return (
    <span className={`brand-logo ${compact ? 'brand-logo--compact' : ''} ${className}`.trim()}>
      <svg
        className="brand-logo__mark"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="10"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <path
          d="M11 26.5C11 20.5 14.5 17 20 14.5C25.5 12 28 9.5 28 6.5"
          stroke="var(--green)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 30H28"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="14.5" r="2.2" fill="var(--green)" />
        <circle cx="28" cy="6.5" r="1.6" fill="var(--amber)" />
        <circle cx="11" cy="26.5" r="1.6" fill="var(--green)" />
      </svg>
      {!compact && (
        <span className="brand-logo__word">
          <span className="brand-logo__name">Sujal</span>
          <span className="brand-logo__dot">.</span>
          <span className="brand-logo__role">dev</span>
        </span>
      )}
    </span>
  )
}
