import Navigation from '../Navigation/Navigation';
import Registration from '../Registration/Registration';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <Navigation />
      <Registration />
    </header>
  );
};

export default AppBar;