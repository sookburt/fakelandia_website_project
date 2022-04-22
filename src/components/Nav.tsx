import { NavLink } from "react-router-dom";

const Nav: React.FC = () => (
  <nav className="navbar">
    <ul className="navbar--list">
      <li className="navbar--list--item"><NavLink to='/'>Home</NavLink></li>
      <li className="navbar--list--item"><NavLink to='/misdemeanour'>Misdemeanours</NavLink></li>
      <li className="navbar--list--item"><NavLink to='/confession'>Confess to Us</NavLink></li>
    </ul>
  </nav>
);

export default Nav;