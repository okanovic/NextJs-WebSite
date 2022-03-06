import Layout from "../../components/layout";
import unfetch from "isomorphic-unfetch";
import slug from "slug";
export function CharacterDetail({ character }) {
  return (
    <Layout>
      <h1> {character.name}</h1>
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  );
}
export async function getStaticPaths() {
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  const characters = await data.json();
  return {
    paths: characters.results.map((character) => {
      return { params: { slug: slug(character.name) + '-' + character.id } };
    }),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({params}) {
  const id = params.slug.split("-").slice(-1)[0]

const data = await unfetch("https://rickandmortyapi.com/api/character/" + id);
  const character = await data.json();
  return {
    props: {
        character
    }, // will be passed to the page component as props
  };
}

export default CharacterDetail;
