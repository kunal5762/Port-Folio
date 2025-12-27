import React, { act, useReducer, useState } from 'react'
import Home from '../components/Navitmes/Home'
import { FaHome } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router";
function funReducer(state,action){
    switch(action.type){
        case"btn1" : return {...state , btn1:"hidden",btn2:"",high:"h-42"};
        case"btn2": return {...state , btn1:"",btn2:"hidden",high:"h-0"};
    }
}
function Nav() {
    const [state,setState] = useReducer(funReducer,{btn1:"",btn2:"hidden",high:"h-0"})

    function handlEvent(){
        if(state.btn1 == ""){
            setState({type:"btn1"});
        }
        else{
            setState({type:"btn2"});
        }
    }
    return (
        <div className='max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:max-w-sm'>
            <div className='navfadeDrop max-sm:flex max-sm:justify-between max-sm:items-center max-sm:max-w-sm max-sm:px-6 h-[50px] w-[100%] flex justify-between items-center mt-2 px-7'>
                <div className='text-[25px] text-base font-bold cursor-pointer'>
                    <Link to={"/"}><p className='hover:scale-140 transition-transform duration-300 hover:rotate-[360deg]'>PORTFOLIO</p></Link>
                </div>
                <div className='max-sm:hidden flex items-center justify-between w-[60%]'>
                    <div className='flex gap-14 text-[14px] text-[#323232] cursor-pointer'>
                        <Link to={"/"}><div className='text-white'>Home</div></Link>
                        <Link to={"/about"}> <div>About</div></Link>
                        <Link to={"/works"}> <div>Works</div></Link>
                        <Link to={"/contact"}><div>Contact</div></Link>
                    </div>
                    <div className=' text-[14px] border-0 rounded-xl px-[22px] py-[5px] bg-[#323232] cursor-pointer'>
                        <p>Let`s talk</p>
                    </div>
                </div>
                <div onClick={handlEvent} className={` ${state.btn1} sm:hidden cursor-pointer max-sm:pr-3 max-sm:text-base `}>
                    <RiMenu3Fill />
                </div>
                <div onClick={handlEvent} className={`${state.btn2} sm:hidden cursor-pointer max-sm:pr-3 max-sm:text-base`}>
                    <RxCross1/>
                </div>
            </div>
            {/* <div onClick={handlEvent} className={`${state.high} text-white max-w-sm flex justify-end pr-3 overflow-hidden transition-all duration-300 items-center`}>
            <div className='flex flex-col gap-5 sm:hidden pt-5'>
                        <Link to={"/"}><div className='text-white'>Home</div></Link>
                        <Link to={"/about"}> <div>About</div></Link>
                        <Link to={"/works"}> <div>Works</div></Link>
                        <Link to={"/contact"}><div>Contact</div></Link>
                    </div>
            </div> */}
        </div >
    )
}

export default Nav