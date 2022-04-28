// Routing
import {
    Routes, Navigate, Route,
} from 'react-router-dom';
// Components
import { Main } from './components';
// Pages
import { MainPage } from './pages';

const App = () => {
    return (
        <Routes>
            <Route path = '/' element = { <Main /> }>
                <Route index element = { <MainPage /> } />
            </Route>

            <Route path = '*' element = { <Navigate to = '/' replace /> } />
        </Routes>
    );
};

export default App;
