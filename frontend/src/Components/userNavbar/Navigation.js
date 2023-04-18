import React from "react";
import CashFlow from "./CashFlow";
import Wallet from "./Wallet";
import Send from "./Send";
import Withdraw from "./Withdraw";
import Transactions from "./Transactions";
import Profile from "./Profile";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Navigation = () => {
    return ( 
        <section data-testid="Navigation-1">
            <Router>
                <Navbar />

                <Switch>
                    <Route path='/' component={CashFlow} exact>
                        <CashFlow />
                    </Route>

                    <Route path='/wallet' component={Wallet} exact>
                        <Wallet />
                    </Route>

                    <Route path='/send' component={Send} exact>
                        <Send />
                    </Route>

                    <Route path='/withdraw' component={Withdraw} exact>
                        <Withdraw />
                    </Route>

                    <Route path='/transactions' component={Transactions} exact>
                        <Transactions />
                    </Route>

                    <Route path='/profile' component={Profile} exact>
                        <Profile />
                    </Route>

                    <Route>
                    {/* log out */}
                    </Route>
                </Switch>
            </Router>

        </section>
     );
}
 
export default Navigation;