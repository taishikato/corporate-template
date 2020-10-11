import Head from 'next/head';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <WhoWeAre />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
