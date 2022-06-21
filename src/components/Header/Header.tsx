import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>WeSpace</h1>
      <nav>
        <ul>
          <li>
            <NavLink to='/signin'>로그인</NavLink>
          </li>
          <li>
            <NavLink to='/signup'>회원가입</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
