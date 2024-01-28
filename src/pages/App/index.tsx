import '@/styles/global.scss';
import styles from './index.module.scss';
import { Routes } from '../routes';
import { CoffeeContextProvider } from '@/contexts/OrderContext';

function App() {
  return (
    <div className={styles.container}>
      <CoffeeContextProvider>
        <Routes />
      </CoffeeContextProvider>
    </div>
  );
}

export default App;
