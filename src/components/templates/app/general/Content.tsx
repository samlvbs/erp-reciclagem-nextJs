export default function Content(props:any){
    return(
        <div className={`
            col-start-2 row-start-2 row-span-full col-span-full bg-zinc-400
            flex flex-col items-center text-white shadow-2xl p-2
        `}>
            <div className=" bg-local bg-no-repeat bg-center h-full w-full flex flex-col justify-center items-center"
                style={{backgroundImage: `url(/images/simbReciclagem.png)`,}}>
                    {props.children}
            </div>
            
        </div>
    )
}