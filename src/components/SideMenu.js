import { useEffect, useState } from 'react';
import axios from 'axios';
import homeIcon from '../assets/Home-icon.svg'
import searchIcon from '../assets/Search-icon.svg'

function SideMenu() {
    let params = JSON.parse(localStorage.getItem("userKeys")).data
    const acessToken = params.access_token;

    const [playlists, setPlaylists] = useState()
    const [navMenu, setNavMenu] = useState([{ id: 1, src: homeIcon, name: "Início" }, { id: 2, src: searchIcon, name: "Buscar" }])
    const [menuWidth, setMenuWidth] = useState(300)
    const [minWidth, setMinWidth] = useState(menuWidth-1)
    
    
    const handleRangeChange = (e) => {
        
         
        let diferenca = parseInt(e.target.value) - menuWidth
        if(minWidth<150){
            setMinWidth(150)
        }else{
            if(diferenca>0){
                setMinWidth(menuWidth)
                setMenuWidth(parseInt(menuWidth+1));
                // console.log(">0")
            }
            else{
                setMinWidth(menuWidth-2)
                setMenuWidth(parseInt(menuWidth-1));
                // console.log("<0")
                
            }
        }
        
        
        // console.log(e.target.value)
        // console.log(menuWidth)
        // console.log("DIFERANÇA: " + diferenca)
    
      };

    const getUserplaylist = async () => {
        axios({
            method: "get",
            url: "https://api.spotify.com/v1/me/playlists",
            headers: {
                Authorization: 'Bearer ' + acessToken
            }
        }).then(function (response) {
            console.log(response.data)
            setPlaylists(response.data.items)
        })
    }

    useEffect(() => {
        getUserplaylist()
    }, [])

    return (
        <div className='flex flex-row'>
            <div className="bg-black  h-fit px-3 pt-2 flex flex-col " style={{width:menuWidth}}>
                <nav className="bg-base w-full rounded-lg flex ">
                    <ul className="px-3 py-2">
                        {navMenu.map(nav => {
                            return (
                                <li key={nav.id} className="py-1 px-3">
                                    <a className="flex flex-row h-10 items-center gap-5 cursor-pointer hover:text-white text-whitespt" >
                                        <img src={nav.src} className=" w-6 h-6  " />
                                        <span className="  font-bold font-DM text-[16px]  ">{nav.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <nav className="h-[75vh] bg-base w-full rounded-lg overflow-auto  scrollbar-thin scrollbar-thumb-[#212121] hover:scrollbar-thumb-[#3d3d3d] scrollbar-track-base mt-3 ">
                    <ul className="px-3 py-2 ">
                        {playlists?.map(item => {
                            return (
                                <li key={item.id} className='py-4 px-3 flex flex-row items-center   cursor-pointer hover:bg-base-high rounded-lg'>
                                   {item.images ? (<img src={item.images[0].url} className='h-12 w-12 mr-3 rounded-md' />):(<div className='h-12 w-12 mr-3 rounded-md bg-black' />)}
                                    <div className='flex flex-col '>
                                        <span className='font-bold line-clamp-1 font-DM text-[16px] text-white ' >{item.name}</span>
                                        <span className='font-DM line-clamp-1 text=[12px] text-whitespt'>{item.type} • {item.owner.display_name}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </div >
            <div className='h-full  w-2 left-[-4.5px]  ' onChange={handleRangeChange}>
                <label className='overflow-hidden h-[1px] border-[0px] w-[1px] ' >
                    <input id='inputSideMenu'   className='h-full cursor-col-resize' type='range'  min={minWidth} max={520} value={menuWidth}  />
                </label>
            </div>
        </div>

    )
}
export default SideMenu