import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
// let s = {
//   'nav': 'Navbar_nav__3V-UR',
//   'item': 'Navbar_item__316kN'
// }

const Navbar = () => { 
    return (
    <nav className={s.nav}>
<div className={s.item}>
  <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
</div>
<div className={s.item}>
  <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
</div>
<div className={s.item}>
  <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
</div>
<div className={s.item}>
  <a>News</a>
</div>  
<div className={s.item}>
  <a>Music</a>
</div>  
<div className={`${s.item} ${s.active}`}>
  <a>Settings</a>
</div>
</nav>
    );
}

export default Navbar;