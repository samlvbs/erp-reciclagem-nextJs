import React, {useState} from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";

interface Compra{
    id:number;
    cliente: string;
    total:number;
    material:string;
    quantidade:number;
    valorUnit:number;
}
export const arrayCompras:Compra[] = []


const FormSuperior = () =>{
    //useState para set false ou true do modal
    const [showNewBuy, setShowNewBuy] = useState(false);

    //Logica para pegar o total dos inputs
    const[client, setCliente] = useState("")
    const[total, setTotal] = useState(0)
    const[material, setMaterial] = useState("")
    const[quantidade, setQuantidade] = useState(0)
    const[valorUnit, setValorUnit] = useState(0)
    const[arrayCompras, setArrayCompras] = useState<Compra[]>([]);


    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const comprasCollectionRef = collection(db, 'compras')

    async function createCompra() {
        const compra = await addDoc(comprasCollectionRef,{
            client, material, quantidade, total, valorUnit 
        })
        setShowNewBuy(false)
        console.log("Criou nova Compra")
    }

    function salvar(){
        const newCompra: Compra ={
            id: arrayCompras.length +1,
            cliente: client,
            total: valorUnit * quantidade,
            material: material,
            quantidade: quantidade,
            valorUnit: valorUnit
        } 
        const newCompras = [...arrayCompras, newCompra];
        
        setArrayCompras(newCompras);
        setShowNewBuy(false)
        console.log(arrayCompras)
    }
    
   
    

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
                // Se o botão add+ for clicado vai fazer showNewBuy virar true e abrir a div do modal
                showNewBuy ? (
                <div className={`relative mt-60`}>
                    <div className={`
                    flex flex-col gap-6 items-center justify-center bg-zinc-200 rounded-lg
                    h-[400px] w-[400px] border-solid border-zinc-400 border-[1px]
                    `}>
                        {/* Inputs para inserir os dados da nova compra */}
                        <h1 className="text-zinc-600 font-bold text-xl">Adicionar nova compra</h1>
                        <input className="text-black" type="text" placeholder="Nome do Cliente" onChange={(e) => setCliente(e.target.value)} />
                        <select className="text-black w-44" placeholder="Nome do Material" onChange={(e) =>
                             setMaterial(e.target.value)}>
                                <option value="Material">Material</option>
                                <option value="Ferro">Ferro</option>
                                <option value="Plastico">Plastico</option>
                                <option value="Papel">Papel</option>
                                <option value="Latinha">Latinha</option>
                             </select>
                        <input className="text-black" type="text" placeholder="Quantidade" onChange={(e) =>
                             setQuantidade(parseFloat(e.target.value))} />
                        <input className="text-black" type="text" placeholder="Valor Unitario" onChange={(e) =>
                             setValorUnit(parseFloat(e.target.value) )} />
                        <input className="text-black" type="text" placeholder="Valor Total" onChange={(e) =>
                             setTotal(parseFloat(e.target.value))} />

                        {/* div de botões do modal, Fechar - Add+ - Concluir */}
                        <div className="flex gap-2">
                            <button onClick={()=>setShowNewBuy(false)} className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Fechar</button>
                            <button  className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Add +</button>
                            <button  className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `} onClick={createCompra} >Concluir</button>
                        </div>
                        
                    </div>
                </div>
                ) 
                : null
            }  
        </div>
    )
}

export default FormSuperior;

