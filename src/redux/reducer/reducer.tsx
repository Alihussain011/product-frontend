import data from "../../../Data/products.json"
const productReducer = (state=data,action:any)=>{
    switch(action.type){
        case "ADDPRODUCT":
            state.products.push(action.payload)
            return state;
        case "DELETEPRODUCT" :
                state.products = (state.products.filter((items)=>(items.id!==action.payload)))
            return {...state};
        case "SEARCHPRODUCT":
                state.products = (state.products.filter((items)=>(items.title===action.payload)))
            return {...state};
        case "UPDATEPRODUCT":
                console.log(action.payload);
                state.products = [...(state.products.map((items)=>{
                    if(items.id===action.payload.id){
                        items.title=action.payload.title;
                        items.description=action.payload.description;
                        items.images=action.payload.images;
                    }
                    return items;
                }))]      
            return {...state};
        default : return state;
    }
}
export  {productReducer}