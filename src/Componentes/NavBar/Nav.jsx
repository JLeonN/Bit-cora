import { Link } from 'react-router-dom';
import SelectorDeUsuarios from '../SelectorDeUsuarios';

const Nav = ({ usuarios }) => {
  return (
    <>
      <nav className="navbar backgroundImage">
        <div className="contNav">
          <div className="">
            <h1>Bitácora</h1>
            <ul className="menu">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/AgendarUsuarios">Agregar perfile</Link>
              </li>
              <li>
                <SelectorDeUsuarios usuarios={usuarios} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
