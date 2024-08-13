import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { ProductData } from '../context/ProductData';
import ProductTable from './ProductTable';


const AddProduct = ({data}) => {
    const {productsData, setProductsData} = useContext(ProductData);
    const [showProductTable, setShowProductTable] = useState(false);

    const [product, setProduct] = useState(data);

    const handleChange = (event) => {
        //will handle the changes in input field
        // and will store those changes in the productData state.
        // console.log(event.target.name);     
        setProduct((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }))          
    }

    const submitData = () => {
        const updatedProductObject = {...product, id: productsData.length+1};
        // console.log(updatedProductObject);
        const matchedProduct = productsData.find((obj) => obj.id === data.id);
        if(matchedProduct){
            const updatedObj = productsData.map((p)=> p.id===data.id ? product : p)            
            setProductsData(updatedObj)
        }else(
           setProductsData((prevState) => ([
            ...prevState,
            updatedProductObject
            ])) 
        )
        setShowProductTable(true);
    }
    // console.log('products data of context', productsData);
    return(
        <div>        
            {showProductTable ? <ProductTable /> : <div>
                
                    <TextField id="standard-basic" label="Product Name" variant="standard" value={product.name} name="name" onChange={handleChange} />          
                    <TextField id="standard-basic" label="Product QTY" variant="standard" value={product.qty} name='qty' onChange={handleChange}/>
                    <TextField id="standard-basic" label="Product Description" variant="standard" value={product.desc} name="desc" onChange={handleChange}/>
                    <TextField id="standard-basic" label="Product Price" variant="standard" value={product.price} name="price" onChange={handleChange}/>
                    {/* when user click on add button all the entered data should be sent back 
                    to the Product Table to be displayed */}
                    <button onClick={submitData}>Add</button> 
                </div>}
        </div>
    )
}

export default AddProduct;