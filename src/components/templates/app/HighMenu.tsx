export default function HighMenu(props:any){
    return(
        <div className={`
            col-start-1 col-span-2
        `}>
            {props.children}
        </div>
    )
}