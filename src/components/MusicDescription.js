import { useEffect, useState } from 'react';
import axios from 'axios';

function MusicDescription() {
    let params = JSON.parse(localStorage.getItem("userKeys")).data
    const acessToken = params.access_token;
    const [currentlyPlaying, setCurrentlyPlaying] = useState()
    const [artistTopMusic, setArtistTopMusic] = useState([])




    useEffect(() => {
        async function getCurrentlyPlaying() {
            try {
                const response = await axios({
                    method: "get",
                    url: "https://api.spotify.com/v1/me/player/currently-playing",
                    headers: {
                        Authorization: 'Bearer ' + acessToken
                    }
                })
                if(response.data.currently_playing_type == "track"){
                    setCurrentlyPlaying(response.data)
                    topArtistsTracks(response.data.item.artists[0].id);
                }
                
            } catch (err) {
                console.log(err)
            }

        }

        async function topArtistsTracks(artistId) {
            try {
                const response = await axios({
                    method: "get",
                    url: "https://api.spotify.com/v1/artists/" + artistId + "/top-tracks?market=BR",
                    headers: {
                        Authorization: 'Bearer ' + acessToken
                    }
                })
                setArtistTopMusic(response.data.tracks)
                console.log(response.data.tracks)
            } catch (err) {
                console.log(err)
            }

        }




        getCurrentlyPlaying();
        

    }, [])

    return (
        <div className='bg-base rounded-lg w-[16vw] h-auto mt-2 mr-3 overflow-auto'>
            <div className='flex flex-col px-3 pt-4 '>
                {currentlyPlaying ? (
                    <div>
                        <img className='rounded-lg cursor-pointer' src={currentlyPlaying.item.album.images[0].url} />
                        <div className='flex flex-row'>
                            <div className='flex flex-col '>
                                <span className='font-DM text-white font-bold line-clamp-1 text-[32px] cursor-pointer hover:underline'>{currentlyPlaying?.item.name}</span>
                                <span className='font-DM text-whitespt text-[16px] line-clamp-1 cursor-pointer hover:text-white hover:underline' >{currentlyPlaying?.item.album.artists[0].name}</span>
                            </div>
                        </div>
                    </div>
                ) :
                    <div>
                        <div className='rounded-lg cursor-pointer w-[256px] h-[256px] bg-black' />
                        <div className='flex flex-row'>
                            <div className='flex flex-col '>
                                <span className='font-DM text-white font-bold line-clamp-1 text-[32px] cursor-pointer hover:underline'>...</span>
                                <span className='font-DM text-whitespt text-[16px] line-clamp-1 cursor-pointer hover:text-white hover:underline' >...</span>
                            </div>
                        </div>
                    </div>}

            </div>
            <div className=' px-3 mt-4 font-DM text-white font-bold text-[24px] cursor-default'>Mais tocadas</div>
            <nav className='px-2 py-3 overflow-auto h-72  scrollbar-thin scrollbar-thumb-[#212121] hover:scrollbar-thumb-[#3d3d3d] scrollbar-track-base mt-3'>
                <ul className='cursor-pointer'>
                    {artistTopMusic?.map( music => {
                        return (
                            <li className="py-4 px-3  rounded-lg flex  hover:bg-base-high">
                                <img className='w-14 h-14 bg-white rounded-lg mr-3' src={music.album.images[0].url} />
                                <div className='flex flex-col'>
                                    <span className='font-DM text-white font-bold line-clamp-1'>{music.name}</span>
                                    <span className='font-DM text-whitespt line-clamp-1'>{music.album.name}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div>

            </div>
        </div>
    )
}
export default MusicDescription;