import { useEffect, useState } from "react";
import {db} from "../firebase.config";
import { collection, onSnapshot, addDoc } from "firebase/firestore";

import AlbumForm from "./AlbumForm";
import AlbumCard from "./AlbumCard";

function AlbumContainer(props) {
    const [albumsList, setAlbumsList] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // initial fetching of albums data on load
    useEffect(()=>{
        onSnapshot(collection(db, 'albums'),(snapshot)=>{
            const docs = snapshot.docs.map(doc=>{return {id:doc.id, ...doc.data()}});
            setAlbumsList(docs)
        })
    },[])
    // Function to toggle addForm
    function toggleForm() {
        setIsFormOpen(!isFormOpen);
    }
    // Function to add album in firebase
    async function addAlbum(album){
        await addDoc(collection(db, 'albums'), {title: album.title});
        // toggleForm();
    }
    return <div className="container">
    {isFormOpen && <AlbumForm addAlbum={addAlbum}/>}
    <div className="header">
        <h1>Your Albums</h1>
        <button className={isFormOpen?"button red-outline":"button blue-outline"} onClick={toggleForm}>{isFormOpen?"Cancel":"Add album"}</button>
    </div>
    {albumsList.length<=0 && <h1 className="empty-list">You don't have any album</h1>}
    <div className="card-container">
        {albumsList.map(album=><AlbumCard key={album.id} cardInfo={album} handleSelect={props.handleSelect}/>)}
    </div>
    </div>
}
export default AlbumContainer;