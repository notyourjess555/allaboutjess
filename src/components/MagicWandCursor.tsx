import { useEffect, useRef } from 'react'

type Spark = { id: number; x: number; y: number; angle: number }

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

    let sparks: Spark[] = []
    const render = () => {
      if (wandRef.current) wandRef.current.style.transform = `translate3d(${latest.current.x}px, ${latest.current.y}px, 0)`
      frame.current = 0
    }
    const onMove = (event: PointerEvent) => {
      latest.current = { x: event.clientX, y: event.clientY }
      if (!frame.current) frame.current = requestAnimationFrame(render)
      const now = performance.now()
      if (now - lastSpark.current > 55 && sparksRef.current) {
        lastSpark.current = now
        const id = nextId.current++
        const angle = Math.random() * 360
        sparks = [...sparks.slice(-7), { id, x: event.clientX, y: event.clientY, angle }]
        const item = document.createElement('i')
        item.className = 'wand-spark'
        item.style.left = `${event.clientX}px`
        item.style.top = `${event.clientY}px`
        item.style.setProperty('--spark-angle', `${angle}deg`)
        item.dataset.sparkId = String(id)
        sparksRef.current.append(item)
        window.setTimeout(() => {
          const stale = sparksRef.current?.querySelector(`[data-spark-id="${id}"]`)
          stale?.remove()
        }, 430)
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
      void sparks
    }
  }, [])

  return <><div className="wand-cursor" ref={wandRef} aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M7 25 23 9" /><path d="m19 8 5-1-1 5" /><path className="wand-cursor__star" d="M25 3v5M22.5 5.5h5M26.5 10v3M25 11.5h3" /></svg></div><div className="wand-sparks" ref={sparksRef} aria-hidden="true" /></>
}
