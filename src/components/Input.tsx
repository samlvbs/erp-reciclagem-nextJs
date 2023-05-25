import Link from "next/link"

export interface InputData{
    name: string
    type: string
    placeholder: string
}

export default function Input(props:InputData){
    return(
       <div>
            <input type={props.type} name={props.name} placeholder={props.placeholder} className={`
                w-full p-3 text-xl rounded-lg border-solid border-2 border-zinc-400
            `}/>
       </div>
    )
        
}