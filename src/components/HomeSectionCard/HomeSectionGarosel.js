import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../data/Men/men_kurta';

const HomeSectionGarosel = ({data,sectionName}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 4.5 },
    };

    const slidePre = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };
    const slideNext = () => {
        if (activeIndex < mens_kurta.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    //const slidePre = () => setActiveIndex(activeIndex - 1);
    //const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ index }) => setActiveIndex(index);


    const items = data.slice(0, 10).map((item, index) => <HomeSectionCard key={index} products={item} />)
    return (
        <div className='relative px-4 lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative px-5 '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex > 0 && <button onClick={slidePre} className=" absolute top-1/2 transform -translate-y-1/2  bg-white text-black p-2 shadow-md shadow-gray-900 " sx={{ transform: "translateX(50%) rotate(-90deg)" }}>
                    <KeyboardArrowLeftIcon />
                </button>}

                {activeIndex < mens_kurta.length - 1 && <button onClick={slideNext} className="absolute right-0 top-1/2 transform -translate-y-1/2   bg-white text-black p-2 shadow-md shadow-gray-900 ">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(180deg)" }} />
                </button>}


                {/*<Button variant='contained' className='z-50' sx={{ position: "absolute", top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)" }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(180deg)"}}/>
                </Button>*/}
            </div>
        </div>
    )
}

export default HomeSectionGarosel