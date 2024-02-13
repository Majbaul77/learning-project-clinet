import React from 'react';
import man from '../../../../public/man.png'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaAward, FaBookOpen, FaSmile, FaUserFriends, FaUsers } from 'react-icons/fa';
import { GiNetworkBars } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import CountUp from 'react-countup';


const JoinUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);
    return (

        < >
            <div className="hero my-28 md:h-[700px] " data-aos="fade-up-right" style={{ backgroundImage: 'url(https://i.ibb.co/Wz6RhTq/bg2.png)' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <p className='text-lg font-semibold mb-5 text-[#4bc5a0]' data-aos="fade-down" data-aos-duration="1500">Join With Us</p>
                        <h1 className="text-4xl font-bold">Find Out Why You Should Learn With Verbalizer</h1>
                        <p className="py-6 text-gray-400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div className='grid grid-cols-1 gap-5 md:grid-cols-2' data-aos="zoom-in" >
                            <div className='flex gap-3 p-5 bg-[#dee2f4]'>
                                <div >
                                    <IoIosCheckmarkCircle className='bg-[#b0f8e3] p-2 rounded-full text-5xl text-[#4bc5a0]'></IoIosCheckmarkCircle>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>Create Account</h2>
                                    <p>Lorem ipsum dolor sit amet <br /> consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex gap-3 p-5 bg-[#dee2f4]'>
                                <div >
                                    <FaBookOpen className='bg-[#dad9f7] p-2 rounded-full text-5xl text-[#A5A3EF]'></FaBookOpen>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>Select Course</h2>
                                    <p>Lorem ipsum dolor sit amet <br /> consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex gap-3 p-5 bg-[#dee2f4]'>
                                <div >
                                    <GiNetworkBars className='bg-[#f5e6cb] p-2 rounded-full text-5xl text-[#FFB830]'></GiNetworkBars>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>Learn Your Skill</h2>
                                    <p>Lorem ipsum dolor sit amet <br /> consecte nadipiscing elit</p>
                                </div>
                            </div>
                            <div className='flex gap-3 p-5 bg-[#dee2f4]'>
                                <div >
                                    <FaSmile className='bg-[#a8dcf8] p-2 rounded-full text-5xl text-[#3AB5F6]'></FaSmile>
                                </div>
                                <div>
                                    <h2 className='font-semibold'>Success Story</h2>
                                    <p>Lorem ipsum dolor sit amet <br /> consecte nadipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0   ">
                        <div className="" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" >
                            <img className='h-[650px] mt-10' src={man} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine" className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 md:mx-28 p-2 gap-5 '>
                <div className='flex items-center gap-3'>
                    <div>
                        <FaUserFriends className='bg-[#E6E5FF] text-[#A5A3EF] p-3 text-6xl rounded-full'></FaUserFriends>
                    </div>

                    <div>
                        <p className='font-bold text-3xl'> <CountUp end={1200} duration={5} /> <span className='text-[#A5A3EF]'> + </span></p>
                        <p className='font-semibold text-gray-400'>Activate Students</p>
                    </div>

                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <FaBookOpen className='bg-[#d2f3df] text-[#4AD382] p-3 text-6xl rounded-full'></FaBookOpen>
                    </div>

                    <div>
                        <p className='font-bold text-3xl'> <CountUp end={60} duration={5} /> <span className='text-[#4AD382]'> + </span></p>
                        <p className='font-semibold text-gray-400'>Interactive Courses</p>
                    </div>

                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <FaAward className='bg-[#f5e9d3] text-[#FFB830] p-3 text-6xl rounded-full'></FaAward>
                    </div>

                    <div>
                        <p className='font-bold text-3xl'> <CountUp end={2000} duration={5} /> <span className='text-[#FFB830]'> + </span></p>
                        <p className='font-semibold text-gray-400'>Success Students</p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <div>
                        <FaUsers className='bg-[#d2e8f4] text-[#3AB5F6] p-3 text-6xl rounded-full'></FaUsers>
                    </div>

                    <div>
                        <p className='font-bold text-3xl'> <CountUp end={100} duration={5} /> <span className='text-[#3AB5F6]'> + </span></p>
                        <p className='font-semibold text-gray-400'>Certified Teachers</p>
                    </div>
                </div>

            </div>
        </>

    );
};

export default JoinUs;