import React from 'react'

import logo from './veg-logo.svg'
import { GroceryCard } from '../../../Components/Grocery/GroceryCard'

import chillipowder from '../Masala & Spices/aashirvaad-powder-chilli-img.webp'
import flowerstar from '../Masala & Spices/ananas-flowerstar-anise-img.webp'
import biryanimasal from '../biryani-masala-img.webp'
import chholemasala from '../Masala & Spices/chhole-masala-img.webp'
import cloveslaung from '../Masala & Spices/cloveslaung-img.webp'
import corianderpowder from '../Masala & Spices/coriander-powder-img.webp'
import methi from '../Masala & Spices/kasuri-methi-img.webp'
import chaatmasala from '../Masala & Spices/masala-chaat-img.webp'
import meatmasala from '../Masala & Spices/masala-meat-img.webp'
import saunf from '../Masala & Spices/organic-saunf-img.webp'
import pavbhajimasala from '../Masala & Spices/pav-bhaji-masala-img.webp'
import hingpowder from '../Masala & Spices/powder-hing-img.webp'
import shahjeera from '../Masala & Spices/royal-shahjeera-img.webp'
import stoneflower from '../Masala & Spices/stone-flower-img.webp'
import turmericpowder from '../Masala & Spices/turmeric-powder-img.webp' 



export function Masala() {

const MasalaData = [
  {
    productname:"Chilli Powder" ,
    productimg: chillipowder ,
    productprice:"₹250" ,
    aplabazarprice:"₹162",
    offprice:"₹35",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Flowerstar" ,
    productimg: flowerstar ,
    productprice:"₹185" ,
    aplabazarprice:"₹180",
    offprice:"₹5",
    quantity:"200 g",
    logo : logo,
  },


  {
    productname:"Biryani Masala" ,
    productimg: biryanimasal ,
    productprice:"₹176" ,
    aplabazarprice:"₹144",
    offprice:"₹18",
    quantity:"100g",
    logo : logo,
  },

  {
    productname:"Chhole Masala " ,
    productimg: chholemasala ,
    productprice:"₹87" ,
    aplabazarprice:"₹69",
    offprice:"₹20",
    quantity:"100 g",
    logo : logo,
  },



  {
    productname:"Cloves/Lavanga" ,
    productimg: cloveslaung ,
    productprice:"₹180" ,
    aplabazarprice:"₹166",
    offprice:"₹14",
    quantity:"100 g",
    logo : logo,
  },


  {
    productname:"Powder-Green Coriander" ,
    productimg: corianderpowder ,
    productprice:"₹190" ,
    aplabazarprice:"₹190",
    offprice:"₹0",
    quantity:"500g",
    logo : logo,
  },



  {
    productname:"Kasuri Methi" ,
    productimg: methi ,
    productprice:"₹25" ,
    aplabazarprice:"₹22",
    offprice:"₹3",
    quantity:"25 gm",
    logo : logo,
  },



  {
    productname:"Chaat Masala Powder" ,
    productimg: chaatmasala ,
    productprice:"₹45" ,
    aplabazarprice:"₹42",
    offprice:"₹6",
    quantity:"50 g",
    logo : logo,
  },

  {
    productname:"Meat Masala" ,
    productimg: meatmasala ,
    productprice:"₹150" ,
    aplabazarprice:"₹105",
    offprice:"₹30",
    quantity:"100g",
    logo : logo,
  },

  {
    productname:"Organic-Saunf/Sompu" ,
    productimg: saunf ,
    productprice:"₹165" ,
    aplabazarprice:"₹76",
    offprice:"₹54",
    quantity:"200 g",
    logo : logo,
  },

  {
    productname:"PavBhaji Masala" ,
    productimg: pavbhajimasala ,
    productprice:"₹64" ,
    aplabazarprice:"₹44",
    offprice:"₹30",
    quantity:"100g",
    logo : logo,
  },


  {
    productname:"MTR Hingh Powder" ,
    productimg: hingpowder ,
    productprice:"₹90" ,
    aplabazarprice:"₹52",
    offprice:"₹42",
    quantity:" 50 gm",
    logo : logo,
  },


  {
    productname:"Shahjeera" ,
    productimg: shahjeera ,
    productprice:"₹120" ,
    aplabazarprice:"₹119",
    offprice:"₹1",
    quantity:"100 g",
    logo : logo,
  },

  {
    productname:"Stone Flower" ,
    productimg: stoneflower ,
    productprice:"₹180" ,
    aplabazarprice:"₹142",
    offprice:"₹21",
    quantity:"100 g",
    logo : logo,
  },

  {
    productname:"Turmeric Powder" ,
    productimg: turmericpowder ,
    productprice:"₹81" ,
    aplabazarprice:"₹63",
    offprice:"₹22",
    quantity:"250 Gm",
    logo : logo,
  },

  

];
return(

<>

{
  MasalaData.map(
    (data) => {
    
  return (
    
     <GroceryCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  )
}
  )
}

</>
    
  )
}

