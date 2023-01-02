import axios from 'axios'
import { useEffect, useState } from 'react'
import PhotoCard from './PhotoCard'
import Spinner from './Spinner'

const APICalls = () => {

    const [photos, setPhotos] = useState([])
    const [photoLoading, setPhotoLoading] = useState(false)

    // Call API
    useEffect(()=>{
        setPhotoLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            setPhotos(res.data.splice(0,6))// limit result to only 6 pictures
            setPhotoLoading(false)
        }).catch((error) => {
            setPhotoLoading(false)
            console.error(error)
        })
    }, [])

    const handleRemove = (id) => {
        // Example of how to handle deletion on API
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`).then((res) => {
            if(res.status == 200) alert('Deleted!')
        })
    }

    return (
        <div className='PhotoCardList'>
            {
                photoLoading && <Spinner />
            }
            {
                photos.map((item) => (
                    <PhotoCard key={item.id} {...item} onRemove={handleRemove} />
                ))
            }
        </div>
    )
}

export default APICalls