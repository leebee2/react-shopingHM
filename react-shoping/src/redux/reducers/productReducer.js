const initialState = { 
    productList: [],
    productDetail: {},
    producList_ErrorMSG: '',
}

function productReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "GET_PRODUCT_SUCEESS":
            return {
                ...state,
                productList: payload.data,
                producList_ErrorMSG: payload.error,
                productDetail : {},
            }
        case "GET_PRODUCTDETAIL":
            return { ...state, productDetail: payload.data }
        default:
            return { ...state }
    }
}

 
export default productReducer;
