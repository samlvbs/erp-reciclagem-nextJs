import Logo from "./highMenu/Logo";
import {GrLogout} from "react-icons/gr"
import {BiHomeAlt2} from "react-icons/bi"


export default function HighMenu(props:any){
    return(
        <div className={`
            col-start-1 col-span-6 row-start-1 row-span-1 bg-zinc-300 text-white
            flex items-center justify-between
        `}>
            <div>
                <Logo/>
            </div>
            <div className="w-[50%] flex items-center justify-end p-12">
                <button className="w-32 flex flex-row items-center gap-2 text-xl text-black">
                        Home<BiHomeAlt2/>
                </button>
                <button className="w-32 flex flex-row items-center gap-2 text-xl text-black">Sair<GrLogout/></button>
            </div>
            

        </div>
    )
}