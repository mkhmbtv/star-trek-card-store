import { Switch, Route, Redirect } from "react-router-dom";

import AppContextProvider from "./context/AppContext";
import Deck from "./components/Deck";
import Store from "./components/Store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AppContextProvider>
      <h1 className="title is-1">Star Trek Trading Card Store!</h1>
      <p>
        Here you can buy and sell cards in order to build your ultimate deck!
      </p>
        <Navbar />
        <Switch>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route path="/deck/:id">
            <Deck />
          </Route>
          <Route path="/">
            <Redirect to="/store" />
          </Route>
        </Switch>
    </AppContextProvider>
  );
};

export default App;