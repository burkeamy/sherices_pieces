import React from 'react';

import './image-card.styles.css';

const catData = [
    { 
        id: 1,
        imageUrl: 'https://i.pinimg.com/originals/83/83/d9/8383d90b03fbefa450fa87af0ae24058.jpg',
        title: 'cat'
    }, 
    {
        id: 2,
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.757xh;0,0&resize=1200:*',
        title: 'kitten'
    },
    {
        id: 3,
        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FW-PBFMECvTE%2Fmaxresdefault.jpg&f=1&nofb=1',
        title: 'kitten in my pants'
    }
]
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state= {
            images: catData
        };
    }

    render() {
        const {images} = this.state;
        return(
            <div className='image-card'>
                {
                    images.map(({ id, imageUrl, title }) => ( 
                    <img key={id} src={imageUrl} alt={title} />
                    ))
                }
            </div>
        )
    }
}
    
    
export default ImageCard;