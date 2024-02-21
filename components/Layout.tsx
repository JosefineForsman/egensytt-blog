import Link from 'next/link'

export default function Layout({ children }:any) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
            <h1>
              <span>Just Add</span>
              <span>Some Blog Posts</span>
            </h1>
            <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2024 Minifix</p>
      </footer>
    </div>
  )
}