import axios from "axios";
import { redirect } from "react-router-dom";
import { useEffect } from "react";

function Callback(){
    useEffect(() => {
        const params = new URLSearchParams(document.location.search)
        const code = params.get('code') 
        let clientID = "07147cab94cb4f1e931c4ddd0f78789b";
        let clientSecret = "f17087493aef4ab0ad0e6820c9475075"
        const redirectURI = "http://localhost:3000/callback";

        let body = {
            code,
            redirect_uri: redirectURI,
            grant_type: "authorization_code"
        }

        axios({
            method: "POST",
            url: "https://accounts.spotify.com/api/token",
            data: new URLSearchParams(Object.entries(body)).toString(),
            headers: {
                Authorization: "Basic " + btoa(clientID + ':' + clientSecret),
                'content-type': 'application/x-www-form-urlencoded'

            }
        }).then(function (response) {
            console.log(response)
            localStorage.setItem("userKeys",JSON.stringify(response))
            window.location.href="http://localhost:3000/home"
        }).catch(function (error) {
            console.log(error);
        })
    }, []);
    return(
        <div></div>
    )
}
export default Callback;