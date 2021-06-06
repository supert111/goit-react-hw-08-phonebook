import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;