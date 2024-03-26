import { Component } from "react";
import Loader from 'react-loader-spinner'
import Header from "../Header";
import Footer from "../Footer";
import './index.css'

class Stragety extends Component{
    state={list:[],statuss:"LOAD"}

    componentDidMount = () => {
        this.getreviews()
    }

    getreviews = async () => {
        this.setState({status: 'LOAD'})
        const url = 'https://api.npoint.io/da88035cf71ee0913a08'
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
                        <div className="videocard">
                        <iframe className="videotemplate"
                            src={each.link} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture; 
                            web-share" allowfullscreen></iframe> 
                            <div>
                                <h2>{each.caption}</h2>
                                <p>{each.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    renderstragety=()=>{
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
                {this.renderstragety()}
                <Footer/>
            </div>
        )
    }
}

export default Stragety