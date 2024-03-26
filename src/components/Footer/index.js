import {Link} from 'react-router-dom'
import './index.css'

const Footer=()=>{
    return(
        <div className='foot'>
            <div className='footdiv'>
                <div className='cont'>
                <Link to="/" className='logotxt'>
                    <h1 className='txt'>IFM</h1>
                </Link>
                    <p>We are a team of passionate individuals dedicated to making
                   stock market education accessible and engaging. Our platform empowers you to learn the fundamentals of investing, discover the right broker for your needs, explore trading strategies,
                   and gain valuable insights through reviews and feedback.
                    </p>
                </div>
                <div className='cont'>
                    <h3 className='foothead'>COMPANY</h3>
                    <Link to="/" className="linkstyle">
                    <p> Home</p>
                    </Link>

                    <Link to="/stock-education" className="linkstyle">
                    <p>Stock Education</p>
                    </Link>

                    <Link to="/brokers" className="linkstyle">
                    <p>Brokers</p>
                    </Link>

                    <Link to="/strategy" className="linkstyle">
                    <p>Stragety</p>
                    </Link>

                    <Link to="/trading" className="linkstyle">
                    <p>Trading</p>
                    </Link>

                    <Link to="/reviews" className="linkstyle">
                    <p>Reviews</p>
                    </Link>

                    <Link to="/feedback" className="linkstyle">
                    <p>Feedback</p>
                    </Link>
                </div>
                <div className='cont'>
                    <h3 className='foothead'>IMPORTANT LINKS</h3>
                    <p>Privacy Policy</p>
                    <p>FAQs</p>
                    <p>Terms of Services</p>
                </div>
            </div>
            <div className='footerfoot'>
                <p>&#169; IFM. 2024 ALL Rights Reserved.</p>
                <p>Privacy | Terms of Services</p>
            </div>
        </div>
    )
}
export default Footer