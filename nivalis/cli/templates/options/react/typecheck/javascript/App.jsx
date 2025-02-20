import "./App.css";
import { invoke } from "./lib/api.js";
import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const example = async () => {


        const message = await invoke("example", { name });
        setMessage(message)
    };

    return (
        <main>
            <h1>Nivalis</h1>
            <div className="input-container">
                <input
                    id="greet-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                />
                <button onClick={example} className="btn">
                    Say Hello
                </button>
            </div>

            <p className="message" style={{ visibility: message === "" ? "hidden" : "visible" }}>
                {message}
            </p>

            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `-${Math.random() * 5}s`,
                        width: `${Math.random() * 5 + 5}px`,
                        height: `${Math.random() * 5 + 5}px`,
                    }}
                ></div>
            ))}
        </main>
    );
};

export default App;