import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdComputer } from "react-icons/md";
import { FaBookOpen, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CountUp from 'react-countup';



const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);
    return (
        <div className=''>
            <Carousel
                autoPlay
                interval={3000}
                showThumbs={false}
                infiniteLoop
                style={{ height: '680px' }}
            >
                <div data-aos="fade-down" data-aos-duration="1500"  className='-z-50' style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/bBL095c/bg-1.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center p-5 justify-start h-full ">
                        <div className="text-center md:ml-36" data-aos="fade-right" data-aos-duration="1500">
                            <p className='text-white text-start text-6xl font-bold'>
                                Study Languages
                                <br />
                                Having Fun!
                            </p>
                            <p className='text-gray-200 text-start text-2xl mt-5'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>

                           <div data-aos="zoom-in" data-aos-duration="1500" >
                           <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                           </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/t3YfNRY/bg-2.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-start  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-white text-start text-5xl font-bold'>

                                Putting Children First.
                                <br />
                                Preparing Children For
                                <br />
                                Success In Life</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/LncMkCh/bg-3.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-center  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-white text-6xl text-start font-bold'>
                                Every student matters,
                                <br />
                                every moment counts</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>Our Courses Are Taught At Beginner to Advanced
                                <br />
                                Levels on a Year Round Basic</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>

                <div style={{ height: '680px', backgroundImage: `url("https://i.ibb.co/Cntynnp/bg-4.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="flex items-center justify-start  p-5 h-full">
                        <div className="text-center md:ml-36">
                            <p className='text-start text-white text-6xl font-bold'>
                                We Are Trusted
                                <br />
                                Institution!</p>
                            <p className='text-gray-200 text-2xl mt-5 text-start'>We offer Foreign Language
                                <br />
                                Basic to Advance Level</p>
                            <button className="btn btn-active btn-wide btn-accent text-start flex text-white font-bold mt-4">Learn more</button>
                        </div>
                    </div>
                </div>
            </Carousel>

            <div data-aos="zoom-in" data-aos-duration="1500"  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 md:mx-28 p-2 gap-5'>
                <div className='flex items-center gap-3'>
                    <div>
                        <MdComputer className='bg-[#E6E5FF] text-[#A5A3EF] p-3 text-5xl rounded-full'></MdComputer>
                    </div>

                    <div> <p className='font-bold text-lg'>Online Tutoring</p></div>

                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <FaBookOpen className='bg-[#d2f3df] text-[#4AD382] p-3 text-5xl rounded-full'></FaBookOpen>
                    </div>

                    <div> <p className='font-bold text-lg'><CountUp end={10} duration={2} /> + Courses</p></div>

                </div>
                <div className='flex items-center gap-3'>
                    <div>
                        <FaUsers className='bg-[#f5e9d3] text-[#FFB830] p-3 text-5xl rounded-full'></FaUsers>
                    </div>

                    <div> <p className='font-bold text-lg'>Lifetime Access</p></div>
                </div>

                <div className='flex items-center gap-3'>
                    <div>
                        <FaUsers className='bg-[#d2e8f4] text-[#3AB5F6] p-3 text-5xl rounded-full'></FaUsers>
                    </div>

                    <div> <p className='font-bold text-lg'>Activate Learning</p></div>
                </div>

            </div>


        </div>
    );
};

export default Banner;
