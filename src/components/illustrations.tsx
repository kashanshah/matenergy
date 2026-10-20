function PanelGrid({
  x,
  y,
  cols,
  rows,
  w = 34,
  h = 22,
  gap = 3,
  skew = -12,
}: {
  x: number;
  y: number;
  cols: number;
  rows: number;
  w?: number;
  h?: number;
  gap?: number;
  skew?: number;
}) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push(
        <g key={`${r}-${c}`} transform={`translate(${x + c * (w + gap)} ${y + r * (h + gap)})`}>
          <rect width={w} height={h} rx="2" fill="url(#panel)" stroke="#9fb6d6" strokeWidth="0.6" />
          <path d={`M${w / 3} 0V${h}M${(2 * w) / 3} 0V${h}M0 ${h / 2}H${w}`} stroke="#ffffff" strokeOpacity="0.25" strokeWidth="0.6" />
        </g>,
      );
    }
  }
  return <g transform={`skewX(${skew})`}>{cells}</g>;
}

const defs = (
  <defs>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#2b4a7a" />
      <stop offset="0.55" stopColor="#1d3560" />
      <stop offset="1" stopColor="#3c6aa8" />
    </linearGradient>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#fff6eb" />
      <stop offset="1" stopColor="#effaee" />
    </linearGradient>
    <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stopColor="#fdb45e" stopOpacity="0.9" />
      <stop offset="1" stopColor="#fdb45e" stopOpacity="0" />
    </radialGradient>
  </defs>
);

/** Rooftop home with solar array – residential hero visual. */
export function HomeSolarIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 440" className={className} role="img" aria-label="Karachi home with rooftop solar panels">
      {defs}
      <rect width="560" height="440" rx="36" fill="url(#sky)" />
      <circle cx="455" cy="95" r="90" fill="url(#sunGlow)" />
      <circle cx="455" cy="95" r="36" fill="#f28a18" />
      {/* skyline */}
      <g fill="#d3ddd0">
        <rect x="20" y="230" width="46" height="130" rx="4" />
        <rect x="72" y="200" width="38" height="160" rx="4" />
        <rect x="470" y="220" width="54" height="140" rx="4" />
      </g>
      {/* house */}
      <rect x="110" y="250" width="340" height="140" rx="6" fill="#ffffff" stroke="#e8eee6" strokeWidth="2" />
      <rect x="96" y="236" width="368" height="18" rx="4" fill="#e8eee6" />
      {/* elevated structure */}
      <g stroke="#7f907b" strokeWidth="3">
        <path d="M150 236V178M240 236V170M330 236V162M420 236V154" />
      </g>
      <g transform="translate(18 0)">
        <PanelGrid x={150} y={130} cols={7} rows={2} skew={-8} />
      </g>
      {/* windows / door */}
      <g fill="#effaee" stroke="#b3e7ad" strokeWidth="2">
        <rect x="140" y="285" width="70" height="56" rx="6" />
        <rect x="350" y="285" width="70" height="56" rx="6" />
      </g>
      <rect x="250" y="295" width="60" height="95" rx="6" fill="#40b93c" />
      <circle cx="298" cy="345" r="3" fill="#ffffff" />
      {/* inverter */}
      <rect x="226" y="300" width="16" height="22" rx="3" fill="#313d30" />
      <circle cx="234" cy="308" r="2" fill="#58c551" />
      {/* ground */}
      <rect x="20" y="388" width="520" height="14" rx="7" fill="#d9f3d6" />
      {/* tree */}
      <rect x="486" y="330" width="8" height="60" rx="3" fill="#7f907b" />
      <circle cx="490" cy="318" r="28" fill="#58c551" />
      <circle cx="472" cy="334" r="18" fill="#40b93c" />
    </svg>
  );
}

/** Factory shed with large rooftop array – C&I visual. */
export function FactorySolarIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 400" className={className} role="img" aria-label="Factory with rooftop solar plant">
      {defs}
      <rect width="560" height="400" rx="36" fill="url(#sky)" />
      <circle cx="95" cy="85" r="80" fill="url(#sunGlow)" />
      <circle cx="95" cy="85" r="30" fill="#f28a18" />
      {/* chimney */}
      <rect x="430" y="90" width="26" height="150" rx="4" fill="#aebcaa" />
      <rect x="426" y="84" width="34" height="12" rx="3" fill="#7f907b" />
      {/* sheds */}
      <path d="M40 220 L170 170 L300 220 Z" fill="#e8eee6" />
      <path d="M270 220 L400 170 L530 220 Z" fill="#e8eee6" />
      <rect x="40" y="220" width="490" height="130" rx="6" fill="#ffffff" stroke="#e8eee6" strokeWidth="2" />
      <PanelGrid x={92} y={172} cols={5} rows={2} w={26} h={16} gap={2} skew={-20} />
      <PanelGrid x={326} y={172} cols={5} rows={2} w={26} h={16} gap={2} skew={-20} />
      {/* bays */}
      <g fill="#effaee" stroke="#b3e7ad" strokeWidth="2">
        <rect x="70" y="260" width="90" height="90" rx="4" />
        <rect x="235" y="260" width="90" height="90" rx="4" />
        <rect x="400" y="260" width="90" height="90" rx="4" />
      </g>
      <g stroke="#b3e7ad" strokeWidth="2">
        <path d="M70 290H160M70 320H160M235 290H325M235 320H325M400 290H490M400 320H490" />
      </g>
      <rect x="20" y="348" width="520" height="14" rx="7" fill="#d9f3d6" />
    </svg>
  );
}
