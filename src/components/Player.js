function Player() {
    let duration_ms = localStorage.getItem("duration_ms");
    return (
        <div className='h-full w-full bg-black flex justify-center items-center'>
            <span></span>
            <div className=" h-fit w-[35%] absolute ">
                <div className="w-[0%] h-1 rounded-lg bg-greenspt"></div>
                <div className="w-[100%] h-1 rounded-lg bg-gray-400"></div>
            </div>
            <span className="font-bold line-clamp-1 font-DM text-[16px] text-white">{duration_ms}</span>
        </div>
    )
}
export default Player