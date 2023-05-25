export default function Page(props:any){
    return(
        <div className={`
            flex flex-col justify-center items-center w-screen h-screen bg-zinc-600
        `}>
            <div className={`
                flex flex-col justify-center items-center w-full h-full 
            `}>
                {props.children}
            </div>
        </div>
    )
}