function MenuMusicCard(props) {
    return (
        <div className="flex flex-col bg-transparent cursor-pointer rounded-lg p-3 hover:bg-[#f6f6f608] ">
            <img className="rounded-lg" src={props.image} />
            <div className="mt-1">
                <span className="font-bold line-clamp-1 font-DM text-[16px] text-white">{props.artistName}</span>
                <span className="font-DM line-clamp-1 text=[12px] text-whitespt">teste meu chapa fjao isjofijaosijofij</span>
            </div>

        </div>
    );
} export default MenuMusicCard