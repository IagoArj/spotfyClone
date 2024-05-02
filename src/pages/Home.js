import { useEffect, useState } from 'react';
import axios from 'axios';
import SideMenu from '../components/SideMenu';
import MusicDescription from '../components/MusicDescription';

function Home() {
    


    return (
        <div className='bg-black flex  flex-col h-screen w-screen overflow-hidden'>
            <div className='flex flex-row '>
                <SideMenu />
                <div className='bg-base rounded-lg flex grow  h-auto mt-2 mr-3'>
                </div>
                <MusicDescription />
            </div>
        </div>


    )

}

export default Home;
