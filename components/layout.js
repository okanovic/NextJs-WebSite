import Navigation from "./../components/navigation";
import Head from "next/head";

export function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJs Training</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Footer section</footer>
    </div>
  );
}

export default Layout;
