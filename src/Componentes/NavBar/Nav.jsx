import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="navbar backgroundImage">
        <div className="logo">
        <Link to="/"></Link>
        </div>
        <div className="">
          <h1>Bitácora</h1>
          <ul className='menu'>
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
