import '@/styles/global.scss';
import styles from './index.module.scss';
import { Routes } from '../routes';

function App() {
  return (
    <div className={styles.container}>
      <Routes />
    </div>
  );
}

export default App;
