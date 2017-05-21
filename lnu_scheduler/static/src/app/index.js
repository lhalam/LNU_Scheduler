import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import Schedule from "./components/Schedule";

import RoomsContainer from "./components/room/RoomsContainer";
import TeachersContainer from "./components/teacher/TeachersContainer";
import SubjectsContainer from "./components/subject/SubjectsContainer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/home" component={Schedule}/>
                    <Route path="/rooms" component={RoomsContainer}/>
                    <Route path="/teachers" component={TeachersContainer}/>
                    <Route path="/subjects" component={SubjectsContainer}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

const app = document.getElementById('app')
ReactDOM.render(<App />, app);