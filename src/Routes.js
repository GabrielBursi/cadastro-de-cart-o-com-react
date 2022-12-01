import { Routes, Route } from 'react-router-dom'

import CompletePage from './pages/CompletePage';
import HomePage from './pages/HomePage'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/complete' element={<CompletePage/>}/>
        </Routes>
    );
}

export default RoutesApp;