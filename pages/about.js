import Layout from "../components/layout";
import Head from "next/head";
import styles from './about.module.css'
export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h1 className={styles.title}>Welcome About Page </h1>
    </Layout>
  );
}
