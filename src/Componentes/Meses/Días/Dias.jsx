const Dias = () => {
  return (
    <>
      <h2 className="titulo">Día del mes</h2>
      <dir className="contenedor">
        <table class="TablaDias">
          <thead>
            <tr>
              <th>Día</th>
              <th>Cantidad de pedidos</th>
              <th>Cantidad de ítems</th>
              <th>Ítems negados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Lunes <span className="fecha">10/06/2024</span>{' '}
              </td>
              <td>27</td>
              <td>50</td>
              <td>14</td>
            </tr>
            <tr>
              <td>
                Martes <span className="fecha">11/06/2024</span>{' '}
              </td>
              <td>30</td>
              <td>75</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </dir>
    </>
  );
};

export default Dias;
