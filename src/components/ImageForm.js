import { useEffect, useRef } from "react";

function ImageForm(props){
    const titleRef = useRef(null);
    const urlRef = useRef(null);
    const {formData, addImage, updateImage} = props;
    useEffect(()=>{
        if (formData) {
            titleRef.current.value = formData.title
            urlRef.current.value = formData.src
        }
    },[formData])
    function handleSubmit(e){
        e.preventDefault();
        if (formData) {
            updateImage({id:formData.id, title: titleRef.current.value, src: urlRef.current.value})
        }else{
            addImage(titleRef.current.value, urlRef.current.value);
        }
        clearForm();
    }
    function clearForm(){
        titleRef.current.value = "";
        urlRef.current.value = "";
    }
    return <form className="form" onSubmit={handleSubmit}>
    <label>{formData?"Update":"Add"} an Image</label>
    <input ref={titleRef} placeholder="Image name" required/>
    <input ref={urlRef} placeholder="Image Url" required/>
    <div className="button-container">
        <button type="reset" className="button red-fill">Clear</button>
        <button type="submit" className="button blue-fill">{formData?"Update":"Add"}</button>
    </div>
    
</form>
}
export default ImageForm;