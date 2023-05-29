import Image from "next/image"
export default function Logo(){
    return(
        <div className={`
            h-[90%] w-24 rounded-full ml-4
        `}>
            <img src="/images/simbReciclagem.png" alt="" />
        </div>
    )
}