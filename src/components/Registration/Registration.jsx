import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Registration.module.css';

const Registration = () => (
    <nav className={styles.Registr}>
        <NavLink exact 
        to={routes.register}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Registration
        </NavLink>
        <NavLink 
        to={routes.login}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Login
        </NavLink>
    </nav>
)

export default Registration;