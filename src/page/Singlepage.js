import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import {Allproduct} from '../contextApi/ProductFetch'
import Single from '../compnonet/Single';
import Productsuggestion from '../compnonet/Productsuggestion';

export default function Singlepage() {
  let {proid}=useParams();
  // console.log(proid);
  let productlist=useContext(Allproduct);
  let matchproduct=productlist.filter((product)=>(product.proName==proid));
  let[{id,category}]=matchproduct;
  return (
    <>
      <Single id={id}/>
      <Productsuggestion category={category} id={id}/>
    </>
  )
}
