import { Component } from "react";
import Loader from 'react-loader-spinner'
import Header from "../Header";
import Footer from "../Footer";
import './index.css'

class Reviews extends Component{
    state={list:[],statuss:"LOAD"}

    componentDidMount = () => {
        this.getreviews()
    }

    getreviews = async () => {
        this.setState({status: 'LOAD'})
        const url = 'https://api.npoint.io/17f299083e2ca32b1e09'
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
                            <h3>{each.student_name}</h3>
                            <h4>{each.stock_course_name}</h4>
                            <p>{each.feedback}</p>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    renderreview=()=>{
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
                {this.renderreview()}
                <Footer/>
            </div>
        )
    }
}

export default Reviews