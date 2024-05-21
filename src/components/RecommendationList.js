import axios from 'axios';
import { useEffect, useState } from 'react';
import MenuMusicCard from '../components/MenuMusicCard';

function RecommendationList() {
    const [topArtists, setTopArtists] = useState()
    let params = JSON.parse(localStorage.getItem("userKeys")).data
    const acessToken = params.access_token;

    useEffect(() => {
        async function myTopArtists() {
            try {
                const response = await axios({
                    method: "get",
                    url: "https://api.spotify.com/v1/me/top/artists?time_range=medium_term",
                    headers: {
                        Authorization: 'Bearer ' + acessToken,

                    }
                })
                setTopArtists(response.data.items)
                console.log(response.data.items)

            } catch (err) {
                console.log(err)
            }

        }
        myTopArtists();
    }, [])

    return (
        <div className='flex flex-col p-2 '>
            <span className='font-DM text-white font-bold line-clamp-1 text-[28px] pl-2'>Artistas mais escutados</span>
            <div className='flex flex-nowrap '>
                {topArtists?.slice(0, 6).map(artist => {
                    return (<MenuMusicCard artistName={artist.name} image={artist.images[0].url} />)
                })}
            </div>
        </div>
    )
}
export default RecommendationList;