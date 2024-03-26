import { Component } from "react";
import Loader from 'react-loader-spinner'
import Header from "../Header";
import Footer from "../Footer";
import './index.css'

class Broker extends Component{
    state={list:[],statuss:"LOAD"}

    componentDidMount = () => {
        this.getreviews()
    }

    getreviews = async () => {
        this.setState({status: 'LOAD'})
        const url = 'https://api.npoint.io/96b55390665ceb359bd3'
        const options = {
          method: 'GET',
          headers: {'content-type': 'application/json'},
        }
        const response = await fetch(url, options)
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          this.setState({list: data, statuss: 'SUCCESS'})
        } else {
          this.setState({statuss: 'LOAD'})
        }
    }

    loading = () => (
        <div className="loader-container">
          <Loader type="TailSpin" color="#8284C7" height={50} width={50} />
        </div>
    )
    
    successcall=()=>{
        const {list}=this.state
        return(
            <ul className="reviewslist">
                {list.map(each=>(
                    <li>
                        <div>
                            <h2>Brokerage:{each.name}</h2>
                            <p>{each.description}</p>
                            <p><span>Features : </span>{each.features}</p>
                            <p><span>Commission charge: </span>{each.fees.commissions.stock}</p>
                            <p><span>Maintenance charge: </span>{each.fees.account_fees.maintenance}</p>
                            <p>{each.feedback}</p>
                            <p>Visit <a href={each.website}>{each.website}</a> for more</p>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    renderbroker=()=>{
        const {statuss} = this.state
        switch (statuss) {
        case 'LOAD':
            return this.loading()
        case 'SUCCESS':
            return this.successcall()
        default:
            return null
        }
    }

    render(){
        return(
            <div className="bg">
                <Header/>
                {this.renderbroker()}
                <Footer/>
            </div>
        )
    }
}

export default Broker