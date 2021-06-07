import { connect } from 'react-redux';


const UserMenu = ({name, onLogout}) => (
    <div>
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>
            Logout
        </button>
    </div>
)

const mapStateToProps = state => ({
    //name: authSelectors.getUsername(state),
  });
  
  const mapDispatchToProps = {
    //onLogout: authOperations.logOut,
  };


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);