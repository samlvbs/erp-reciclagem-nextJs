import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, QueryEndAtConstraint} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react"

export default function HeaderCadProd(){
    const [showAddProd, setShowAddProd] = useState(false)

    const [produto, setProduto] = useState("")
    const [medida, setMedida] = useState("")
    const [valorPago, setValorPago] = useState(0)
    const [valorVenda, setValorVenda] = useState(0)

    const[arrayList, setArrayList] = useState([])
  
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const produtosCollectionRef = collection(db, 'produtos')

    async function createProduto() {
        const compra = await addDoc(produtosCollectionRef,{
            produto, medida, valorPago, valorVenda 
        })
        setShowAddProd(false)
        console.log("Criou nova Produto")
    }

    
    return(
        <div className="flex flex-col justify-center items-center h-24 w-full bg-zinc-400">
            <div className="flex justify-start items-start m-6 ">
                <button 
                    className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-lg font-bold"
                    onClick={()=>{setShowAddProd(true)}}
                >
                    Adicionar Produto +
                </button>
            </div>
            {
                showAddProd ? (
                    <div className="relative mt-60">
                        <div className={`
                            flex flex-col gap-6 items-center justify-center bg-zinc-200 rounded-lg
                            h-[400px] w-[290px] border-solid border-zinc-400 border-[1px]
                        `}>
                            <h1 className="text-zinc-600 font-bold text-xl">Adicionar novo Produto</h1>
                            <input className="text-black text-center" type="text" placeholder="Nome do Produto"
                                onChange={(e)=>{setProduto(e.target.value)}}
                            />
                            <select className="text-black w-44 text-center" placeholder="Medida"
                                onChange={(e)=>{setMedida(e.target.value)}}
                            >
                                <option value="">Tipo de medida</option>
                                <option value="peso">Peso</option>
                                <option value="unidade">Unidade</option>
                                <option value="liquido">Liquido</option>
                            </select>
                            <input className="text-black text-center" type="text" placeholder="Valor Pago"
                                onChange={(e)=>{setValorPago(e.target.value)}}
                            />
                            <input className="text-black text-center" type="text" placeholder="Valor de Revenda"
                                onChange={(e)=>{setValorVenda(e.target.value)}}
                            />
                            <div className="flex gap-2">
                            <button onClick={()=>{
                                setShowAddProd(false)
                            }}
                                className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}>Fechar</button>
                            <button  className={`
                                bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-bold p-2
                            `}
                                onClick={createProduto}
                            >
                                Concluir
                            </button>
                        </div>
                        </div>
                    </div>
                ) : null
            }
            
        </div>
    )
}