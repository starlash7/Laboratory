import { auth } from "../firbase"

export default function CreateAccount() {
    const logOut = () => {
        auth.signOut();
    }
    return (
        <h1>
            <button onClick={logOut}>Log Out</button>
        </h1>
    )
}