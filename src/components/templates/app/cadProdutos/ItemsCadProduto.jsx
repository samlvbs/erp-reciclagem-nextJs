import { BiPencil} from "react-icons/bi"
import {MdDelete} from "react-icons/md"
import { useState, useEffect } from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default function ItemsCadProduto(props){
   
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const produtosCollectionRef = collection(db, 'produtos')

    async function deleteProduto(id){
        const produtoDoc = doc(db, 'produtos', id);
        await deleteDoc(produtoDoc)
    }
    
    return(
        <div className="flex justify-around items-center h-14 min-h-14 w-full text-black bg-zinc-200 border-solid border-[1px] border-zinc-300 rounded-lg font-bold">
        
            <div className="w-[22%] text-center">
                {props.nome}
            </div>
            <div className="w-[22%] text-center">
                {props.medida}
            </div>
            <div className="w-[15%] text-center">
                {props.vlpg}
            </div>
            <div className="w-[22%] text-center">
                {props.vlvd}
            </div>
            <div className="w-[10%] flex justify-center text-xl gap-2">
                <button className="bg-red-200 hover:bg-red-400 p-2 rounded-md"
                    onClick={()=>{deleteProduto(props.customKey)}}
                ><MdDelete/></button>
                <button className="bg-blue-200 hover:bg-blue-400 p-2 text-blue-600 rounded-md"><BiPencil/></button>
            </div>
            
        </div>
    )
}