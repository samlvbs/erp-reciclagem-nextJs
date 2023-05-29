export default function CardBuy(props:any){
    return(
        <div className="flex justify-center items-center w-[20%] h-full text-black border-r-2 border-solid border-zinc-400 shadow-md mb-1 bg-zinc-300 font-bold m-[1px]
        ">
            {props.children}
        </div>
      
    )
}