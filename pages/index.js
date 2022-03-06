import Layout from "./../components/layout";

export function HomePage() {
  return (
    <Layout>
      <h1> Welcome to Next.js!</h1>
      <style jsx>{`
        h1 {
          background-color: rgba(219, 35, 219, 0.308);
          padding: 10px;
          border-radius:5px
        }
      `}</style>
    </Layout>
  );
}

export default HomePage;
