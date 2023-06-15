import Link from "next/link"



export default function ButtonAsideMenu(props){
    return(
        <Link href={props.url}>
            <div className={`
                w-full h-[11.1%] bg-[#353535] hover:bg-green-600  active:bg-green-600 focus:bg-green-600 text-white  
                hover:h-18 font-bold flex justify-center items-center 
            `}>
                <button className="p-4">{props.name}</button>
                {props.children}
            </div>
        </Link>
      
    )
}