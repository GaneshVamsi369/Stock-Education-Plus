import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Reviews from './components/Reviews'
import Feedback from './components/Feedback'
import Stragety from './components/Stragety'
import TradingViewWidget from './components/Tradeview'
import Broker from './components/Broker'
import Stockedu from './components/Stockedu'

const App=()=>(
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Reviews" component={Reviews} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/strategy" component={Stragety} />
                <Route exact path="/trading" component={TradingViewWidget} />
                <Route exact path="/brokers" component={Broker} />
                <Route exact path="/stock-education" component={Stockedu} />
            </Switch>
        </>
)
export default App