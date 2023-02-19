import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import LandingPage from "./routes/Landing";
// import Login from "./routes/Login";
// import Register from "./routes/Register";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import AdminRestaurant from "./routes/AdminRestaurant";
import Login from "./routes/Login";
import AdminLogin from "./routes/AdminLogin";

import Register from "./routes/Register";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container1">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/AdminLogin" component={AdminLogin} />

            <Route exact path="/Register" component={Register} />

            <Route exact path="/Admin" component={AdminRestaurant} />
            <Route
              exact
              path="/restaurants/:id/update"
              component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              component={RestaurantDetailPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
