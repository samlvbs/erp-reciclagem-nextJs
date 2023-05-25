export default function HighMenu(props:any){
    return(
        <div className={`
            col-start-1 col-span-6 row-start-1 row-span-1 bg-black text-white
            
        `}>
            {props.children}
        </div>
    )
}