import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          {/* <img src="logo.png" alt="Logo" /> */}
        </div>
        <div className="nav-items">
          <h1>Bitácora</h1>
          <ul>
            <li>
              <Link to="/estadisticas">Estadísticas</Link>
            </li>
            <li>
              <Link to="/apuntes">Apuntes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
