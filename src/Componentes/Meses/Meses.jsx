import { Link } from 'react-router-dom';

const Meses = () => {
  return (
    <>
      <section className="meses12">
        <div className="mes">
          <Link to="/enero" className="boxMes">
            Enero
          </Link>
        </div>
        <div className="mes">
          <Link to="/febrero" className="boxMes">
            Febrero
          </Link>
        </div>
        <div className="mes">
          <Link to="/marzo" className="boxMes">
            Marzo
          </Link>
        </div>
        <div className="mes">
          <Link to="/abril" className="boxMes">
            Abril
          </Link>
        </div>
        <div className="mes">
          <Link to="/mayo" className="boxMes">
            Mayo
          </Link>
        </div>
        <div className="mes">
          <Link to="/junio" className="boxMes">
            Junio
          </Link>
        </div>
        <div className="mes">
          <Link to="/julio" className="boxMes">
            Julio
          </Link>
        </div>
        <div className="mes">
          <Link to="/agosto" className="boxMes">
            Agosto
          </Link>
        </div>
        <div className="mes">
          <Link to="/septiembre" className="boxMes">
            Septiembre
          </Link>
        </div>
        <div className="mes">
          <Link to="/octubre" className="boxMes">
            Octubre
          </Link>
        </div>
        <div className="mes">
          <Link to="/noviembre" className="boxMes">
            Noviembre
          </Link>
        </div>
        <div className="mes">
          <Link to="/diciembre" className="boxMes">
            Diciembre
          </Link>
        </div>
      </section>
    </>
  );
};

export default Meses;
