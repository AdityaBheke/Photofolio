import { useEffect, useState } from "react";
import ImageForm from "./ImageForm";
import ImageCard from "./ImageCard";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase.config";
import Carousel from "./Carousel";

function ImageContainer(props) {
    const [imagesList, setImagesList] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const {album, handleBack} = props;

    useEffect(()=>{
        onSnapshot(query(collection(db, 'images'),where("albumId","==", album.id)),(snapshot)=>{
            const imageDocs = snapshot.docs.map(doc=>{return {id:doc.id, ...doc.data()}})
            setImagesList(imageDocs);
        })
    },[album])

    // Function to toggle addForm
    function toggleForm() {
        setIsFormOpen(!isFormOpen);
        setFormData(null)
    }
    // Function to add Image
    async function addImage(title, src){
        await addDoc(collection(db, 'images'), {title, src, albumId: album.id})
    }
    // Function to update Image
    async function updateImage(imageData) {
        await updateDoc(doc(db, 'images', imageData.id), imageData);
        toggleForm();
    }
    // Function to delete Image
    async function deleteImage(e, id) {
        e.stopPropagation();
        await deleteDoc(doc(db, "images", id));
    }
    // function to handle onClick of edit button
    function handleUpdate(e, updateData){
        e.stopPropagation();
        setIsFormOpen(true);
        setFormData({id: updateData.id, title: updateData.title, src: updateData.src})
    }
    // function to handle selection of image
    function handleSelect(index) {
        setSelectedIndex(index);
    }
    // function to close carousel
    function closeCarousel() {
        setSelectedIndex(-1);
    }
    return <div className="container">
    {isFormOpen && <ImageForm addImage={addImage} updateImage={updateImage} formData={formData}/>}
    <div className="header">
        <button className="back-button" onClick={handleBack}><img src="https://cdn-icons-png.flaticon.com/128/2099/2099238.png" alt="back"/></button>
        <h1>{album.title}</h1>
        <button className={isFormOpen?"button red-outline":"button blue-outline"} onClick={toggleForm}>{isFormOpen?"Cancel":"Add image"}</button>
    </div>
    {imagesList.length<=0 && <h1 className="empty-list">No Images found in {album.title}</h1>}
    <div className="image-card-container">
        {imagesList.map((image,index)=><ImageCard key={image.id} cardInfo={image} index={index} handleSelect={handleSelect} handleUpdate={handleUpdate} deleteImage={deleteImage}/>)}
    </div>
    {selectedIndex>=0 && <Carousel imagesList={imagesList} selectedIndex={selectedIndex} closeCarousel={closeCarousel}/>}
    </div>
}
export default ImageContainer;