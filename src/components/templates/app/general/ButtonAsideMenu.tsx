import Link from "next/link"
import { ReactComponentElement } from "react"
export interface ButtonAside{
    name: string
    url: string
}

export default function ButtonAsideMenu(props:ButtonAside){
    return(
        <Link href={props.url}>
            <div className={`
                w-full h-[11.1%] bg-[#353535] hover:bg-green-600 text-white p-3 
                hover:h-18 font-bold flex justify-center items-center
            `}>
                <button>{props.name}</button>
            </div>
        </Link>
      
    )
}