import React from 'react'
import { FaSearch } from "react-icons/fa";
import './comstyle/searchbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useMemo } from 'react';
import { useContext } from 'react';
import  {Allproduct}  from '../contextApi/ProductFetch';

export default function Searchbar() {
  let suggestName=useContext(Allproduct);
  let[searchstyle,setSearchstyle]=useState("searchsuggestionNon")
  let [inputQuery,setInputQuery]=useState('');
  let handleSubmit=(ele)=>{
    ele.preventDefault();
  }
  let handleSearch=(ele)=>{
    // console.log("user click on search");
    let inputQue=ele.target.value;
    setInputQuery(inputQue);
  }

  let showSuggest=useMemo(()=>suggestName.filter((item)=>item.proName.toLowerCase().includes(inputQuery.toLocaleLowerCase())));
  let miniShowSuggest=showSuggest.slice(0,10);
  let searchSuggClass=["searchsuggestionNon"];
  // if(inputQuery.length===0){
  //   searchSuggClass.push("searchsuggestionNon")
  // }
  let handlefocus=()=>{
    setSearchstyle('searchsuggestion');
  }
  let handleBlur=()=>{
    setTimeout(()=>{
      setSearchstyle("searchsuggestionNon");
    },100)
   
  }
  return (
    <>
     <form onSubmit={handleSubmit}>
      <div className="searchcontainer">
     
        <div className="searchbox">
        
        <input type="search" className='inputfill'
        autoComplete='off'
        placeholder='search...'
        name='search'
        onChange={handleSearch}
        onFocus={handlefocus}
        onBlur={handleBlur}/>
        <button type='onsubmit'className='searchicon' > <span ><FaSearch/></span></button>
       
        </div>
    
        <div className={searchstyle}>
               <ul className='searchbarul'>
               {
                (inputQuery.length>1)?( miniShowSuggest.map((item)=>{
                  return(
                    <li className='searchli' key={item.id}>
                    <Link to={`/singlepage/${item.proName}`} className='searchlink'>{item.proName}</Link>
                 </li>
                  )
                })):null
                
               }
             </ul>
        </div>
      </div>
      </form>
    </>
  )
}
