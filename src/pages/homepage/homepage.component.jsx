import React from 'react';
import TextCard from '../../components/text-card/text-card.component';

import './homepage.styles.css'

const HomePage = () => (
    <div className ='homepage'>
        <div className='parallax'></div>
            <div className = 'inner-section'>
                 <h2>homepage</h2>
                <p>This page has parallax scrolling. Scroll to the bottom to get 
                    the full affect. The image can be what ever shows your business 
                    best and can easily be changed
                </p>
            </div>
            <div className='text-columns'>
                <TextCard />
                <TextCard />
                <TextCard />
        </div>
        <div className='parallax'></div>
    </div>
);

export default HomePage;