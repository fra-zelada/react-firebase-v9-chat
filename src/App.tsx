import "./App.css";
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import ChatRoom from "./components/ChatRoom";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const App = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const SignIn = () => {
        return (
            <button onClick={() => signInWithGoogle()}>
                Sign In With Google
            </button>
        );
    };

    const logout = async () => {
        await signOut(auth);
        window.location.reload();
    };

    return (
        <div className="App">
            <header>
                <h1>⚛️🔥💬</h1>
                <button className="sign-out" onClick={() => logout()}>
                    Sign Out
                </button>
            </header>
            <section>
                {user ? <ChatRoom app={app} user={user} /> : <SignIn />}
            </section>
        </div>
    );
};

export default App;
