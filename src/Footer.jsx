import React from 'react'

const Footer = ()=>{

    const date = new Date();
    const year = date.getFullYear();
    return(
        <>
            <div className="footer">
            <footer className=" text-center bg-light">
            <p>© {year} ReactApp. All Rights reserved | Terms and Conditions</p>
            </footer>
            </div>
        </>
    )
}

export default Footer;