import React from "react";

const Cols = ({ dataCols }) =>
  dataCols.map(({ dataField, text }) => <th key={dataField}>{text}</th>);

export default Cols;
