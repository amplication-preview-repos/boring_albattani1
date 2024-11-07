import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PurchaseList } from "./purchase/PurchaseList";
import { PurchaseCreate } from "./purchase/PurchaseCreate";
import { PurchaseEdit } from "./purchase/PurchaseEdit";
import { PurchaseShow } from "./purchase/PurchaseShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"GameStore"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Purchase"
          list={PurchaseList}
          edit={PurchaseEdit}
          create={PurchaseCreate}
          show={PurchaseShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
