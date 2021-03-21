import React from 'react';
import ImageGallery from 'react-image-gallery';

import './image-card.styles.css';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
class ImageCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state= {
            images: images
        };
    }

    render() {
        const {images} = this.state;
        return(
           <ImageGallery items={images}/>
        )
    }
}
    

export default ImageCard;