import React, {useState} from "react";
import InputForm from "./InputForm";

const FormSuperior = () =>{
    const [showNewBuy, setShowNewBuy] = useState(false);
    return(
        <div className={`
            flex flex-col justify-center items-center bg-white w-full h-[20%]
        `}>
            <div className="flex justify-start items-start m-6 ">
                <button onClick={()=>setShowNewBuy(true)} className={`
                    bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-lg font-bold
                    
                `}>Add +</button>
            </div>
            {
                showNewBuy ? (
                <div className={`relative mt-80`}>
                    <div className={`
                    flex flex-col gap-6 items-center justify-center bg-zinc-200 rounded-lg
                    h-[400px] w-[400px] border-solid border-zinc-400 border-[1px]
                    `}>
                        <h1 className="text-zinc-600 font-bold text-xl">Adicionar nova compra</h1>
                        <InputForm contentLabel="Cliente" placeholder="Nome do Cliente" type="text" id="nameCliente" />
                        <InputForm contentLabel="Material" placeholder="Nome do Material" type="select" id="nameCliente" />
                        <InputForm contentLabel="Quantidade" placeholder="Kg ou Unidade" type="text" id="nameCliente" />
                        <InputForm contentLabel="Valor unit." placeholder="Valor por unidade" type="text" id="nameCliente" />
                        <InputForm contentLabel="Total" placeholder="Valor total" type="text" id="nameCliente" />
                        <div className="flex gap-2">
                            <button onClick={()=>setShowNewBuy(false)} className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Fechar</button>
                            <button onClick={()=>setShowNewBuy(false)} className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Add +</button>
                            <button onClick={()=>setShowNewBuy(false)} className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Concluir</button>
                        </div>
                        
                    </div>
                </div>
                ) 
                : null
            }
            {/* <div className={`
                text-black flex gap-2 items-center justify-center mr-20
            `}>
                <label>Pesquisar</label>
                <input type="text" className="border-solid border-2 border-black h-8 rounded-md"/>
            </div> */}
            
        </div>
    )
}

export default FormSuperior;