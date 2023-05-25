export default function CardLogin(props:any){
    return(
        <div className={`
            flex flex-row items-center justify-center bg-gray-900 h-[80%] w-[80%] rounded-xl
        `}>
            {props.children}
        </div>
    )
}