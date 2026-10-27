export default function HeroVisual() {
  return (
    <div className="hero-art" aria-label="An abstract topographic wave with a highlighted path through it">
      <div className="hero-art__topline">
        <span>FIELD STUDY / 001</span>
        <span>FIND THE QUIET LINE</span>
      </div>

      <svg className="tide-visual" viewBox="0 0 700 560" role="img" aria-labelledby="tide-title tide-description">
        <title id="tide-title">A path through a shifting image</title>
        <desc id="tide-description">Blue and warm cream contour lines gather into a wave. A small icy-blue seam traces the least busy route through it.</desc>
        <defs>
          <radialGradient id="tide-glow" cx="56%" cy="44%" r="64%">
            <stop offset="0" stopColor="#c7dce2" stopOpacity=".72" />
            <stop offset=".34" stopColor="#7092a3" stopOpacity=".35" />
            <stop offset="1" stopColor="#202426" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="warm-glow" cx="48%" cy="50%" r="55%">
            <stop offset="0" stopColor="#e3aa7e" stopOpacity=".48" />
            <stop offset="1" stopColor="#e3aa7e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="tide-floor" x1=".1" y1=".1" x2=".88" y2=".9">
            <stop offset="0" stopColor="#a6bdc3" stopOpacity=".34" />
            <stop offset=".52" stopColor="#547482" stopOpacity=".32" />
            <stop offset="1" stopColor="#292c2d" stopOpacity=".1" />
          </linearGradient>
          <filter id="soft-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>

        <ellipse className="tide-visual__glow tide-visual__glow--blue" cx="390" cy="274" rx="255" ry="216" fill="url(#tide-glow)" filter="url(#soft-blur)" />
        <ellipse className="tide-visual__glow tide-visual__glow--warm" cx="442" cy="344" rx="172" ry="128" fill="url(#warm-glow)" filter="url(#soft-blur)" />

        <path d="M80 387c73-94 113-192 231-200 92-6 117 68 207 58 49-5 71-39 103-76" fill="none" stroke="url(#tide-floor)" strokeWidth="112" strokeLinecap="round" />
        <path d="M70 393c75-100 117-195 239-203 95-7 119 68 209 58 48-5 73-39 109-82" fill="none" stroke="#d6efff" strokeOpacity=".17" strokeWidth="1.3" />
        <path d="M52 427c91-117 140-221 265-228 99-5 119 70 208 59 63-8 83-53 131-105" fill="none" stroke="#f9f0df" strokeOpacity=".14" strokeWidth="1.2" />
        <path d="M82 449c91-116 156-218 276-220 93-1 108 68 192 52 59-12 91-64 133-109" fill="none" stroke="#d6efff" strokeOpacity=".25" strokeWidth="1.2" />
        <path d="M116 463c82-103 149-193 257-192 84 0 112 61 183 40 57-17 86-61 127-100" fill="none" stroke="#f9f0df" strokeOpacity=".2" strokeWidth="1.1" />
        <path d="M152 475c79-91 147-167 242-164 79 2 104 49 170 25 52-19 76-51 116-91" fill="none" stroke="#d6efff" strokeOpacity=".21" strokeWidth="1.1" />
        <path d="M205 479c73-75 133-138 210-133 72 4 98 34 154 11 43-17 74-47 105-76" fill="none" stroke="#f9f0df" strokeOpacity=".18" strokeWidth="1" />

        <path className="tide-visual__seam-halo" d="M148 399c46-49 64-81 114-106s61 9 104 1 63-62 111-83 83 3 136-48" fill="none" stroke="#d6efff" strokeOpacity=".25" strokeWidth="11" strokeLinecap="round" />
        <path className="tide-visual__seam" d="M148 399c46-49 64-81 114-106s61 9 104 1 63-62 111-83 83 3 136-48" fill="none" stroke="#d6efff" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="148" cy="399" r="4.5" fill="#f9f0df" />
        <circle className="tide-visual__end" cx="613" cy="163" r="5" fill="#e3aa7e" />
        <path d="M540 137h55v22" fill="none" stroke="#f9f0df" strokeOpacity=".52" strokeWidth="1" />
        <text x="536" y="123" className="tide-visual__micro">MINIMUM ENERGY</text>
        <text x="62" y="474" className="tide-visual__micro">AN IMAGE / A QUESTION / A PATH</text>

        <g className="tide-visual__spark" transform="translate(487 337)">
          <path d="M0-11 3-3 11 0 3 3 0 11-3 3-11 0-3-3Z" fill="#f9f0df" />
        </g>
      </svg>

      <div className="hero-art__caption">
        <span>NOT EVERYTHING NEEDS TO STAY</span>
        <span className="hero-art__caption-mark">✳</span>
      </div>
      <span className="hero-art__edge-note">IMAGE STUDY · 06.26</span>
    </div>
  )
}
