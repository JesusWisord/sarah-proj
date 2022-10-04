import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Catalogue from '../components/Catalogue';
import DeliverProcess from '../components/DeliverProcess';
import Form from '../components/Form';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Card from '../components/Card';
import Information from '../components/Information';
import Additional from '../components/Additional'

export default function Home() {
  return (
    <>
      <Head>
        <title>Servipre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Card />
      <Catalogue />
      <Information />
      <Additional />
      <Form />
      <Footer />
    </>
  );
}
