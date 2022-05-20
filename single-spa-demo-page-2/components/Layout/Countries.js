import React from "react";
import { TableBase } from "@wlopera/single-spa-demo-utility-mod";

import classes from "./Countries.module.css";

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "country",
    text: "País",
  },
  {
    dataField: "capital",
    text: "Capital",
  },
  {
    dataField: "languague",
    text: "Idioma",
  },
  {
    dataField: "money",
    text: "Moneda",
  },
];

const data = [
  {
    id: "m1",
    country: "Argentina",
    capital: "Buenos Aires",
    languague: "Español",
    money: "Peso Argentino",
  },
  {
    id: "m2",
    country: "Brasil",
    capital: "Brasilia",
    languague: "Portugués",
    money: "Real brasileño (R$, BRL)",
  },
  {
    id: "m3",
    country: "Colombia",
    capital: "Bogota",
    languague: "Español",
    money: "Peso Colombiano",
  },
  {
    id: "m4",
    country: "Panamá",
    capital: "Ciudad de Panamá",
    languague: "Español",
    money: "Balboa o Dolar",
  },
  {
    id: "m4",
    country: "Venezuela",
    capital: "Caracas",
    languague: "Español",
    money: "Bolívar",
  },
];

export default function Countries() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>Países</p>
      </div>

      <TableBase columns={columns} data={data} styles={classes.countries} />
    </div>
  );
}
