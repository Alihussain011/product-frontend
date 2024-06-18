const BASEURL = "http://localhost:8000/app";

const PRODUCT = {
    ADDPRODUCT: `${BASEURL}/products`,
    UPDATEPRODUCT: `${BASEURL}/products`,
    DELETEPRODUCT: `${BASEURL}/products`,
    SHOWPRODUCTS: `${BASEURL}/products`
};

const AUTH ={
    REGISTRATION:`${BASEURL}/registration`,
    LOGIN:`${BASEURL}/login`
}

export {PRODUCT,AUTH};