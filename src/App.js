import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Shared/Header/Header";
import Home from "./components/Pages/Home/Home";
import AddService from "./components/Pages/AddService/AddService";
import Login from './components/Pages/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';
import MyOrder from './components/Pages/MyOrder/MyOrder';
import ManageAllOrder from './components/Pages/ManageAllOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/place-order/:id">
              <PlaceOrder/>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService/>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder/>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-order">
              <ManageAllOrder/>
            </PrivateRoute>
             <Route path="/login">
              <Login/>
            </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
