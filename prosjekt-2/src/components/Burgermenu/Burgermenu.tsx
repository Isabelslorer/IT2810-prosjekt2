import React, {useState} from "react";
import Sidebar from "../Menu/Menu";
import Burger from '../Burgermenu/Burger';
import { booleanLiteral } from "@babel/types";

interface Props{
    isOpen: boolean;
}

function Burgermenu(props: Props) {
    return(
        <div>
            { 
               props.isOpen && <Sidebar></Sidebar>
            }     
           
        </div>
    );
}

export default Burgermenu;