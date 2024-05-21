import { useEffect, useState } from 'react';

import SideMenu from '../components/SideMenu';
import MusicDescription from '../components/MusicDescription';
import MenuMusicCard from '../components/MenuMusicCard';
import RecommendationList from '../components/RecommendationList';

function Home() {
   
   
    return (
        <div className='bg-black flex  flex-col h-screen w-screen overflow-hidden'>
            <div className='flex flex-row '>
                <SideMenu />
                <div className='bg-base rounded-lg flex   h-auto mt-2 mr-3'>
                    <div>
                        <RecommendationList />
                    </div>
                </div>
                <MusicDescription />
            </div>
        </div>


    )

}

export default Home;
