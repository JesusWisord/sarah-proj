import React from 'react';
import styles from '../styles/DeliverProcess.module.scss';

const Additional = () => (
  <div className={styles.deliverProcess} style={{ 'margin-top': '24px' }}>
    <p>
      Tambien contamos con venta de unidades de todo tipo, modelo, y marca.
    </p>
    <p>
      Vehiculos y/o automotores que han sido empeñados con nosotros, de clientes
      que no han desempeñado y/o refrendado sus unidades, dichas unidades salieron a
      la venta sobre el precio del prestamo mas los intereses generados, vehículos
      nacionales con sus documentos en regla.
    </p>
    <p>
      Las unidades con las que contamos para la venta se entregan con:
    </p>
    <ul>
      <li>
        Factura
      </li>
      <li>
        Contrato De Compra Venta
      </li>
      <li>
        Baja De Placas
      </li>
      <li>
        Permiso De Circulación
      </li>
      <li>
        Garantía
      </li>
    </ul>
  </div>
);

export default Additional;
