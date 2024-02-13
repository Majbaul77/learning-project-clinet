
import './learn.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const LearnNew = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);
    return (
        <div className="text-center my-28 ">
            <div className="font-bold" data-aos="fade-up" data-aos-duration="1500" >
                <h3 className="text-gray-400 text-5xl "> Welcome, Folks!</h3>
                <p className="text-xl text-[#55d6af] my-5">Why Study With Us</p>
            </div>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
                className="hero "
                style={{
                    height: '400px', // Adjust the height as desired
                    backgroundImage: `url("https://i.ibb.co/MCpF91P/Purple-and-Pink-Cyberpunk-Crypto-Currency-Business-Banner.png")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">

                        <div className="mb-5 ">
                            <p className="text-5xl font-bold">Intensive English Program</p> <br /> <span className="text-2xl font-bold">for International Students</span>

                        </div>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnNew;
