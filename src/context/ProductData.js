import { createContext,useState } from "react";

const products = [
        {id:1, name:'Face Cream', qty:1, desc:'A cream to smoothen skin', price: '$2.99'},
        {id:2, name:'Hair Shampoo', qty:2, desc:'Shampoo for your healthy hair', price: '$5.99'},
        {id:3, name:'Hair Conditioner', qty:4, desc:'Conditioner for your hair', price: '$6.99'},
        {id:4, name:'Body Wash', qty:2, desc:'Smotth and silky body wash', price: '$2.99'}
]
    
// consider ProdData to be an empty store
export const ProductData = createContext();
const ProductDataProvider = ({children}) => {
    
    // here we define state which will be accesible throught app 
    // once the app is wrapped with the context provider
    const [productsData, setProductsData] = useState(products);

    return (
        <ProductData.Provider value={{productsData, setProductsData}}>
            {children}
        </ProductData.Provider>
    )
}

export default ProductDataProvider;