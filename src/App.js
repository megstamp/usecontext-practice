// import createContext
import { useState, createContext } from 'react';
import Page from "./components/Page.jsx"
import './App.css';

//create and export
export const UserStatus = createContext(null);

function App() {
  const[signedIn, setSignedIn] = useState(false)

  return (
    <>
    {/* Establish a provider */}
    <UserStatus.Provider value={[signedIn, setSignedIn]}>
      <h1>{signedIn ? "Signed Out": "Signed In"} </h1>
      <Page />
    </UserStatus.Provider>
    </>
    );
  }
  

export default App;
