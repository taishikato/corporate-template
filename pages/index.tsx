import Head from 'next/head';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import db from '../firebase/clientApp';

export default function Home({ site }) {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav name={site.name} />
        <main>
          <Hero title={site.heroTitle} subtitle={site.heroSubtitle} />
          <WhoWeAre />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const doc = await db
    .collection('users')
    .doc(process.env.NEXT_PUBLIC_USER_ID)
    .collection('sites')
    .doc(process.env.NEXT_PUBLIC_SITE_ID)
    .get();
  const data = doc.data();
  const site = {
    name: data.name,
    heroTitle: data.heroTitle,
    heroSubtitle: data.heroSubtitle,
  };

  return {
    props: {
      site,
    },
  };
}
