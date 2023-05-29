
export default function InputForm(props){
    return(
        <div className="flex justify-center w-full gap-2 text-black">
            <div className="w-[30%] flex justify-end">
                <label>{props.contentLabel}</label>
            </div>
            <div className="w-[65%] flex ">
                <input placeholder={props.placeholder} id={props.id} 
                className="text-center border-b-[1px] border-zinc-300 rounded-lg"/>
            </div>
        </div>
    )
}