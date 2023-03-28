import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import Footer from '../container/Footer/Footer'
import Header from '../container/header'
import Dashboard from '../pages/Dashboard'


export default function HomePage() {
    return (
        <div className="tmc-div" style={{ background: '#9e9e9e0d' }}>
            <Header />
            <Dashboard />
            {/* <Router >
                <div>
                    <Switch>
                        <Route exact path="/Dashboard" component={Dashboard} />
                    </Switch>
                    <Footer />
                </div>
            </Router> */}
        </div>
    )
}
