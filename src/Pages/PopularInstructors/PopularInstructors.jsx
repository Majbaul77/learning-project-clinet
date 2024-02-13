
import './PopularInstructor.css';
import Instructorss from './Instructorss';
import { FaArrowRight } from 'react-icons/fa';
// import { useQuery } from '@tanstack/react-query';
import InstructorUse from '../../hook/InstructorUse';

const PopularInstructors = () => {
    const [users] = InstructorUse()
    const slicedClasses = users.slice(0, 6);


    return (
        <div className='my-28'>
            <h2 className="text-center text-3xl font-bold mb-10">
                Popular <span className="text-[#55d6af]">Instructors</span>
                <div className='w-48 mt-2  mx-auto border-2 border-dotted border-gray-300 '>
                    <hr className='border-gray-300' />
                </div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-8 ">
                {slicedClasses.map((instructor) => (
                    <Instructorss key={instructor._id} instructor={instructor} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn my-8">
                    show more <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PopularInstructors;