import { ApolloClient, InMemoryCache, gql, HttpLink } from "@apollo/client";

const order = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/",
  }),
  cache: new InMemoryCache(),
});

// // Prueba de Ordenes
// order
//   .query({
//     query: gql`
//       query {
//         ordersCount
//         allOrders {
//           id
//           user {
//             name
//             street
//             city
//             postalCode
//           }
//           data {
//             id
//             name
//             price
//             amount
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log("Consulta de Ordenes - ApolloClient:", result));

export default order;
