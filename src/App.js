import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

//pages
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Faculty from './components/pages/Faculty'
import Notice from './components/pages/Notice'
import Library from './components/pages/Library'

    import Books from './components/pages/Books'
import Event from './components/pages/Event'
import Alumni from './components/pages/Alumni'
import Login from './components/pages/Login'
import Thesis from './components/pages/Thesis';
import Projects from './components/pages/Projects';
import Questions from './components/pages/Questions';



function App() {
    return (
         <div className = "App" >
        < Router >
        <Navbar/>

        <Switch>
            < Route exact  path = "/"  component = { Home } />
            < Route exact  path = "/faculty"  component = {Faculty} />
            < Route exact  path = "/notice"  component = {Notice} />
            < Route exact  path = "/library"  component = {Library} />
             < Route exact  path = "/library/books"  component = {Books} />
             < Route exact  path = "/library/thesis"  component = {Thesis} />
             < Route exact  path = "/library/projects"  component = {Projects} />
             < Route exact  path = "/library/questions"  component = {Questions} />
            < Route exact  path = "/event"  component = {Event} />
            < Route exact  path = "/alumni"  component = {Alumni} />
            < Route exact  path = "/login"  component = {Login} />
         </Switch>

        </Router> 
        </div>
    );
}

export default App;