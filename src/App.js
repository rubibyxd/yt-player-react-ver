import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './components/Home'
import Collection from './components/Collection'
import Navbar from './components/Navbar'
import VideoPlayer from './components/VideoPlayer'

function App () {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/collection">
                        <Collection />
                    </Route>
                    <Route path="/videoPlayer">
                        <VideoPlayer />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
