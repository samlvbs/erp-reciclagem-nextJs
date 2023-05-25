import Link from "next/link"
export interface ButtonAside{
    name: string
    url: string
}

export default function ButtonAsideMenu(props:ButtonAside){
    return(
        <Link href={props.url}>
            <div className={`
                w-full bg-[#124559] hover:bg-[#598392] text-white p-3 border-b-2 border-black hover:h-14
            `}>
                <button>{props.name}</button>
            </div>
        </Link>
      
    )
}