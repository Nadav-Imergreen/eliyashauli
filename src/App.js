
import './App.css';
import UploadPhoto from './components/uploadPhoto'; 

function App() {

  return (
      <div>
        <h1>Data from database:</h1>
          <UploadPhoto />
      </div>
  );
}
export default App;




//import React, { useState, useEffect } from 'react';
//import LoginForm from './adminLogin';
//import uploadPhoto from './components/uploadPhoto';
//import { NoteProvider } from './context/NoteContext';
//import { auth } from './services/firebaseConfig';
//import { onAuthStateChanged } from 'firebase/auth';
//import { handleSignOut } from './services/auth';

//const App = () => {
//    const [isAuthenticated, setIsAuthenticated] = useState(false);

//    useEffect(() => {
//        const unsubscribe = onAuthStateChanged(auth, (user) => {
//            setIsAuthenticated(!!user);
//        });
//        return () => unsubscribe();
//    }, []);

//    const handleLoginSuccess = () => {
//        setIsAuthenticated(true);
//    };

//    const handleLogout = () => {
//        handleSignOut();
//        setIsAuthenticated(false);
//    };

//    return (
//        <NoteProvider>
//            <div className="App container mt-5">
//                <h1 className="mb-4">Note-Taking App</h1>
//                {!isAuthenticated ? (
//                    <>
//                        <div className="mb-4">
//                            <RegistrationForm onSuccess={handleLoginSuccess} />
//                        </div>
//                        <div className="mb-4">
//                            <LoginForm onSuccess={handleLoginSuccess} />
//                        </div>
//                    </>
//                ) : (
//                    <>
//                        <div className="mb-4">
//                            <button onClick={handleLogout} className="btn btn-secondary mr-2">Logout</button>
//                            </div>

//                            <div className="mb-4"><uploadPhoto /></div>

                
//                    </>
//                )}
//            </div>
//        </NoteProvider>
//    );
//};

//export default App;