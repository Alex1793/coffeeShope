import './App.css';

import { Component } from 'react';

import MainPage from '../components/mainPage/mainPage';

import solim from '../img/solim.png';
import presto from '../img/presto.png';
import aromistiko from '../img/aromistiko.png';

class App extends Component  {
    constructor (props) {
        super(props);
        this.state = {
            best: [
                {img: solim, name: 'Solimo Coffee Beans 2 kg', price: '10.73$'},
                {img: presto, name: 'Presto Coffee Beans 1 kg', price: '15.99$'},
                {img: aromistiko, name: 'AROMISTICO Coffee 1 kg', price: '6.99$'}
            ]
        }
    }
    
    render () {
        return (
            <div>
                <MainPage best={this.state.best}/>
            </div>
        )
    }
}

export default App;
