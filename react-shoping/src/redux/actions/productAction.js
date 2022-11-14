function getProducts(error, keyword) {
    // getState 현재의 state
    return async(dispatch, getState) => {
        try {
            if (error != '')
                error = '';

            let url = `https://my-json-server.typicode.com/leebee2/Json_DB/products?q=${keyword}`;
            let response = await fetch(url);
            let data = await response.json();

            if (data.length < 1) {
                if (keyword !== "") {
                    error = `${keyword}와 일치하는 상품이 없습니다`;
                } else {
                    throw new Error("결과가 없습니다");
                }
            }
            dispatch({ type: 'GET_PRODUCT_SUCEESS', payload: { data , error} });
        } catch (err) {
            dispatch({ type: 'GET_PRODUCT_ERROR', payload: { error : err.message } });
        }
    };
}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        try {
            let url = `https://my-json-server.typicode.com/leebee2/Json_DB/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();

            dispatch({ type: 'GET_PRODUCTDETAIL', payload: { data } })
        } catch (err) {
            console.log(err);
        }
    }
}

export const productAction = { getProducts, getProductDetail };