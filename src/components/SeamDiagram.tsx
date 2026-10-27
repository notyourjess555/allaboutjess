const columns = 18
const rows = 11

function cellTone(column: number, row: number) {
  const ridge = Math.sin(column * 0.44 + row * 0.18) * 2.5 + Math.cos(row * 0.62) * 1.8
  const distance = Math.abs(column - (8.2 + ridge))
  const energy = Math.max(0.12, 0.72 - distance * 0.09 + Math.sin(column * 0.9 + row) * 0.12)

  if (distance < 1.05) return { fill: '#d6efff', opacity: 0.09 + energy * 0.12 }
  if ((column + row) % 7 === 0) return { fill: '#e3aa7e', opacity: 0.14 + energy * 0.14 }
  return { fill: '#b9d3dc', opacity: 0.07 + energy * 0.22 }
}

export default function SeamDiagram() {
  const cellWidth = 30
  const cellHeight = 30
  const gap = 4
  const startX = 32
  const startY = 34
  const cells = Array.from({ length: columns * rows }, (_, index) => {
    const column = index % columns
    const row = Math.floor(index / columns)
    const tone = cellTone(column, row)

    return (
      <rect
        key={`${row}-${column}`}
        x={startX + column * (cellWidth + gap)}
        y={startY + row * (cellHeight + gap)}
        width={cellWidth}
        height={cellHeight}
        rx="2"
        fill={tone.fill}
        opacity={tone.opacity}
      />
    )
  })

  return (
    <div className="seam-diagram">
      <div className="seam-diagram__meta">
        <span>CONCEPTUAL PIXEL FIELD</span>
        <span>SCHEMATIC</span>
      </div>
      <svg viewBox="0 0 640 410" role="img" aria-labelledby="seam-diagram-title seam-diagram-description">
        <title id="seam-diagram-title">A low-energy seam crossing a pixel field</title>
        <desc id="seam-diagram-description">A blue pixel grid with one gently winding icy line marking the path removed by the algorithm.</desc>
        <defs>
          <linearGradient id="pixel-wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7696a5" stopOpacity=".11" />
            <stop offset="1" stopColor="#e3aa7e" stopOpacity=".07" />
          </linearGradient>
          <filter id="seam-blur" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <rect x="17" y="19" width="606" height="372" rx="16" fill="url(#pixel-wash)" />
        {cells}
        <path d="M292 26c-17 24 12 43-5 67s-25 38-2 64 20 42 2 63-29 42-9 64 17 44 1 77" fill="none" stroke="#d6efff" strokeOpacity=".36" strokeWidth="15" strokeLinecap="round" filter="url(#seam-blur)" />
        <path className="seam-diagram__path" d="M292 26c-17 24 12 43-5 67s-25 38-2 64 20 42 2 63-29 42-9 64 17 44 1 77" fill="none" stroke="#d6efff" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="292" cy="26" r="4.5" fill="#f9f0df" />
        <circle cx="279" cy="361" r="5" fill="#e3aa7e" />
        <path d="M312 32h88" stroke="#f9f0df" strokeOpacity=".48" strokeDasharray="2 5" />
        <text x="408" y="36" className="seam-diagram__annotation">TRACE THE LOWEST COST</text>
        <text x="56" y="374" className="seam-diagram__annotation">KEEP THE SHAPE / LOSE THE WIDTH</text>
      </svg>
      <div className="seam-diagram__footer">
        <span>LOW-ENERGY SEAM</span>
        <span className="seam-diagram__key"><i /> PATH TO REMOVE</span>
      </div>
    </div>
  )
}
