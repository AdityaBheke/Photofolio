
function ImageCard(props) {
    const {cardInfo} = props;
    return <div className="album-card">
        <div className="image-container">
            <img src={cardInfo.src} alt={cardInfo.title} />
        </div>
        <h3>{cardInfo.title}</h3>
    </div>
}

export default ImageCard;