"# react-wechat" 
"import React from 'react'
 import {render} from 'react-dom'
 import {Router, Route, hashHistory} from 'react-router'
 import Data from '../src/modules/Data'
 import About from '../src/modules/About'
 import Repos from '../src/modules/Repos'

 render((
     <Router history={hashHistory}>
         <Route path="/" component={Data}>
             <Route path="/repos" component={Repos}/>
             <Route path="/about" component={About}/>
         </Route>
     </Router>
 ), document.getElementById('app'))


"