import React from "react";
import { BrowserRouter as Router, Route, Link, DefaultRoute} from "react-router-dom";
import 'react-dropdown/style.css'
import CardExample from "./CardExample";
import HandExample from "./HandExample";
import SolitaireExample from "./SolitaireExample";
import GinRummyExample from "./GinRummyExample";
import PokerExample from "./PokerExample";

const Home = () => (
    <Router>
        <div>
            <ul className="topnav">
                <li>
                    <Link to="/hand">Hand</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>

                <li>
                    <Link to="/solitaire">Solitaire</Link>
                </li>
                {/*<li>*/}
                    {/*<Link to="/gin-rummy">Gin Rummy</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*<Link to="/poker">Poker</Link>*/}
                {/*</li>*/}
            </ul>

            <hr />
            <Route path="/hand" component={HandExample} />
            <Route exact path="/" component={HandExample} />
            <Route exact path="/card" component={CardExample} />
            <Route path="/solitaire" component={SolitaireExample} />
            <Route path="/gin-rummy" component={GinRummyExample} />
            <Route path="/poker" component={PokerExample} />
        </div>
    </Router>
);



export default Home;