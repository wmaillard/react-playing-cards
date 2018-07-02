import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-dropdown/style.css'
import CardExample from "./CardExample";
import HandExample from "./HandExample";
import SolitaireExample from "./SolitaireExample";
import GinRummyExample from "./GinRummyExample";

const Home = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/card">Card</Link>
                </li>
                <li>
                    <Link to="/hand">Hand</Link>
                </li>
                <li>
                    <Link to="/solitaire">Solitaire</Link>
                </li>
                <li>
                    <Link to="/gin-rummy">Gin Rummy</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/card" component={CardExample} />
            <Route path="/hand" component={HandExample} />
            <Route path="/solitaire" component={SolitaireExample} />
            <Route path="/gin-rummy" component={GinRummyExample} />


        </div>
    </Router>
);



export default Home;