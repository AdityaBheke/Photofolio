import { useEffect, useState } from "react";
import ImageForm from "./ImageForm";
import ImageCard from "./ImageCard";
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase.config";

function ImageContainer(props) {
    const [imagesList, setImagesList] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        onSnapshot(query(collection(db, 'images'),where("albumId","==", props.album.id)),(snapshot)=>{
            const imageDocs = snapshot.docs.map(doc=>{return {id:doc.id, ...doc.data()}})
            setImagesList(imageDocs);
        })
    },[props.album])

    // Function to toggle addForm
    function toggleForm() {
        setIsFormOpen(!isFormOpen);
        setFormData(null)
    }
    // Function to add Image
    async function addImage(title, src){
        await addDoc(collection(db, 'images'), {title, src, albumId: props.album.id})
    }
    // Function to update Image
    async function updateImage(imageData) {
        await updateDoc(doc(db, 'images', imageData.id), imageData);
        toggleForm();
    }
    // Function to delete Image
    async function deleteImage(id) {
        await deleteDoc(doc(db, "images", id));
    }
    // function to handle onClick of edit button
    function handleUpdate(updateData){
        setIsFormOpen(true);
        setFormData({id: updateData.id, title: updateData.title, src: updateData.src})
    }
    return <div className="container">
    {isFormOpen && <ImageForm addImage={addImage} updateImage={updateImage} formData={formData}/>}
    <div className="header">
        <button>Back</button>
        <h1>Images in {props.album.title}</h1>
        <button className={isFormOpen?"button red-outline":"button blue-outline"} onClick={toggleForm}>{isFormOpen?"Cancel":"Add image"}</button>
    </div>
    <div className="image-card-container">
        {imagesList.map(image=><ImageCard key={image.id} cardInfo={image} handleUpdate={handleUpdate} deleteImage={deleteImage}/>)}
    </div>
    </div>
}
export default ImageContainer;