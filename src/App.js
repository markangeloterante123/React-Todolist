import React from 'react'

//import ulit ang BrowserRouter na galing kay index pero papalitan na sya ng Switch and Route
import { Switch, Route } from 'react-router-dom'

//importing from folder components Home and Todolist
import Home from './components/Home'
import Todolist from './components/Todolist'

const App = () => {
    return(
            <div className="app-main">
                <switch>
                    <Route exact path="/"component={Home}/>
                    <Route path="/Home"component={Home}/>
                    <Route path="/Todolist" component={Todolist}/>
                </switch>
            </div>
    )
}

export default App