import React from "react";
import Cols from "./Col/Cols";
import Rows from "./Row/Rows";

import classes from "./Table.module.css";

const Table = ({ columns, data, styles }) => {
  return (
    <table className={classes.tableBase + " " + styles}>
      <Cols dataCols={columns} />
      <Rows dataCols={columns} dataRows={data} />
    </table>
  );
};

export default Table;
