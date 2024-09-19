import Link from "next/link"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Vols<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* Navbar */}
            <Nav />
        </div>
    </header>
  )
}

export default Header
