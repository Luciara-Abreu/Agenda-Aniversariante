import { BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/login";


export const Route = () => {
  const Switch = Routes
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};
