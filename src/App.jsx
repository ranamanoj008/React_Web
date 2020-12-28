import React, { Component } from 'react'
import {Switch , Route, Router, Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Footer from './Footer';

const App = ()=>{
    return(
            <>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/services" component={Services} />
                    <Redirect to="/" />
                </Switch>
                <Footer/>
            </>
    )
}

export default App;