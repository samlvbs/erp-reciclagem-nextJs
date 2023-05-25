import Link from "next/link"
export interface ButtonAside{
    name: string
    url: string
}

export default function ButtonAsideMenu(props:ButtonAside){
    return(
        <Link href={props.url}>
            <div className={`
                w-full bg-white text-black p-3 border-solid border-1 border-black
            `}>
                <button>{props.name}</button>
            </div>
        </Link>
      
    )
}