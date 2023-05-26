export default function Content(props:any){
    return(
        <div className={`
            col-start-2 row-start-2 row-span-full col-span-full bg-zinc-400
            flex flex-col items-center text-white
        `}>
            {props.children}
        </div>
    )
}