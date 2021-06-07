import Container from '../../components/Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import styles from '../AppBar/AppBar.module.css';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = ({ isAuthenticated }) => {
  return (      
    <Container>
      <header className={styles.AppBar}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}     
      </header>
    </Container>
  );
};

export default AppBar;