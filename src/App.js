import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Header from './components/Header/Header'
import Album from './components/Album/Album'
import Weather from './components/Weather/Weather'
import Chart from './components/Chart/Chart'
import Download from './components/Download/Download'
import Social from './components/Social/Social'
import Auth from './components/Auth/Auth'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Users from './components/Users/Users'
import Time from './components/Time/Time'
import ShoesSmall from './components/ShoesSmall/ShoesSmall'
import Map from './components/Map/Map'
import Player from './components/Player/Player'
import Shoes from './components/Shoes/Shoes'
import Messanger from './components/Messanger/Messanger'
import Last from './components/Last/Last'
import Calendar from './components/Calendar/Calendar'
import './App.scss'
import All from './components/all/all'
import None from './components/none/none'


import greetings from "./assets/greetings.png";



import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Test from "./components/test/data";
import Gogo from "./components/jqyery/jquery";

am4core.useTheme(am4themes_animated);





function App() {








    return (
        <Router>
          <div className="app-wrapper">
            <div className="greetings">
              <img src={greetings} alt="greetings"></img>
            </div>

            <Header className="header"/>



            <Switch>
              <Route exact path='/' component={All}/>
              <Route exact path='/none' component={None}/>
              <Route exact path='/test' component={Test}/>
            </Switch>


          </div>
        </Router>
  )
}

export default App;
