const DiasTabla = ({ mes, dias }) => {
  return (
    <>
      <h2 className="titulo">{mes}</h2>
      <div className="contenedor">
        <table className="TablaDias">
          <thead>
            <tr>
              <th>Día</th>
              <th>Número de boleta</th>
              <th>Cantidad de ítems</th>
              <th>Ítems negados</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {dias.map((dia, index) => (
              <tr key={index}>
                <td>{dia.dia}</td>
                <td>{dia.numeroBoleta}</td>
                <td>{dia.cantidadItems}</td>
                <td>{dia.cantidadItemsNegados}</td>
                <td>{dia.notas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DiasTabla;
