const PhotoCard = ({title, thumbnailUrl, id, onRemove}) => {
    return (
        <div className='PhotoCard'>
            <h2>{id}</h2>
            <img src={thumbnailUrl} />
            <p>{title}</p>
            <button onClick={() => onRemove(id)}>Delete</button>
        </div>
    )
}

export default PhotoCard