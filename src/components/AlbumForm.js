import { useRef } from "react";

function AlbumForm(props) {
    const titleRef = useRef(null);
    // Function to handle submit
    function handleSubmit(e){
        e.preventDefault();
        props.addAlbum({title: titleRef.current.value});
        clearForm();
    }
    // Function to clear form
    function clearForm(){
        titleRef.current.value = ""
    }
    return <form className="form" onSubmit={handleSubmit}>
        <label>Create an album</label>
        <input ref={titleRef} placeholder="Album name" required/>
        <div className="button-container">
            <button type="reset" className="button red-fill">Clear</button>
            <button type="submit" className="button blue-fill">Add</button>
        </div>
        
    </form>
}
export default AlbumForm;