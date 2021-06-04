import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
    <nav>
        <NavLink exact 
        to={routes.home}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Home
        </NavLink>
        <NavLink 
        to={routes.contacts}
        className={styles.nav_link}
        activeClassName={styles.nav_link_active}>
            Contacts
        </NavLink>
    </nav>
)

export default Navigation;