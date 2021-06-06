import Container from '../../components/Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from '../AppBar/AppBar.module.css';

const AppBar = () => {
  return (      
    <Container>
      <header className={styles.AppBar}>
        <Navigation />
        <AuthNav />      
      </header>
    </Container>
  );
};

export default AppBar;