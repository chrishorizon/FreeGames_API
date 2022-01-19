import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './components/Form/Form'
import Dashboard from './views/Dashboard/Dashboard'
import Category from './components/Category/Category'

const App = () => {
    return (
        <BrowserRouter>
            <Form />
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/games/:category">
                    <Category />
                </Route>
            </Switch>
        
        </BrowserRouter>
    )
}

export default App
