import React, { useState } from 'react';
import { Button } from '@mui/material';
import EditProduct from './EditProduct';


function Productlist() {
  const [route, setRoute]=useState(false)
  const routeToEditPage=()=>{
    setRoute(true)
  }
  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={routeToEditPage}>
        Edit Product
      </Button>
      {route? <EditProduct/> : null}
    </div>

  )
}

export default Productlist