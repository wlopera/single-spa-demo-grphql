# single-spa-demo-grphql
App de React con Single SPA y uso de Graphql

```
---------------------------------------------------------------------------------------------------------------------
GRAPHQL - FACEBOOK
---------------------------------------------------------------------------------------------------------------------
Un lenguaje de consulta para su API
    GraphQL es un lenguaje de consulta para API y un tiempo de ejecución para cumplir con esas consultas con sus datos existentes. 
    GraphQL proporciona una descripción completa y comprensible de los datos en su API, brinda a los clientes el poder de solicitar 
    exactamente lo que necesitan y nada más, facilita la evolución de las API con el tiempo y habilita herramientas poderosas para 
    desarrolladores.
---------------------------------------------------------------------------------------------------------------------
1.- Describa tus datos
    type Proyecto {
        name: String
        tagline: String
        contributors: [User]
    }

2.- Pide lo que quieras
    {
        project(name: "GraphQL") {
            tagline
        }
    }

3. - Obtenga resultados predecibles
    {
        "project": {
            "tagline": "A query language for APIs"
        }
    }

---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
Apollo Server
---------------------------------------------------------------------------------------------------------------------
    Apollo Server es un servidor GraphQL de código abierto que cumple con las especificaciones y es compatible con cualquier 
    cliente GraphQL, incluido Apollo Client . Es la mejor manera de crear una API de GraphQL autodocumentada y lista para la 
    producción que puede usar datos de cualquier fuente.

    - Puede consumir un REST Api, Microservicios o Base de datos directamente.
    - Trabaja web, android o ios.
---------------------------------------------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
Crear Servidor Graphql:
---------------------------------------------------------------------------------------------------------------------
 - Crear carpeta > mkdir graphql-server-node
 - Entrar en carpeta creada > cd graphql-server-node
 - Inicializar el proyecto > npm init -y 
 - Instalar apolo/server y graphwl 
        > npm i apollo-server graphql
 - Instalar nodemon , axios > 
        > npm i nodemon axios
 - Abrir proyecto. En mi caso VSCode
 - Agregar "type": "module" en package.json (permite usar packages y no es necesario usar require(...) )
 - Crear codigo: src/index.js
 - Levantar servidor > node index.js
 - Correr aplicativo
      http://localhost:4000 => https://studio.apollographql.com/sandbox/explorer (Grphql Playground)
---------------------------------------------------------------------------------------------------------------------
Ejemplo de consultas Firebase: https://react-http-9dad6-default-rtdb.firebaseio.com/orders.json
---------------------------------------------------------------------------------------------------------------------
Request:
--------
query{
  ordersCount,
  allOrders {
    id
    user {
      name
      street
      city
      postalCode
    }
    orders {
      id
      name
      price
      amount
    }
  }
}

Response:
---------
{
  "data": {
    "ordersCount": 4,
    "allOrders": [
      {
        "id": "-MyicD9zQ3zWUyPXBGDa",
        "user": {
          "name": "wlopera Lopera",
          "street": "Carrasquilla. Ciudad de Panama",
          "city": "Ciudad de Panama",
          "postalCode": "12345"
        },
        "orders": null
      },
      {
        "id": "-MyifWB-3ewSI763VTq7",
        "user": {
          "name": "Carlos Salazar",
          "street": "Carrasquilla. Ciudad de Panama",
          "city": "Ciudad de Panama",
          "postalCode": "54321"
        },
        "orders": null
      },
      {
        "id": "-Myii1HSG-4cdojTvnXI",
        "user": {
          "name": "Amalia Pérez",
          "street": "120-A",
          "city": "Ciudad de Panama",
          "postalCode": "35780"
        },
        "orders": null
      },
      {
        "id": "-Myik3Upmt4CxJ4oE7zh",
        "user": {
          "name": "Camila Torres",
          "street": "54 Iglesia del Carmen",
          "city": "Ciudad de Panama",
          "postalCode": "13579"
        },
        "orders": null
      }
    ]
  }
}

---------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------
Instalamos los paquetes que necesitamos:
---------------------------------------------------------------------------------------------------------------------
npm instalar @apollo/client graphql 
---------------------------------------------------------------------------------------------------------------------
    > @apollo/client: Este paquete único contiene prácticamente todo lo que necesita para configurar Apollo Client. 
                      Incluye caché en memoria, 
                      administración de estado local, 
                      manejo de errores 
                      y una capa de vista basada en React.

    > graphql:        Este paquete proporciona lógica para analizar consultas de GraphQL.

---------------------------------------------------------------------------------------------------------------------
Json Server: npm i json-server
---------------------------------------------------------------------------------------------------------------------
- Obtenga una API REST falsa completa sin codificación en menos de 30 segundos (en serio) 
  Para desarrollado front-end que necesitan un back-end rápido para crear prototipos y simulacros.

    Agregar script en package.json
     >  "json-server": "json-server --watch db.json"

    Levantar Servidor Rest API
    > npm run json-start

    Resources
        http://localhost:3000/persons

    Home
        http://localhost:3000

---------------------------------------------------------------------------------------------------------------------
Intalar axios: consulta de servicios
---------------------------------------------------------------------------------------------------------------------
Nodemon

    Crear script en package.json llamar a Nodemon
    > "dev": "nodemon index.js"

    Levantar servidor:
    > npm run dev

---------------------------------------------------------------------------------------------------------------------
```
## Salidas
![Captura](https://user-images.githubusercontent.com/7141537/169379351-8d3e1fa2-c8c9-43b3-9403-b9af456d0cf0.PNG)
![Captura1](https://user-images.githubusercontent.com/7141537/169379353-9d648f5b-a26b-4c64-9d52-ee846257f592.PNG)
![Captura3](https://user-images.githubusercontent.com/7141537/169379357-1c5ecb0e-1b6b-496a-80cb-17b2ca17c9f2.PNG)
![Captura4](https://user-images.githubusercontent.com/7141537/169379337-bc09c2a8-ba17-4590-8a26-a6adcb62f9aa.PNG)
![Captura5](https://user-images.githubusercontent.com/7141537/169379348-942d2217-d676-48ba-9409-0b10feff34ff.PNG)
