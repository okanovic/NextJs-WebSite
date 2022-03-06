import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
export function CharacterDetail({ character }) {
  return (
    <Layout>
      <h1> Detail Page</h1>
      <p>{character.name}</p>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();

  console.log(characters)
  return {
    paths: characters.results.map((character) => {
      return { params: { id: `${character.id}` } };
    }),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({params}) {
const data = await unfetch("https://rickandmortyapi.com/api/character/" + params.id);
  const character = await data.json();
  return {
    props: {
        character
    }, // will be passed to the page component as props
  };
}

export default CharacterDetail;
