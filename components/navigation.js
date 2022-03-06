import Link from 'next/link'
export function Navigation() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}

export default Navigation;