import { useEffect, useState } from "react";
import CardHeadList from "./CardHeadList";

import CardBuy from "./CardBuy";
import { arrayCompras } from "./FormSuperior";
const CardList = ()=>{
    
    const[arrayList, setArrayList] = useState(arrayCompras)
  
    useEffect(() => {
       setArrayList(arrayCompras)
      }, [arrayCompras]);
    return(
        <div className={`
            w-[90%] h-[90%] border-solid border-[1px] border-black mt-[-30px] rounded-xl
            bg-white flex flex-col shadow-md overflow-y-scroll
        `}>
            <CardHeadList/>
            <div className="text-black">
                {arrayList.map((buy)=>{
                    return(
                        <div key={buy.id} className="flex flex-row w-full h-10 mt-2 rounded-sm " >
                            <CardBuy>{buy.cliente}</CardBuy>
                            <CardBuy>{buy.material}</CardBuy>
                            <CardBuy>{buy.quantidade}</CardBuy>
                            <CardBuy>R${buy.total}</CardBuy>
                            <CardBuy></CardBuy>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardList;