import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Form from './components/Form/Form'
import Dashboard from './views/Dashboard/Dashboard'
import PC from './components/PC/PC'
import Browser from './components/Browser/Browser'

const App = () => {
    return (
        <BrowserRouter>
            <Form />
            <Switch>
                <Route path="/">
                    <Dashboard />
                </Route>
                <Route exact path='/pc'>
                    <PC />
                </Route>
                <Route exact path='browser'>
                    <Browser />
                </Route>
            </Switch>
        
        </BrowserRouter>
    )
}

export default App
