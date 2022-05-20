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

## Crear Tabla Génerica Base
![Captura](https://user-images.githubusercontent.com/7141537/169568424-71f2bcf2-c0f9-4cea-9e94-fd1288c8141f.PNG)

## Agregar un modulo utilitario
* Un "módulo de utilidad" es un módulo de JavaScript en el navegador que no es una aplicación o paquete de spa único. En otras palabras, su único propósito es exportar la funcionalidad para que la importen otras microfrontends.
* Los ejemplos comunes de módulos de utilidad incluyen guías de estilo, asistentes de autenticación y asistentes de API. No es necesario registrar estos módulos con spa único, pero son importantes para mantener la coherencia entre varias aplicaciones y parcelas de spa único.
* Permite en React crear componentes y funciones que se pueden comportir entre los proyectos (Aplicattions)
* Se puede pasar parámetros

### single-spa-demo-root-config\src\index.ejs
```diff
...
  <script type="systemjs-importmap">
      {
        "imports": {
          "@wlopera/root-config": "//localhost:9000/wlopera-root-config.js",
          "@wlopera/single-spa-demo-nav": "//localhost:9001/wlopera-single-spa-demo-nav.js",
          "@wlopera/single-spa-demo-page-1": "//localhost:9002/wlopera-single-spa-demo-page-1.js",
+         "@wlopera/single-spa-demo-page-2": "//localhost:9003/wlopera-single-spa-demo-page-2.js",
+         "@wlopera/single-spa-demo-utility-mod": "//localhost:9005/wlopera-single-spa-demo-utility-mod.js"          
        }
      }
    </script>
...
```
### Modulo Utilitario

#### single-spa-demo-utility-mod\src\wlopera-single-spa-demo-utility-mod.js
```
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
```

![CapturaAA](https://user-images.githubusercontent.com/7141537/169618082-4c6fd596-0683-4b9d-abdb-3e80a5bb5988.PNG)

#### single-spa-demo-page-1\src\components\layout\Orders.js Consumo de Modulo Utilitario (tabla)
```diff
import React, { useEffect, useState } from "react";
import { ORDERS_QUERY } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
+ // import TableBase from "../Table/TableBase";
+ import { test, App, TableBase } from "@wlopera/single-spa-demo-utility-mod";

...diff 
...
+     <div>
+        <App param=" single-spa-demo-page-1 " />
+      </div>
      
   {orders.length > 0 && (
+              <TableBase
+                columns={columns}
+                data={orders}
+                styles={classes.user}
+              />
            )}
...        
```

#### single-spa-demo-page-2\components\Layout\Countries.js: Consumo de Modulo Utilitario (tabla)
```
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
```
![CapturaA](https://user-images.githubusercontent.com/7141537/169618080-989b703e-0d62-4532-9b07-58783cc89307.PNG)
![Captura](https://user-images.githubusercontent.com/7141537/169618086-b5886417-c9c7-45f5-bf87-f6e1815bd7dc.PNG)
* 1.- Componente Utilitario (Se pasa un parámetro)
* 2.- Componente de la página órdenes
* 3.- Componente Utilitario (Tabla: Se pasan parámetros de la tabla)

![Captura1](https://user-images.githubusercontent.com/7141537/169618087-859a2c6b-b847-43bb-9d2f-bc846576ddfe.PNG)
