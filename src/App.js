import Navbar from './components/Navbar/Navbar';
import './App.css'
import { BrowserRouter,Redirect,Route, Switch} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './components/pages/HomePage/Home';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Dashboard from './components/pages/Dashboard/Dashboard';
import axios from 'axios'
import BiodataForm from './components/BiodataForm/BiodataForm';
axios.defaults.baseURL = 'https://apiloanvest.sproutpay.net/'
axios.defaults.headers.post['Accept']        = 'application/json'
axios.defaults.headers.post['Content-Type']  = 'application/json'
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){

    const token = localStorage.getItem('auth_token')

    config.headers.Authorization = token ? `Bearer  ${token}`  : ''

    return config

})

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
                {/* <Route path = "/register" component = {Register}/>
                <Route path = "/login" component = {Login}/> */}

                <Route path ="/login">{ localStorage.getItem('auth_token') ? <Redirect to ="/"/> : <Login/> }</Route>

                <Route path ="/register">{ localStorage.getItem('auth_token') ? <Redirect to ="/"/> : <Register/> }</Route>

                {/* <Route path ="/dashboard">{ localStorage.getItem('auth_token') ? <Redirect to ="/dashboard"/> : <Register/> }</Route> */}
                
                
                <Route path = "/dashboard" component = {Dashboard} />

                <Route path = "/biodataform"  component = {BiodataForm}   />

                <Route path = "/" exact component = {Home}/>
                
            </Switch>
        </div>
    </BrowserRouter>
  );  
}

export default App;
