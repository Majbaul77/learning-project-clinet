import React from 'react';
import './Class.css'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProvider';
import useCart from '../../../hook/useCart';
import { useContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
;


const Class = ({ classs }) => {
    const { language, price, displayName, image, photoURL, title, seats, lesson, description, _id } = classs
    const { user } = useContext(AuthContext)
    const [cart, refetch] = useCart();

    useEffect(() => {
        AOS.init({
            duration: 1500, // Set the default animation duration
        });
    }, []);


    const handleAddToCart = classs => {
        console.log(classs)
        if (user && user.email) {
            const addToCart = { classsId: _id, language, instructor: displayName, price, image, email: user.email }
            fetch('https://languages-center-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addToCart)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        toast.success('Add to Cart Successful')
                    }
                })
        }
        else {
            toast.error('Please login to Enrolled the language')
            navigate('/login', { state: { from: location } })
        }
    }
    return (



        <div data-aos="fade-up"
            data-aos-duration="3000" class="cards mx-auto">
            <div class="card-header p-5">
                <img src={image} alt="" />
            </div>
            <div class="users">
                <img className=' border-solid border-2 border-white mt-[-70px] ms-48' src={photoURL} alt="" />
                <div className='pr-16'>
                    <h3 className="text-right text-gray-400 text-sm">{displayName}</h3>
                </div>
            </div>

            <div className='flex justify-between items-center px-5'>
                <div>
                    <div className=' badge bg-[#55d6af]'>{language}</div>
                </div>

                <div>
                    <div className='ms-2 badge badge-secondary '> $ {price} / LifeTime</div>
                </div>
            </div>

            <div class="cards-body px-5">
                <h4 className='text-xl font-semibold mb-4'>{title}</h4>
                <p className="text-gray-500">{description}</p>


                <div className='flex justify-between mt-5'>
                    <div className='flex items-center text-gray-500'>
                        <AiFillPlayCircle className='text-[#55d6af] text-3xl mr-2' />  <h2> {lesson} <span>Lesson</span></h2>
                    </div>
                    <div className='flex items-center text-gray-500'>
                        <FaUsers className='text-white bg-[#55d6af] rounded-full p-1 text-2xl mr-2' />  <h2>{seats} <span>available seat</span></h2>
                    </div>
                </div>
                <hr className=' border-solid border-1 border-gray-200 mt-5' />

                <div className='flex justify-between mt-5'>
                    <div className='flex'>
                        <div className='mr-2'><p>4.9</p>  </div>
                        <div>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={4.9}
                                readOnly
                            />
                        </div>

                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(classs)} className="btn btn-sm bg-[#55d6af]  mb-5 ms-4">
                            <FaShoppingCart className='text-xl' />
                            Add to Cart</button>
                    </div>
                </div>
            </div>


        </div>



    );
};

export default Class;