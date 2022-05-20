import React from "react";

const Rows = ({ dataCols, dataRows }) => {
  const rows = dataRows.map((row) => (
    <tr>
      {dataCols.map(({ dataField }) => (
        <td key={dataField}>{row[dataField]}</td>
      ))}
    </tr>
  ));

  return rows;
};

export default Rows;
