export default function CardBuy(props:any){
    return(
        <div className="flex justify-center items-center w-[20%] h-full text-black mb-1 bg-zinc-300 font-bold
        ">
            {props.children}
        </div>
      
    )
}