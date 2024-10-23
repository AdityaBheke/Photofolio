import { useRef } from "react";

function ImageForm(props){
    const titleRef = useRef(null);
    const urlRef = useRef(null);
    function handleSubmit(e){
        e.preventDefault();
        props.addImage(titleRef.current.value, urlRef.current.value);
        clearForm();
    }
    function clearForm(){
        titleRef.current.value = "";
        urlRef.current.value = "";
    }
    return <form className="form" onSubmit={handleSubmit}>
    <label>Add an Image</label>
    <input ref={titleRef} placeholder="Image name" required/>
    <input ref={urlRef} placeholder="Image Url" required/>
    <div className="button-container">
        <button type="reset" className="button red-fill">Clear</button>
        <button type="submit" className="button blue-fill">Add</button>
    </div>
    
</form>
}
export default ImageForm;