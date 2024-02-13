import React from 'react';

const ContactNow = () => {
    return (
        <div className=" md:h-96 my-28  " data-aos="fade-up-right" style={{ backgroundImage: 'url(https://i.ibb.co/8M8y0YS/Black-Gradient-Minimalist-Corporate-Business-Personal-Profile-New-Linked-In-Banner.png)' }}>
            <div className="hero-content flex-col lg:flex-row-reverse mx-auto">

                <div className="card flex-shrink-0  ">
                    <form className="" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" >
                        <div>
                            <input type="text" placeholder="Your Email Address" required className="input input-bordered md:w-[500px] " />
                            </div>
                        <div className='mt-5'>
                            <button type='submit' className="btn  bg-[#4bc5a0] btn-wide">Subscribe Now</button>
                        </div>
                    </form>
                </div>

                <div className="text-center lg:text-left ">
                    <p className='text-lg font-semibold mb-5 text-[#4bc5a0]' data-aos="fade-down" data-aos-duration="1500">OUR MENTORS</p>
                    <h1 className="text-4xl font-bold">Don't Miss Any News & Offers From Us.</h1>
                    <p className="py-6 text-gray-400">Etanon est nisl mi vitae faucibus nulla amet malesuada bibendum massa vivamus tempor imperdiet posuere elit proin ut dui adipiscing dignissim sagittis ultrices.</p>


                </div>

            </div>
        </div>
    );
};

export default ContactNow;