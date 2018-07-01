import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableExample from "./TableExample";
import PlayingCard from "./PlayingCard/Hand/PlayingCard/PlayingCard";
import 'react-dropdown/style.css'
import CardExample from "./CardExample";
import HandExample from "./HandExample";

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
                    <Link to="/board">Board</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/card" component={CardExample} />
            <Route path="/hand" component={HandExample} />
            <Route path="/board" component={TableExample} />
            <Route path="/table" component={TableExample} />

        </div>
    </Router>
);



export default Home;