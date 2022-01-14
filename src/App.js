import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form/Form'
import Dashboard from './views/Dashboard/Dashboard'

const App = () => {
    return (
        <fieldset>
        <BrowserRouter>
            <legend>App.js</legend>
            <Form />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        
        </BrowserRouter>
        </fieldset>
    )
}

export default App
