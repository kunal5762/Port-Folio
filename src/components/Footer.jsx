import React from 'react'
import { Link } from "react-router";
function Footer() {
    return (
        <div>
            <div className='footerFadeDrop max-sm:h-[300px] max-sm:w-[550px] h-[300px] w-[100%] flex flex-col justify-center items-center '>
                <div className='max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center flex flex-col justify-center items-center gap-7'>
                    <div className='max-sm:text-[15px] text-[20px] cursor-pointer'>
                        <a href='https://in.pinterest.com/' target='_blank'>www.Download.thmes.com</a>
                    </div>
                    <div className='max-sm:text-[25px] text-[35px] font-bold'>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className='max-sm:text-[16px] flex gap-9 text-[18px] text-[#323232] cursor-pointer'>
                        <Link to={"/"}><div className='text-white'>Home</div></Link>
                        <Link to={"/about"}> <div>About</div></Link>
                        <Link to={"/works"}> <div>Works</div></Link>
                        <Link to={"/contact"}><div>Contact</div></Link>
                    </div>
                    <div className='max-sm:text-[15px]'>
                        <p>All Rights Reserved by <a href='https://wordpress.com/?gad_source=1&gad_campaignid=23290173094&gbraid=0AAAAACvT_qMILUOTg0PyLnE0u9Ic50qoF&gclid=CjwKCAiAuIDJBhBoEiwAxhgyFmVFW5crlHAiCLammbjuZBEMW2YnRW29ISF60JuVJviJKjpkdym8VhoC-pkQAvD_BwE' target="_blank" className='text-[#646FF4]'>WordPressRiver</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer