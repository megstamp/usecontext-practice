import { useContext } from "react"
//import UserText
import { UserStatus } from "../App.js"

export default function Button () {
    //use it, user text
    const[signedIn, setSignedIn] = useContext(UserStatus);

    return (
        <button onClick={ () => setSignedIn(!signedIn)}>
          {signedIn ? "Sign Out": "Sign In"}
        </button>
    )
}