import ItemsCadProduto from "./ItemsCadProduto";
import { useState, useEffect } from "react";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { initializeApp } from "firebase/app";

export default function ListCadProdutos(props){
    const[arrayList, setArrayList] = useState([])
  
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const produtosCollectionRef = collection(db, 'produtos')


    useEffect(() => {
        const unsubscribe = onSnapshot(produtosCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setArrayList(data);
        });
        console.log("Pegou Produtos!!!!!!!")
        return () => {
          unsubscribe();
        };
        
      }, []);

    
    
    return(
        <div className="flex flex-col gap-2 p-2 h-full w-full rounded-b-lg overflow-y-scroll">
           {
            arrayList.map((prod)=>{
                return(
                    <ItemsCadProduto key={prod.id} customKey={prod.id} nome={prod.produto} medida={prod.medida} 
                    vlpg={`R$${prod.valorPago}`} vlvd={`R$${prod.valorVenda}`}
                    />
                )
            })
           }
        </div>
    )
}