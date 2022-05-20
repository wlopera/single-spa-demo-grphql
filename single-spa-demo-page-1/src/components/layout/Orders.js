import React, { useEffect, useState } from "react";
import { ORDERS_QUERY } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
// import TableBase from "../Table/TableBase";
import { test, App, TableBase } from "@wlopera/single-spa-demo-utility-mod";

import classes from "./Orders.module.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const { loading, error, data } = useQuery(ORDERS_QUERY);

  useEffect(() => {
    test("Prueba");
    if (data) {
      const usersData = data.allOrders.map((order) => {
        const { name, street, city, postalCode } = order.user;
        return {
          id: order.id,
          name: name,
          street: street,
          city: city,
          postalCode: postalCode,
        };
      });
      setUsers(usersData);
    }
  }, [data]);

  if (loading) return <p>Cargando..</p>;
  if (error) return <p>Error cargando data...(</p>;

  const ordersHandler = (id) => {
    const record = data.allOrders.find((data) => data.id === id);

    const ordersData = record.data.map((obj) => {
      const { id, name, amount, price } = obj;
      return {
        id,
        name,
        amount,
        price,
      };
    });
    setCurrentId(id);
    setOrders(ordersData);
  };

  // console.log(2222, users, orders);

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Nombre",
    },
    {
      dataField: "amount",
      text: "Cantidad",
    },
    {
      dataField: "price",
      text: "Precio",
    },
  ];

  return (
    <div className={classes.container}>
      <div>
        <App param=" single-spa-demo-page-1 " />
      </div>
      <div className={classes.title + " " + classes.tooltip}>
        <span className={classes.tooltiptext}>
          Seleccione un usuario para ver sus pedidos
        </span>
        <p>Clientes</p>
      </div>
      <div>
        <table className={classes.order}>
          <th>ID</th>
          <th>Nombre</th>
          <th>Calle</th>
          <th>Ciudad</th>
          <th>Código Postal</th>

          {users.map(({ id, name, street, city, postalCode }) => {
            return (
              <tr
                key={id}
                className={
                  id === currentId
                    ? classes.order_selected_tr
                    : classes.order_tr
                }
                onClick={() => ordersHandler(id)}
              >
                <td>{id}</td>
                <td>{name}</td>
                <td>{street}</td>
                <td>{city}</td>
                <td>{postalCode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {orders.length > 0 && (
        <>
          <hr className={classes.order_hr} />
          <div className={classes.title}>
            <p>Ordenes </p>
          </div>
          <div>
            {orders.length > 0 && (
              <TableBase
                columns={columns}
                data={orders}
                styles={classes.user}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
