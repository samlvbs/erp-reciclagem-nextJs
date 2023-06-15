import { useState, useEffect } from "react"
import ItemEstoque from "./ItemEstoque"
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default function ListEstoque(props){
    const [listProd, setListProd] = useState([])

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const comprasCollectionRef = collection(db, 'compras')
    const produtosCollectionRef = collection(db, 'produtos')
    const estoqueCollectionRef = collection(db,'estoque')

    useEffect(() => {
        const unsubscribe = onSnapshot(estoqueCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setListProd(data);
        });

        console.log("Pegou estoque!!!!!!!")
        return () => {
          unsubscribe();
        };
        
      }, []);

    
    return(
        <div className="flex flex-col gap-2 w-full h-full bg-white rounded-b-xl p-2 overflow-y-scroll">
            {
            listProd.map((prod)=>{

                return(
                    <ItemEstoque key={prod.id} nome={prod.produto} quantidade={prod.quantidade}
                    valorPago={`R$${prod.valorPago*prod.quantidade}`} 
                    valorVenda={`R$${prod.valorVenda*prod.quantidade}`} 
                    lucro={`R$${prod.quantidade*(prod.valorVenda-prod.valorPago)}`} 
                    />
                )
            })
           }
        </div>
    )
}