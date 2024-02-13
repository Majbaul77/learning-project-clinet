import React from 'react';
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { MdCall, MdLocationOn, MdMail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);
    return (
        <>
            <footer className="footer p-10 mt-20 bg-[#FFFFFF] text-base-content">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src="https://i.ibb.co/tK3xQR2/logo.jpg" alt="" />

                    <div className='mt-3 '>

                        <div className='flex items-center'>
                            <div>
                                <MdLocationOn className='text-3xl mr-2'></MdLocationOn>
                            </div>
                            <h2 className='font-semibold '>Dhaka, Bangladesh</h2>
                        </div>

                        <div className='flex items-center mt-3'>
                            <div>
                                <MdCall className='text-3xl mr-2'></MdCall>
                            </div>
                            <h2 className='font-semibold '>+8801777577371</h2></div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <MdMail className='text-2xl mr-2'></MdMail>
                            </div>
                            <h2 className='font-semibold '>anamulhasan3625@gmail.com</h2>;

                        </div>
                        <div className='flex justify-between  mt-5'>
                            <div> <button><FaFacebookSquare className='text-2xl icon-style '></FaFacebookSquare></button></div>
                            <div> <button><AiFillLinkedin className='text-2xl icon-style '></AiFillLinkedin></button> </div>
                            <div> <button><AiFillTwitterSquare className='text-2xl icon-style '></AiFillTwitterSquare></button> </div>
                            <div> <button><FaInstagramSquare className='text-2xl icon-style '></FaInstagramSquare></button> </div>

                        </div>
                    </div>

                </div>
                <div className='font-semibold' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <span className="text-xl font-bold">Services</span>
                    <a className="link link-hover ">English</a>
                    <a className="link link-hover ">Spanish</a>
                    <a className="link link-hover ">French</a>
                    <a className="link link-hover ">German</a>
                    <a className="link link-hover ">More</a>
                </div>
                <div className='font-semibold' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <span className="text-xl font-bold">Legal</span>
                    <a className="link link-hover ">Terms of use</a>
                    <a className="link link-hover ">Privacy policy</a>
                    <a className="link link-hover ">Cookie policy</a>
                </div>
                <div className='font-semibold' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <span className="text-xl font-bold">Company</span>
                    <a className="link link-hover ">About us</a>
                    <a className="link link-hover  ">Contact</a>

                </div>



            </footer>

            <div className='text-center bg-[#FFFFFF] mb-2'>
                <p className='text-gray-500'>Copyright © 2023 - All right reserved by Language Center</p>
            </div>

        </>

    );
};

export default Footer;