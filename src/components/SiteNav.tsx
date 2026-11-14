const links = [
  { label: 'Project', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function SiteNav() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="header-note" href="#contact">Toronto, Canada <span aria-hidden="true">↗</span></a>
    </header>
  )
}
