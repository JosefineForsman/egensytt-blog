import Link from 'next/link'
import Navbar from './Navbar'
import Header from './Header'

export default function Layout({ children }:any) {
  return (
    <div className="layout">
      <Header/>
      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2024 Minifix</p>
      </footer>
    </div>
  )
}