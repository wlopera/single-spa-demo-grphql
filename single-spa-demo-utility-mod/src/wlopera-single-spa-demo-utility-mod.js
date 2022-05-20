import React from "react";
import Table from "./Components/Table/Table";

export const App = ({ param }) => {
  return (
    <div>
      <hr />
      <h3>Módulo utilitario</h3>
      <p>
        - Parametro recibido: <strong> {param}</strong>
      </p>
      <hr />
    </div>
  );
};

export const test = (param) => {
  console.log("Ventana de utilitario:", param);
};

export const TableBase = ({ columns, data, styles }) => {
  return <Table columns={columns} data={data} styles={styles} />;
};
