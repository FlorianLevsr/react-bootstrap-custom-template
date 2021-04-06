import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// pages
import Home from '../pages/Home';

function RouterConfig() {

    return (
  
        <BrowserRouter>

        <Switch>

            <Route exact path='/' component={Home} />

            <Route>

                <Redirect to='/' />
                
            </Route>

        </Switch>
        
        </BrowserRouter>
  
    );
  
  }
  
export default RouterConfig;
