import React from 'react'
import Sdata from './Sdata'
import Cards from './Cards'

const Servies = ()=>{
    return(
        <>
            <div className="">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                          {
                              Sdata.map((val,ind) => {
                                return (
                                    <Cards
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                )
                              })
                          }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servies;