import '@/styles/global.scss';
import { Home } from '@/pages/Home';
import styles from './index.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
