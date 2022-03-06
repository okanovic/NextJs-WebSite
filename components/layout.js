import Navigation from "./navigation";
export function Layout({ children }) {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
            <footer>Footer section</footer>
        </div>
    )
}

export default Layout