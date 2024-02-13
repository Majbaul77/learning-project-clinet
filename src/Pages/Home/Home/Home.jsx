import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import { Helmet } from 'react-helmet-async';
import LearnNew from '../LearnNew/LearnNew';
import JoinUs from '../Banner/JoinUs';
import ContactNow from '../../ContactNow/ContactNow';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language Center | Home</title>

            </Helmet>
            <Banner></Banner>
            <LearnNew></LearnNew>
            
            <PopularClasses></PopularClasses>
            <JoinUs></JoinUs>
            <PopularInstructors></PopularInstructors>
            <ContactNow></ContactNow>
        </div>
    );
};

export default Home