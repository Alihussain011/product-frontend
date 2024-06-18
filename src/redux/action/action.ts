import { deleteProductApi, showProductsApi, updateProductApi } from "../../api/product";
import { addProductApi } from "../../api/product";
import store from "../store/store";

const getProducts = async () => {
    let products = await showProductsApi();
    if(products)   return { type: "GETPRODUCTS", payload: products};
    //id data not found cause of system error
    alert("Cause of system error products not fetch")
    return { type: "GETPRODUCTS", payload: [] };
};

const addProduct = (item: {}) => {
    addProductApi(item).then().catch(console.error);
    return { type: "ADDPRODUCT", payload: item }
};

const deleteProduct = (item: number) => {
    deleteProductApi(item).then().catch(console.error);
    return { type: "DELETEPRODUCT", payload: item }
};

const searchProduct = (title: string) => {
    return { type: "SEARCHPRODUCT", payload: title }
};

const updateProduct = (item: {}) => {
    updateProductApi(item).then().catch(console.error);
    return { type: "UPDATEPRODUCT", payload: item }
};

const reload = async () => {
    store.dispatch(await getProducts());
};

export { getProducts, addProduct, deleteProduct, searchProduct, updateProduct, reload };


