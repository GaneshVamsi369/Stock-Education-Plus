import { Component } from "react";
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Feedback extends Component{
    submitted=event=>{
        console.log('1')
        event.preventDefault()
    }

    render(){
        return(
            <div className='bg'>
                <Header/>
                <div className='formcontainer'>
                    <form className='form'  onSubmit={this.submitted}>
                        <div className='container'>
                            <label htmlFor='name'>Name</label>
                            <input placeholder='Name' id="name"  />
                        </div>
                        <div className='container'>
                            <label htmlFor='title'>Course</label>
                            <input placeholder='Title' id="title"  />
                        </div>
                        <div className='container'>
                            <label htmlFor='feedback'>Feedback</label>
                            <textarea placeholder='Feedback' rows="8" id="feedback"></textarea>
                        </div>
                        <div className='btnclass'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Feedback