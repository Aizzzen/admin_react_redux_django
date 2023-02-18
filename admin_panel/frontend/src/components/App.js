import React, {Component} from 'react'
import Header from "./layouts/Header"
import Dashboard from "./leads/Dashboard"


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </>
        )
    }
}

export default App