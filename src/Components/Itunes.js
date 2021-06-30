import React from 'react'
import { useState, useEffect } from 'react'
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import Loader from './Loader';

const Itunes = ({ search }) => {

    const [music, setMusic] = useState({});
    const [loading, setLoading] = useState(false);


    const getData = () => {
        setLoading(true);
        fetch(`https://itunes.apple.com/search?term=${search}`)
            .then(res => res.json())
            .then(data => {
                setMusic(data);
                console.log(data);
            }).finally(() => setLoading(false));

    }
    useEffect(() => {
       
            getData()

        
        

    }, [search]);
    
    return (
        <div className='itunes'>
            <Loader isLoading={loading}>
                {(typeof music.results != 'undefined') ? (
                    <ul >
                        {music.results.map((el, index) => {
                            return (
                                <div className='container' key={index}>
                                    <div className='member' >
                                        <div><img src={el.artworkUrl100} alt='ff' /></div>
                                        <h4>{el.artistName}</h4>
                                        <AudioPlayer
                                            src={el.previewUrl}
                                            controls
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                ) : (' ')}
            </Loader>
        </div>
    )
}

export default Itunes
