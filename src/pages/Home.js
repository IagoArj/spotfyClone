import { useEffect, useState } from 'react';

import SideMenu from '../components/SideMenu';
import MusicDescription from '../components/MusicDescription';
import MenuMusicCard from '../components/MenuMusicCard';
import RecommendationList from '../components/RecommendationList';
import Player from '../components/Player';

function Home() {
   
   
    return (
        <div className='bg-black flex  flex-col h-screen w-screen overflow-hidden'>
            <div className='flex flex-row '>
                <SideMenu />
                <div className='bg-base rounded-lg   flex flex-col mt-2 mr-3'>
                    <div className='flex flex-col h-[75vh] scrollbar-thin scrollbar-thumb-[#212121] hover:scrollbar-thumb-[#3d3d3d] scrollbar-track-base overflow-auto'>
                        <RecommendationList />
                        <RecommendationList />
                    </div>
                </div>
                <MusicDescription />
            </div>
            <Player/>
        </div>


    )

}

export default Home;
