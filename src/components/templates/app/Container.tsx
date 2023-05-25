export default function Container(props:any){
    return(
        <div className={`
            grid grid-cols-6 grid-rows-8 h-screen w-screen border-solid border-2 
        `}>
            {props.children}
        </div>
    )
}