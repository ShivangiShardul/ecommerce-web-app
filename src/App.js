import logo from './logo.svg';
import './App.css';
import Category from './Category';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let [finalCat,setFinalCat]=useState([])
  let [finalPro,setFinalPro]=useState([])
  let [catName,setcatName]=useState('')

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalResponse)=>{
      setFinalCat(finalResponse)
    })
  }

  let getProducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalResponse)=>{
      setFinalPro(finalResponse.products)
    })
  }

  useEffect(()=>{
    getCategory();
    getProducts();
  },[])

  useEffect(()=>{

    if(catName!==""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
     .then((proRes)=>proRes.data)
     .then((finalResponse)=>{
      setFinalPro(finalResponse.products)
    })
      // console.log(catName)
    }
    
  },[catName])

  let pitems = finalPro.map((products,index)=>{
    return(
      <ProductItems key={index} pdata={products}/>
    )
  })

  return (
    <>
      <div className='py-[30px]'>
        <div className='max-w-[1000px] mx-auto'>
          <h1 className='text-center text-[30px] font-bold mb-[20px]'>Our Product</h1>
          <div className='grid grid-cols-[25%_auto] gap-[15px]'>
            <div>
              <Category finalCat={finalCat} setcatName={setcatName}/>
            </div>

            <div>
              <div className='grid grid-cols-3 gap-5'>
                
                {
                
                finalPro.length>=1 ?
                pitems
                :

                'No Product Found'
              
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({pdata}){
  console.log(pdata)
  return(
    <div className='shadow-lg text-center pb-4'>
        <img src={pdata.thumbnail} className='w-[100%] h-[200px]'/>
        <h4>{pdata.title}</h4>
        <b>{pdata.price}</b>
    </div>
  )
}