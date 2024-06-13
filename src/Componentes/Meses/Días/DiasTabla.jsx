const DiasTabla = ({ diaDeHoy, mesx, diaDeTrabajo, pedidos, items, negados }) => {
  return (
    <>
      <h2 className="titulo">
        Días del mes <span>{diaDeHoy}</span>
      </h2>
      <dir className="contenedor">
        <table className="TablaDias">
          <thead>
            <tr>
              <th>Día del <span>{mesx}</span></th>
              <th>Cantidad de pedidos</th>
              <th>Cantidad de ítems</th>
              <th>Ítems negados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="fecha">{diaDeTrabajo}</span></td>
              <td>{pedidos}</td>
              <td>{items}</td>
              <td>{negados}</td>
            </tr>
          </tbody>
        </table>
      </dir>
    </>
  );
};

export default DiasTabla;
