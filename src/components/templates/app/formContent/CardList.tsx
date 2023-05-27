import { useState } from "react";
import CardHeadList from "./CardHeadList";

const CardList = ()=>{
    return(
        <div className={`
            w-[90%] h-[90%] border-solid border-[1px] border-black mt-[-30px] rounded-xl
            bg-white flex flex-col
        `}>
            <CardHeadList/>
            
        </div>
    )
}

export default CardList;