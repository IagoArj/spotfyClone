import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../components/SideMenu';
import MusicDescription from '../components/MusicDescription';
import MenuMusicCard from '../components/MenuMusicCard';

function Home() {
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
        <div className='bg-black flex  flex-col h-screen w-screen overflow-hidden'>
            <div className='flex flex-row '>
                <SideMenu />
                <div className='bg-base rounded-lg flex   h-auto mt-2 mr-3'>
                    <div>
                        <div className='flex flex-nowrap '>
                            {topArtists?.slice(0,6).map(artist => {
                                return (<MenuMusicCard artistName={artist.name} image={artist.images[0].url} />)
                            })}
                        </div></div>
                </div>
                <MusicDescription  />
            </div>
        </div>


    )

}

export default Home;
