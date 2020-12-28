import React, { useState } from 'react'
import Axios from 'axios'

const Contact = ()=>{

    let [data, setData] = useState({
        username:"",
        phone:'',
        email:""
    })

    const InputEvent = (event)=>{

        let {name, value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const send = ()=>{
        Axios.post(`http://localhost:3001/userdata`, {
                username : data.username, 
                phone : data.phone,
                email : data.email        
        }).then(()=>{
            console.log('inserted')
         }).catch((e)=>{console.log(e)}
         )
         
        setData({
            username:" ",
            phone:' ',
            email:" "})
    }

    return(
        <>
            <div className="mb-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
            <div className="row">
                <div className='col-lg-6 col-md-6 col-12 mx-auto'>
                    <form onSubmit={(e)=>{e.preventDefault()}} className="form_div">
                        <div className="form-group">
                            <label>Username</label>
                            <input className="form-control" 
                            type="text" 
                            name="username" 
                            value={data.username} 
                            placeholder="enter full name" 
                            onChange={InputEvent}
                            />
                        </div><br/>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input className="form-control" 
                            type="number" 
                            name="phone" 
                            value={data.phone} 
                            placeholder="enter phone number" 
                            onChange={InputEvent}
                            />
                        </div><br/>
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" 
                            type="text" 
                            name="email" 
                            value={data.email} 
                            placeholder="enter email" 
                            onChange={InputEvent}
                            />
                        </div><br/>
                        <div className="form-group">
                        <button onClick={send} className="btn btn-primary" >
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>  
            </div>
        </>
    )
}

export default Contact;