import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import image from "./image.png";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "blue", padding: "20px" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Mohamed Mouhoud</p>
            <h1>Hello World</h1>
            <img src={image} alt="kon bleach" />
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>

            <div className="boxx">
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "auto",
                    }}
                ></div>
            </div>

            <div className="boxx">
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "auto",
                    }}
                ></div>
            </div>

            <div className="boxx">
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "red",
                        margin: "auto",
                    }}
                ></div>
            </div>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
