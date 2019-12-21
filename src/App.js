import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Container/Home/Home'
import StarWars from './Container/StarWars/StarWars'
import FamousPeople from './Container/FamousPeople/FamousPeople'
import Saying from './Container/Saying/Saying'
import Humour from './Container/Humour/Humour'
import Motivational from './Container/Motivational/Motivational'
import AddQuote from "./Component/AddQuote/AddQuote";
import EditQuote from "./Component/EditQuote/EditQuote";
class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>



                <Route path="/starwars" exact component={StarWars}/>
                <Route path="/famous" exact component={FamousPeople}/>
                <Route path="/saying" exact component={Saying}/>

                <Route path="/humour" exact component={Humour}/>
                <Route path="/motivational" exact component={Motivational}/>
                <Route path="/addquote" exact component={AddQuote}/>
                <Route path="/:id" exact component={EditQuote}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
