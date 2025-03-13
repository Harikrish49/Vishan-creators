import React, { useState } from 'react'
import Logo from "../../assets/Home/VC_Logo.png"
import Arrow from "../../assets/Common_Assets/Nav_bar_Arrow.svg"
import Right_arrow from "../../assets/Common_Assets/Arrow right.svg"
const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const HandleOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <div className='flex justify-between items-center px-14 py-5 bg-[#252627] font-poppins'>
            <img className='w-60 h-12' src={Logo} alt="" />
            <div className='flex items-center gap-7 justify-center'>
                <div>
                    <a href="/About" className='text-white'>About</a>
                </div>
                <div className='flex items-center gap-2 font-poppins' onClick={HandleOpen}>
                    <button className='text-white'>Solution</button>
                    <img
                        src={Arrow}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        alt=""
                    />
                    {isOpen && <div className='absolute font-poppins bg-[#252627] text-white left-0 top-9 mt-10 w-full z-50 h-30 flex items-center justify-center px-14 py-10 gap-36'>
                        <h1 className='text-4xl font-poppins'>Our Solutions</h1>
                        <div className=''>
                            <div className='flex gap-20 mb-10 text-base font-poppins'>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Branding_Solution">Branding <br /> Solution</a>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Digital_Marketing_Solution">Digital Marketing <br /> Solution</a>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Advertisement_Solution">Advertisement <br /> Solution</a>
                                </div>
                            </div>
                            <div className='flex gap-16 text-base'>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Promotion_Solution">Promotion <br /> Solution</a>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Outdoor_Promotion_solution">Outdoor Promotion <br /> solution</a>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={Right_arrow} alt="" />
                                    <a href="/Corporate_Gifts">Corporate <br /> Gifts</a>
                                </div>
                            </div>
                        </div>

                    </div>}
                </div>
                <div>
                    <a href="/Our Works" className='text-white'>Our Works</a>
                </div>
                <div>
                    <a href="/Carrer" className='text-white'>Carrer</a>
                </div>
                <div>
                    <a href="/Vendors" className='text-white'>Vendors</a>
                </div>
                <div>
                    <a href="/Blogs" className='text-white'>Blogs</a>
                </div>
                <div>
                    <button className='bg-[#252627] text-white border-2 px-6 py-2 text-lg'>Lets us talk</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
