import { ApolloServer, gql } from "apollo-server";
import axios from "axios";

const loadData = async () => {
  const orders = [];

  const { data: ordersData } = await axios.get(
    "https://react-http-9dad6-default-rtdb.firebaseio.com/orders.json"
  );

  for (const key in ordersData) {
    const data = ordersData[key].orderedItem.map((record) => {
      return {
        id: record.id,
        name: record.name,
        amount: record.amount,
        price: record.price,
      };
    });

    const user = {
      name: ordersData[key].user.name,
      street: ordersData[key].user.street,
      city: ordersData[key].user.city,
      postalCode: ordersData[key].user.postalCode,
    };

    console.log("data", data);

    orders.push({
      key: key,
      id: key,
      data: data,
      user: user,
    });
  }

  return orders;
};

const orders = await loadData();

console.log(12345, orders);

//Describir los datos
const typeDefs = gql`
  type Data {
    id: String!
    amount: String!
    name: String!
    price: String!
  }

  type User {
    name: String!
    street: String!
    city: String!
    postalCode: String!
  }

  type Order {
    id: ID
    data: [Data]
    user: User
  }

  type Query {
    ordersCount: Int!
    allOrders: [Order]
  }
`;

// Consultas
const resolvers = {
  Query: {
    ordersCount: () => orders.length,
    allOrders: (root, args) => {
      return orders;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Servidor listo en ${url}`);
});
