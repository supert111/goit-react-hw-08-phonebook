import { connect } from 'react-redux';
import styles from './HomeView.module.css';
import {authSelectors} from '../../redux/auth';

const HomeView = ({name}) => (
    <section className={styles.hero}>
        <h1 className={styles.hero_title}>Wellcome, {name}</h1>
    </section>
)

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
  });
  const mapDispatchToProps = {
    //onLogout: authOperations.logOut,
  };

//export default HomeView;
export default connect(mapStateToProps, mapDispatchToProps)(HomeView);