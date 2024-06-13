const addProduct = (item: {}) => {
    return { type: "ADDPRODUCT", payload: item }
}
const deleteProduct = (item: number) => {
    return { type: "DELETEPRODUCT", payload: item }
}
const searchProduct = (title: string) => {
    return { type: "SEARCHPRODUCT", payload: title }
}
const updateProduct =(data:{}) => {
    return { type: "UPDATEPRODUCT", payload: data }
}
export { addProduct, deleteProduct ,searchProduct,updateProduct};