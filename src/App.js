import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
// import routes from "./route/index"
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
                    {/* {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))} */}
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
