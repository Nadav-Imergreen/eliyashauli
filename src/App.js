import './App.css';
import UploadPhoto from './components/UploadPhoto';
import Gallery from './components/Gallery';
//import StoreNavbar from './components/StoreNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                {/*<StoreNavbar />*/}
                <Routes>
                    <Route path="/" element={<Gallery />} />
                    <Route path="/upload_photo" element={<UploadPhoto />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
