import React from "react";

import Header from "./header/Header"
import Footer from "./footer/Footer"

import Container from "./layout/Container"

export default class Rooms extends React.Component {
    render() {
        return (
            <div>
            	<Header />
                <Container />
                <Footer />
            </div>
        );
    }
}
