import { useEffect, useState } from 'react';
function Player() {
    const [durationMs, setDurationMs] = useState(localStorage.getItem("duration_ms"))
    const [progressMs, setProgress] = useState(localStorage.getItem("progress_ms"))
    let teste = {
        width: "60%"
    }
    ;
   let count = 0;
    useEffect(() => {
        setProgress()
        count = parseInt(progressMs)
        setInterval(function () {
            console.log(count)
            console.log(progressMs)
            setDurationMs(localStorage.getItem("duration_ms"))
            count= count + 1000
            setProgress(count + 1000)
            
        }, 1000);
    }, [])
    return (
        <div className='h-full w-full bg-black flex justify-center items-center'>
            <span></span>
            <div className=" h-fit w-[35%] absolute ">
                <div className="h-1 rounded-lg bg-greenspt" style={teste}></div>
                <div className="w-[100%] h-1 rounded-lg bg-gray-400"></div>
            </div>
            <div className='flex flex-col'>
                <span className="font-bold line-clamp-1 font-DM text-[16px] text-white">{durationMs}</span>
                <span className="font-bold line-clamp-1 font-DM text-[16px] text-white">{progressMs}</span>
            </div>

        </div>
    )
}
export default Player