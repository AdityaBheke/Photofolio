
function AlbumCard(props) {
    const {cardInfo} = props;
    return <div className="album-card" onClick={()=>{props.handleSelect("imagesList", cardInfo)}}>
        <div className="image-container">
            <img src={"https://cdn-icons-png.flaticon.com/128/3342/3342137.png"} alt={cardInfo.title} />
        </div>
        <h3>{cardInfo.title}</h3>
    </div>
}

export default AlbumCard;