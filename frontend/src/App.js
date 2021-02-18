import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./screens/components/Footer";
import LandingScreen from "./screens/LandingScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
