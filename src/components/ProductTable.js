import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductData } from "../context/ProductData";
import AddProduct from "./AddProduct";
import { useState } from "react";

import SignupLogin from "./SignupLogin";

export default function ProductTable() {
  const [showAddComponent, setShowAddComponent] = useState(false);
      
  const { productsData, setProductsData } = React.useContext(ProductData);
  
  const [currentProduct, setCurrentProduct] = useState({
    id: 0,
    name:'',
    qty: '',
    desc:'',
    price:''
  });
  // console.log(productsData);

  const productEditHandler = (product) => {
    setShowAddComponent(true);
    console.log(product);
    setCurrentProduct(product);
  }

  const deleteHandler = (product) => {
    console.log('Deleting ', product);
    const updatedProducts = productsData.filter((p) => p.id !== product.id);
    console.log(updatedProducts);
    setProductsData(updatedProducts);
    
  }
  
  return (
    <>
    {showAddComponent ? (
        <AddProduct data={currentProduct}/>
      ) : (
        <>
          <div>
            <button onClick={() => setShowAddComponent(true)}>Add Product</button>  
          </div>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Product Id</TableCell>
                  <TableCell align="right">Qty</TableCell>
                  <TableCell align="right">Description&nbsp;(g)</TableCell>
                  <TableCell align="right">Price&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {productsData.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell align="right">{product.id}</TableCell>
                    <TableCell align="right">{product.qty}</TableCell>
                    <TableCell align="right">{product.desc}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                    <button onClick={() => productEditHandler(product)}>
                      Edit
                    </button>
                    <button onClick={() => deleteHandler(product)}>Delete</button>
                    {/* {showAddComponent ? <AddProduct/> :} */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>

  );
}
