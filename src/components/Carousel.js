import { useEffect, useState } from "react";

function Carousel(props){
    const [currentIndex, setCurrentIndex] = useState(0);
    const {imagesList, selectedIndex, closeCarousel} = props;
    // const [imagesList, selectedIndex] = [[{title:"abc", src:"abc"},{title:"abcd", src:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"}], 1]

    useEffect(()=>{
        setCurrentIndex(selectedIndex)
    },[selectedIndex])
    function handleNext(){
        if (currentIndex < imagesList.length-1) {
            setCurrentIndex(currentIndex+1)
        } else {
            setCurrentIndex(0)
        }
    }
    function handlePrevious(){
        if (currentIndex>0) {
            setCurrentIndex(currentIndex-1)
        } else {
            setCurrentIndex(imagesList.length-1)
        }
    }
    return <div className="carousel-container">
        <button className="carousel-button close-carousel" onClick={closeCarousel}>X</button>
        <button className="carousel-button" onClick={handlePrevious}>&lt;</button>
        <img className="carousel-image" src={imagesList[currentIndex].src} alt={imagesList[currentIndex].title}/>
        <button className="carousel-button" onClick={handleNext}>&gt;</button>
    </div>
}
export default Carousel;