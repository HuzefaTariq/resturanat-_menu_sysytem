import React,{useState} from "react";
import ResturantCard from "./resturantcard";
import Menu from "./menuapi";
import Buttons from './buttons'


const Resturant=()=>{

    const [menu,setMenu]=useState(Menu)

    function filtermenu(description){
      const updatemenu= menu.filter((obj)=>{
           return (obj.categary===description)
       })
       setMenu(updatemenu);
    }

    function All(){
        setMenu(Menu)
      }
    
    return(
        <>
        <Buttons filtermenu={filtermenu} All={All} ></Buttons>
        <ResturantCard menu={menu}></ResturantCard>
        </>
    );
}

export default Resturant;