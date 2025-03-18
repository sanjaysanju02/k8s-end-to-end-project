import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        await axios.post("http://localhost:5000/register", { username, password });
        alert("User registered!");
    };

    const login = async () => {
        const response = await axios.post("http://localhost:5000/login", { username, password });
        alert("Login successful! Token: " + response.data.token);
    };

    return (
        <div>
            <h2>Login Page</h2>
            <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default App;
