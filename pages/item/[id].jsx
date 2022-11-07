import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import data from '../../json/new_data.json';
import styles from '../../styles/Item.module.scss';
import CatalogueItem from '../../components/CatalogueItem';

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Servipre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <figure className={styles.hero}>
        <img src={`/new_catalogue/${data[id]?.images[0]}`} />
      </figure>
      <p className={styles.info}>
        {data[id].info}
      </p>
      <div className={styles.catalogue_container}>
        {data[id]?.images.map((item, index) => (
          <CatalogueItem
            image={item}
            id={index}
            disableLink
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
