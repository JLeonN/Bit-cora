import { useState, useEffect } from 'react';

const PieDePagina = () => {
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    const idIntervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(idIntervalo);
  }, []);

  const fechaFormateada = horaActual.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const horaFormateada = horaActual.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 JNúñez. Todos los derechos reservados.</p>
          <p className="reloj">
            {horaFormateada} - {fechaFormateada}
          </p>
          <div className="social-icons contenedor">
            <a
              href="https://www.linkedin.com/in/j-l-n-t%C3%A9cnico/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            ></a>
            <a
              href="https://github.com/JLeonN"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
            ></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PieDePagina;
