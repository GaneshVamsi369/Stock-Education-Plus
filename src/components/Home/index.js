import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Home extends Component{

    render(){
        return(
            <div className='bg'>
              <Header/>
              <div className='body'>
                <div className='homediv'>
                  <div>
                    <h1>Learn, Invest, Grow with Stocks</h1>
                    <p>Empower yourself with stock market knowledge and tools.</p>
                  </div>
                  <img src='https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?b=1&s=170667a&w=0&k=20&c=iwQM0ozj7upM-_7CUEjZ2veIY3ljlB8m3PbijouIyVM='
                  alt='trading img'
                    className='tradingimg' />
                </div>   
                <h1>About us</h1>
                <p>We are a team of passionate individuals dedicated to making
                   stock market education accessible and engaging. Our platform empowers you to learn the fundamentals of investing, discover the right broker for your needs, explore trading strategies,
                   and gain valuable insights through reviews and feedback.
                </p>
                <div className='partssec'>
                  <div className='homeparts'>
                    <h1>Stock Education</h1>
                    <p>Learn the fundamentals of investing with our comprehensive guides,articles and video tutorials.</p>
                    <Link to="/stock-education">
                      <button className='btn'>LEARN MORE</button>
                    </Link>
                  </div>
                  <div className='homeparts'>
                    <h1>Find a Broker</h1>
                    <p>Compare top brokers based on fees, features, and investment products to find the perfect fit.</p>
                    <Link to="/brokers">
                      <button className='btn'>EXPLORE BROKERS</button>
                    </Link>
                  </div>
                  <div className='homeparts'>
                    <h1>Trading Strategies</h1>
                    <p>Discover various trading strategies and learn how to apply them to your investment goals.</p>
                    <Link to="/strategy">
                      <button className='btn'>LEARN STRATEGIES</button>
                    </Link>
                  </div>
                  <div className='homeparts'>
                    <h1>Trading</h1>
                    <p>Learn the basics and intricacies of trading with our in-depth guides, articles, and video tutorials.</p>
                    <Link to="/trading">
                      <button className='btn'>TRADE NOW</button>
                    </Link>
                  </div>
                  <div className='homeparts'>
                    <h1>Reviews from Traders</h1>
                    <p>Read reviews from other traders to get insights into different brokers, platforms, and strategies.</p>
                    <Link to="/reviews">
                      <button className='btn'>EXPLORE REVIEWS</button>
                    </Link>
                  </div>
                  <div className='homeparts'>
                    <h1>Give suggestions</h1>
                    <p>Share your suggestions for new trading topics or strategies you'd like to learn more about.</p>
                    <Link to="/feedback">
                      <button className='btn'>FEEDBACK</button>
                    </Link>
                  </div>
                </div>
              </div>             
              <Footer/>
            </div>
        )
    }
}
export default Home