export default function Page(props:any){
    return(
        <div className={`
            flex flex-col justify-center items-center w-screen h-screen bg-[#eaecec]
        `}>
            <div className={`
                flex flex-col justify-center items-center w-full h-full 
            `}>
                {props.children}
            </div>
        </div>
    )
}