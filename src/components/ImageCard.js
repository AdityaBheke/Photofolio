import { useEffect, useState } from "react";

function ImageCard(props) {
    const [imageUrl, setImageUrl] = useState("https://cdn-icons-png.flaticon.com/128/159/159469.png")
    const {cardInfo, handleUpdate, deleteImage} = props;

    useEffect(()=>{
        isValidImage(cardInfo.src)
    },[cardInfo])

    // Check if image url is valid or not
    async function isValidImage(url){
        return new Promise((resolve, reject)=>{
            const image = new Image();
            image.onload = function(){
                setImageUrl(url)
            }
            image.onerror = function(){
                setImageUrl("https://cdn-icons-png.flaticon.com/128/159/159469.png")
            }
            image.src = url;
        })
    }

    return <div className="image-card">
        <div className="action-buttons">
            <button onClick={()=>{handleUpdate(cardInfo)}}><img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="edit"/></button>
            <button onClick={()=>{deleteImage(cardInfo.id)}}><img src="https://cdn-icons-png.flaticon.com/128/9790/9790368.png" alt="delete"/></button>
        </div>
        <div className="image-thumbnail">
            <img src={imageUrl} alt={cardInfo.title} />
        </div>
        <h3>{cardInfo.title}</h3>
    </div>
}

export default ImageCard;