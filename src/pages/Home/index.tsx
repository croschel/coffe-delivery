import { Header } from '@/components/Header';
import styles from './index.module.scss';
import { Banner } from './Banner';
import { CoffeeSection } from './CoffeeSection';

export const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Banner />
        <CoffeeSection />
      </main>
    </>
  );
};
