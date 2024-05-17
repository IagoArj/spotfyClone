import rapaz from '../assets/login-rapaz-img.png';
import logo from '../assets/Spotify-logo.svg';

function Login() {
    return (
        <div className=" flex flex-row min-h-screen " >
            <div className="w-2/5 bg-greenspt flex ">
                <div className="   flex  flex-col items-center justify-between ">
                    <div className="w-4/5 mt-16">
                        <p className=" text-white text-7xl font-DM font-bold text-left ">Entre agora para começar a curtir suas músicas preferidas.</p>
                    </div>

                    <img src={rapaz} alt='Homem escutando Música' className='h-[567px]' />
                </div>
            </div>
            <div className="w-3/5 bg-blackspt">
                <div className='flex justify-center flex-col items-center'>
                    <img src={logo} alt='Logo Spotfy' className='w-[65%] mt-60' />
                    <button onClick={redirectSpotfy} className='bg-greenspt hover:bg-green-700 text-black hover:text-white mt-24  w-80 h-20 rounded-full'>
                        <text className=' font-DM font-bold text-4xl'>Entrar</text>
                    </button>
                </div>
            </div>
        </div>
    );
}
function redirectSpotfy() {

    let clientID = '07147cab94cb4f1e931c4ddd0f78789b';
    let scopes = 'user-read-email user-read-recently-played user-read-private user-top-read user-read-currently-playing playlist-modify-public playlist-modify-private playlist-read-private';
    let redirectURI = 'http://localhost:3000/callback';
    
    
    window.location.href ='https://accounts.spotify.com/authorize?client_id=' +  clientID  + '&response_type=code&redirect_uri=' +  redirectURI  + '&scope=' +  scopes ;
}
export default Login;
