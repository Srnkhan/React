import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import UserPage from './features/user/user';

const Main = () => {
    return (
        <Routes>            
            <Route path='/' element={<UserPage />} />
            <Route path='/counters' element={<Counter />} />
        </Routes>
    );
}
export default Main;