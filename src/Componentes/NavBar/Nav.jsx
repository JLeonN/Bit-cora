import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav className="navbar backgroundImage">
        <div className="logo"></div>
        <div className="">
          <h1>Bitácora</h1>
          <ul className="menu">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Formulario">Detalle del Día</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
