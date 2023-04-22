import React from 'react';
import Button from "@mui/material/Button";
import {  Box } from "@mui/material";
import { useState } from "react";
import Addproduct from "./Addproduct";
import Productlist from './Productlist';

function Homepage() {
    const [buttonClick, setButtonClick]=useState(false);
  return (
    <Box className='container'>
      <div className='d-flex justify-content-center'>
        <Button variant="contained" color="info" onClick={()=>{setButtonClick(!buttonClick)}}>
          Add Product
        </Button>
      </div>
        {buttonClick ? <Addproduct />: <Productlist />}
    </Box>
  )
}

export default Homepage