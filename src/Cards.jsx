import React from 'react'
import { NavLink } from 'react-router-dom'


const Cards = (props)=>{
        return(
            <>  
                <div className="col-md-4 col-lg-4 col-sm-5 col-10 mx-auto">
                    <div className="card mb-5" >
                    <img className="card-img-top" src={props.imgsrc} alt="card_img" />
                        <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p>detail about card detail about card detail about card  </p>
                            <NavLink to="/contact" className="btn-contact-us" >
                            Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default Cards;