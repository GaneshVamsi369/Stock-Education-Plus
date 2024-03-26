import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {IoMenu, IoCloseOutline} from 'react-icons/io5'
import './index.css'

class Header extends Component {
  state = {menudisplay: false}

  menuclicked = () => {
    this.setState(prev => ({menudisplay: !prev.menudisplay}))
  }

  closebtn = () => {
    this.setState({menudisplay: false})
  }

  render() {
    const {menudisplay} = this.state
    const {history} = this.props
    const loca = history.location.pathname
    const homeli = loca === '/' ? `${'active'} headerlistli` : 'headerlistli'
    const reviewsli = loca === '/reviews' ? `${'active'} headerlistli` : 'headerlistli'
    const feedbackli = loca === '/feedback' ? `${'active'} headerlistli` : 'headerlistli'
    const strategyli = loca === '/strategy' ? `${'active'} headerlistli` : 'headerlistli'
    const brokersli = loca === '/brokers' ? `${'active'} headerlistli` : 'headerlistli'
    const tradingli = loca === '/trading' ? `${'active'} headerlistli` : 'headerlistli'
    const stockeducationli = loca === '/stock-education' ? `${'active'} headerlistli` : 'headerlistli'

    return (
      <nav className='nav'>
        <div className="largenav">
          <Link to="/" className='logotxt'>
            <h1 className='txt'>IFM</h1>
          </Link>
          <ul className="headerlist">
            <Link to="/" className="linkstyle">
              <li className={homeli}> Home</li>
            </Link>

            <Link to="/stock-education" className="linkstyle">
              <li className={stockeducationli}>Stock Education</li>
            </Link>

            <Link to="/brokers" className="linkstyle">
              <li className={brokersli}>Brokers</li>
            </Link>

            <Link to="/strategy" className="linkstyle">
              <li className={strategyli}>Stragety</li>
            </Link>

            <Link to="/trading" className="linkstyle">
              <li className={tradingli}>Trading</li>
            </Link>

            <Link to="/reviews" className="linkstyle">
              <li className={reviewsli}>Reviews</li>
            </Link>

            <Link to="/feedback" className="linkstyle">
              <li className={feedbackli}>Feedback</li>
            </Link>


          </ul>
        </div>
        <div className="shortnav">
          <Link to="/" className='logotxt'>
          <h1 className='txt'>IFM</h1>
          </Link>
          <button
            type="button"
            className="hamburgerbtn"
            onClick={this.menuclicked}
          >
            <IoMenu />
          </button>
        </div>
        {menudisplay && (
          <div className="menu">
            <ul className="headerlist short">
            <Link to="/" className="linkstyle">
              <li className={homeli}> Home</li>
            </Link>

            <Link to="/stock-education" className="linkstyle">
              <li className={stockeducationli}>Stock Education</li>
            </Link>

            <Link to="/brokers" className="linkstyle">
              <li className={brokersli}>Brokers</li>
            </Link>

            <Link to="/strategy" className="linkstyle">
              <li className={strategyli}>Stragety</li>
            </Link>

            <Link to="/trading" className="linkstyle">
              <li className={tradingli}>Trading</li>
            </Link>

            <Link to="/reviews" className="linkstyle">
              <li className={reviewsli}>Reviews</li>
            </Link>

            <Link to="/feedback" className="linkstyle">
              <li className={feedbackli}>Feedback</li>
            </Link>

              <button
                type="button"
                className="hamburgerbtn"
                onClick={this.closebtn}
              >
                <IoCloseOutline />
              </button>
            </ul>
          </div>
        )}
      </nav>
    )
  }
}
export default withRouter(Header)
