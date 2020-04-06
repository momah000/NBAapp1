import React from 'react';
import { Link } from 'react-router-dom'

import Slick from 'react-slick';
import './slider.css';

const SliderTemplates = (props) => {

    let template = null;
///for the slides
    const settings = {
        dots:true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        ...props.settings//passses props
    }
//remember to vhange styles
    switch(props.type){
        case ('featured'):
            template = props.data.map( (item,i) =>{
                return(
                    <div key={i}>
                       <div className='featured_item'>
                            <div className='featured_image'
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className='featured_caption'>
                                    {item.title}
                                </div>
                            </Link>
                       </div>
                    </div>
                )
            })
            break;
        default:
            template = null;

    }


//slick slider
//vslues are passed from settings
    return(
        <Slick {...settings} >
            {template}
        </Slick>
    )
}

export default SliderTemplates;