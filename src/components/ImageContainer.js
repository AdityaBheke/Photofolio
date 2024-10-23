import { useEffect, useState } from "react";
import ImageForm from "./ImageForm";
import ImageCard from "./ImageCard";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

function ImageContainer(props) {
    const [imagesList, setImagesList] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(()=>{
        onSnapshot(query(collection(db, 'images'),where("albumId","==", props.album.id)),(snapshot)=>{
            const imageDocs = snapshot.docs.map(doc=>{return {id:doc.id, ...doc.data()}})
            setImagesList(imageDocs);
        })
    },[props.album])

    // Function to toggle addForm
    function toggleForm() {
        setIsFormOpen(!isFormOpen);
    }
    // Function to add Image
    async function addImage(title, src){
        await addDoc(collection(db, 'images'), {title, src, albumId: props.album.id})
    }
    return <div className="container">
    {isFormOpen && <ImageForm addImage={addImage}/>}
    <div className="header">
        <h1>Images in {props.album.title}</h1>
        <button className={isFormOpen?"button red-outline":"button blue-outline"} onClick={toggleForm}>{isFormOpen?"Cancel":"Add image"}</button>
    </div>
    <div className="card-container">
        {imagesList.map(image=><ImageCard cardInfo={image}/>)}
    </div>
    </div>
}
export default ImageContainer;