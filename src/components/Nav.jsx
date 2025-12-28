import React, { act, useReducer, useState } from 'react'
import Home from '../components/Navitmes/Home'
import { FaHome } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router";
function funReducer(state, action) {
    switch (action.type) {
        case "btn1": return { ...state, btn1: "hidden", btn2: "", high: "h-35" };
        case "btn2": return { ...state, btn1: "", btn2: "hidden", high: "h-0" };
    }
}
function Nav() {
    const [state, setState] = useReducer(funReducer, { btn1: "", btn2: "hidden", high: "h-0" })

    function handlEvent() {
        if (state.btn1 == "") {
            setState({ type: "btn1" });
        }
        else {
            setState({ type: "btn2" });
        }
    }
    return (
        <div className='max-sm:max-w-[640px] max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:px-4 max-sm:mt-2 max-sm:overflow-hidden max-sm:mb-4'>
            <div className='navfadeDrop max-sm:flex  max-sm:justify-between max-sm:items-center max-lg:justify-between sm:h-[50px] sm:w-[100%] sm:flex sm:justify-between sm:items-center sm:mt-2 sm:px-7'>
                <div className='sm:text-[25px] max-sm:text-balance font-bold cursor-pointer'>
                    <Link to={"/"}><p className='hover:scale-140 transition-transform duration-300 hover:rotate-[360deg]'>PORTFOLIO</p></Link>
                </div>
                <div className='max-sm:hidden sm:flex sm:items-center sm:justify-between lg:w-[65%]'>
                    <div className=' sm:flex sm:gap-14 sm:text-[14px] sm:text-[#323232] cursor-pointer'>
                        <Link to={"/"}><div className='text-white'>Home</div></Link>
                        <Link to={"/about"}> <div>About</div></Link>
                        <Link to={"/works"}> <div>Works</div></Link>
                        <Link to={"/contact"}><div>Contact</div></Link>
                    </div>
                    <div className='max-lg:hidden text-[14px] border-0 rounded-xl px-[22px] py-[5px] bg-[#323232] cursor-pointer'>
                        <p>Let`s talk</p>
                    </div>
                </div>
                <div onClick={handlEvent} className={` ${state.btn1} sm:hidden cursor-pointer max-sm:text-base `}>
                    <RiMenu3Fill />
                </div>
                <div onClick={handlEvent} className={`${state.btn2} sm:hidden cursor-pointer max-sm:text-base`}>
                    <RxCross1 />
                </div>
            </div>
            <div onClick={handlEvent} className={`${state.high} overflow-hidden flex justify-end transition-all duration-300 items-center`}>
                <div className='flex flex-col gap-3 items-end sm:hidden'>
                    <Link to={"/"}><div className='text-white'>Home</div></Link>
                    <Link to={"/about"}> <div>About</div></Link>
                    <Link to={"/works"}> <div>Works</div></Link>
                    <Link to={"/contact"}><div>Contact</div></Link>
                </div>
            </div>
        </div >
    )
}

export default Nav