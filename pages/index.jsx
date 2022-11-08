import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Information from '../components/Information';
import Additional from '../components/Additional';
import FeaturedCatalogue from '../components/FeaturedCatalogue';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Servipre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <FeaturedCatalogue />
      <Information />
      <Additional />
      <Form />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
