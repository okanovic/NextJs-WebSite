import Layout from "./../components/layout";
import unfetch from "isomorphic-unfetch";
import Link from "next/link";
import slug from "slug";
export function HomePage({ characters }) {
  return (
    <Layout>
      <h1> Welcome to Next.js!</h1>
      <h3>Made By Okan TOPER</h3>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>    
            <Link href="/character/[slug]" as={'character/' + slug(character.name) + '-' + character.id}>
              <a> {character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1 {
          background-color: rgba(219, 35, 219, 0.308);
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  //data fetch proccess
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  console.log(characters);
  return {
    props: {
      characters,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
