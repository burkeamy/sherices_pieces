import React from 'react';
import ImageCard from '../../components/image-card/image-card.component';
import TextCard from '../../components/text-card/text-card.component';

import './homepage2.styles.css';

const HomePage2 = () => (
    <div className = 'homepage2'>
        <ImageCard />
        <div className='main-area'>
            <h2>Home Page</h2>
            <p>The idea for this page is a scrolling picture bar at the top and space below here for 
                testimonials or product highlights.
            </p>
        </div>
        <div className='text-columns'>
            <TextCard />
            <TextCard />
            <TextCard />
        </div>
    </div>
);

export default HomePage2;