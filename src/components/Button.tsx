import Link from "next/link"

export interface NameButton{
    name: string
    url: string
}

export default function Button(props:NameButton){
    return(
        <Link href={props.url}>
            <div>
                <button className={`
                    bg-[#1D70A2] hover:bg-[#2892D7] p-2 text-white text-xl rounded-lg m-3 
                `} >{props.name}</button>
            </div>
        </Link> 
    )
        
}