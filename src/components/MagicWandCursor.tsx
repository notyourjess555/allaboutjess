import { useEffect, useRef } from 'react'

export default function MagicWandCursor() {
  const wandRef = useRef<HTMLDivElement>(null)
  const sparksRef = useRef<HTMLDivElement>(null)
  const latest = useRef({ x: -100, y: -100 })
  const frame = useRef(0)
  const lastSpark = useRef(0)
  const nextId = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!fine.matches) return

    const render = () => {
      if (wandRef.current) wandRef.current.style.transform = `translate3d(${latest.current.x}px, ${latest.current.y}px, 0)`
      frame.current = 0
    }
    const onMove = (event: PointerEvent) => {
      latest.current = { x: event.clientX, y: event.clientY }
      if (!frame.current) frame.current = requestAnimationFrame(render)
      const now = performance.now()
      if (now - lastSpark.current > 34 && sparksRef.current) {
        lastSpark.current = now
        const count = Math.random() > 0.35 ? 2 : 1
        for (let index = 0; index < count; index += 1) {
          const id = nextId.current++
          const angle = Math.random() * 360
          const offset = (Math.random() - 0.5) * 9
          const item = document.createElement('i')
          item.className = `wand-spark ${index === 0 ? 'wand-spark--trail' : 'wand-spark--glint'}`
          item.style.left = `${event.clientX + offset}px`
          item.style.top = `${event.clientY + offset}px`
          item.style.setProperty('--spark-angle', `${angle}deg`)
          item.dataset.sparkId = String(id)
          sparksRef.current.append(item)
          window.setTimeout(() => {
            const stale = sparksRef.current?.querySelector(`[data-spark-id="${id}"]`)
            stale?.remove()
          }, 920)
        }
      }
    }
    const onLeave = () => { if (wandRef.current) wandRef.current.style.opacity = '0' }
    const onEnter = () => { if (wandRef.current) wandRef.current.style.opacity = '1' }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerenter', onEnter)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerenter', onEnter)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return <><div className="wand-cursor" ref={wandRef} aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M25 25 9 9" /><path d="m13 9-5 0 0 5" /><path className="wand-cursor__star" d="M5 2v6M2 5h6M9 10v3M7.5 11.5h3" /></svg></div><div className="wand-sparks" ref={sparksRef} aria-hidden="true" /></>
}
