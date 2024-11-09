    import './App.scss';

    import Home from './Composnets/Home/Home';
    import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
    import Login from './Composnets/Home/Login';
    import Register from './Composnets/Home/Register';


    function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path = "/register" element={<Register/>}/>
            </Routes>
        </Router>
    );
    };

    export default App;
