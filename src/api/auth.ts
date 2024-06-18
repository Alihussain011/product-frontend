// import { useNavigate }   from "react-router-dom";
import {AUTH} from "../constant/CONSTANT";
import axios from "axios";
import Cookies from 'js-cookie';


const login = async (values: any)=>{ 
    console.log("hy")
    try{
        let res = await axios.post(AUTH.LOGIN,values);
        
        console.log(res);
        Cookies.set("token",res.data);
        window.location.href="/"
        
    }catch(error:any){
        console.log(error.response)
        alert(error.response.data)
    }
}

const signUp= async (values:any)=>{
    try{
        let res = await axios.post("http://localhost:8000/app/registration",values);
        Cookies.set("token",res.data);
        window.location.href="/registration/login";


    }catch(error:any){
        console.log(error.response)
        alert(error.response.data)
    }
}

export {login,signUp}