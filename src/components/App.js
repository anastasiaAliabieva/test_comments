import React, {Component} from 'react';
import '../assets/App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from '../reducers'
import ItemsList from "../containers/ItemsList";
import CommentsList from "../containers/CommentsList";
import SideMenu from "./SideMenu";

const store = createStore(rootReducer)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <SideMenu/>
                    <ItemsList/>
                    <CommentsList/>
                </div>
            </Provider>
        );
    }
}

export default App;
