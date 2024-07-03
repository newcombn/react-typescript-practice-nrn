import React from "react";
import Header from "../wrapper/header";
import Container from "./container";
import Footer from "../wrapper/footer";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <Container />
            <Footer />
        </div>
    )
}

export default Home;