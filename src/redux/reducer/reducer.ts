// import data from "../../../Data/products.json"
// interface Product{
//     products:[
//     ]
// }

const initialValue: any = {
    products: []
}
const productReducer = (state = initialValue, action: any) => {
    
    switch (action.type) {
        case "GETPRODUCTS":
            state.products = [...action.payload];
            return { ...state };
        case "ADDPRODUCT":
            state.products.push(action.payload);
            return { ...state };
        case "DELETEPRODUCT":
            state.products = (state.products.filter((items: any) => (items.id !== action.payload)))
            return { ...state };
        case "SEARCHPRODUCT":
            state.products = (state.products.filter((items: any) => (items.title === action.payload)))
            return { ...state };
        case "UPDATEPRODUCT":
            state.products = [...(state.products.map((items: any) => {
                if (items && items.id === action.payload.id) {
                    items.title = action.payload.title;
                    items.description = action.payload.description;
                    items.thumbnail = action.payload.thumbnail;
                }
                return items;
            }))]
            return { ...state };
        default: return state;
    }
}
export { productReducer }