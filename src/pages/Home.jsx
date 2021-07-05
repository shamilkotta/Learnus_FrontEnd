import React from 'react'
import CoursePreview from '../components/Cards/CoursePreview/CoursePreview';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import GuestLayout from '../layouts/GuestLayout';

function Home() {
    return (
        // <div>
        //     <h1>hi</h1>
        //     <Hero/>
        //     <br/>
        //     <CoursePreview/>
        //     <br/>
        //     <Footer/>
        // </div>
        <GuestLayout>
            <Hero/>
            <CoursePreview/>
        </GuestLayout>
    )
}

export default Home
