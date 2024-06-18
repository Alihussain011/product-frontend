// import { useNavigate }   from "react-router-dom";
import {PRODUCT} from "../constant/CONSTANT";
import axios from "axios";
// import Cookies from 'js-cookie';

// const navigate = useNavigate();    

const showProductsApi = async ()=>{ 
    try{
        let res = await axios.get(PRODUCT.SHOWPRODUCTS);
        
        console.log(res);
        return res.data;
        // Cookies.set("token",res.data);
        // // navigate("/");
        // window.location.href="/"
        
    }catch(error:any){
        console.log(error.response);
    }
}

const addProductApi = async (data:{})=>{ 
    try{
        let res = await axios.post(PRODUCT.ADDPRODUCT,data);   
        console.log(res);
        
    }catch(error:any){
        console.log(error.response)
    }
}

const updateProductApi = async (data:{})=>{ 
    try{
        let res = await axios.put(PRODUCT.DELETEPRODUCT,data);   
        console.log(res);
        
    }catch(error:any){
        console.log(error.response)
    }
}
const deleteProductApi = async (data:{})=>{ 
    try{
        let res = await axios.delete(PRODUCT.DELETEPRODUCT+"/"+data);   
        console.log(res);
        
    }catch(error:any){
        console.log(error.response)
    }
}
// const signUp= async (values:any)=>{
//     // const navigate = useNavigate();    

//     try{
//         let res = await axios.post("http://localhost:8000/app/registration",values);
//         Cookies.set("token",res.data);
//         // navigate("/registration/login");
//         window.location.href="/registration/login";


//     }catch(error:any){
//         console.log(error.response)
//         alert(error.response.data)
//     }
// }

export {showProductsApi,addProductApi,updateProductApi,deleteProductApi}