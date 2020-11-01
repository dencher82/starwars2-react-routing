import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {UserContext} from "./utils/Context";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: window.location.hash.substring(2)
        }
    }

    changeActivePage = page => {
        this.setState({activePage: page})
    }

    componentDidMount() {
        window.addEventListener('hashchange',
            () => this.changeActivePage(window.location.hash.substring(2)));
    }

    render() {
        return (
            <div className='container-fluid'>
                <UserContext.Provider value={this.changeActivePage}>
                    <Header/>
                    <Main page={this.state.activePage}/>
                    <Footer/>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App;
