import React from 'react'
import CoursePreview from '../components/Cards/CoursePreview/CoursePreview';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import GustLayout from '../layouts/GustLayout';

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
        <GustLayout>
            <Hero/>
            <CoursePreview/>
        </GustLayout>
    )
}

export default Home
