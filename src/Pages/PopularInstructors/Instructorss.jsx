import React from 'react';
import './PopularInstructor.css';
import '@smastrom/react-rating/style.css'
import { FaArrowRight, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {  AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Instructorss = ({ instructor }) => {
    if (instructor.role !== 'instructor') {
        return null; // If the role is not 'instructor', don't render anything
    }

    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className="card w-80 md:h-96 mx-auto bg-base-100 border  shadow-xl">
            <figure className="image-container">
                <img src={instructor.photo} className='rounded-full mt-5 h-44 w-44 mb-2 border-solid border-2 border-[#55d6af]' alt="photo" />

            </figure>
            <div className='text-center '>
                <p className='text-center my-2'><span className=' text-md font-semibold'> {instructor.name}</span> </p>
                <h2 className='text-gray-400'>{instructor.role}</h2>
                <p className='text-gray-400'>{instructor.email}</p>

            </div>
            <div className='flex justify-around mx-12 mt-8'>
                <div> <button><FaFacebookSquare className='text-3xl icon-style text-[#55d6af] hover:text-[#4AD382]'></FaFacebookSquare></button></div>
                <div> <button><AiFillLinkedin className='text-3xl icon-style text-[#55d6af] hover:text-[#4AD382]'></AiFillLinkedin></button> </div>
                <div> <button><AiFillTwitterSquare className='text-3xl icon-style text-[#55d6af] hover:text-[#4AD382]'></AiFillTwitterSquare></button> </div>
                <div> <button><FaInstagramSquare className='text-3xl icon-style text-[#55d6af] hover:text-[#4AD382]'></FaInstagramSquare></button> </div>

            </div>
            <hr className='my-1 border-solid border-1 border-gray-300' />
            <div className="card-body">

                <button className="justify-center btn btn-sm my-2 bg-[#55d6af]">
                    See Classes <FaArrowRight />
                </button>

            </div>


            
        </div>
    );
};

export default Instructorss;