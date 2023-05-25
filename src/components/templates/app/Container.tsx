export default function Container(props:any){
    return(
        <div className={`
            grid grid-cols-2 gap-1 h-screen w-screen
        `}>
            {props.children}
        </div>
    )
}