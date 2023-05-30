import { useEffect, useState } from "react";
import CardHeadList from "./CardHeadList";
import { getDocs, getFirestore, collection, addDoc, doc, deleteDoc, onSnapshot} from "firebase/firestore";
import { initializeApp } from "firebase/app";

import CardBuy from "./CardBuy";
import { arrayCompras } from "./FormSuperior";
import { get } from "http";
const CardList = ()=>{
    
    const[arrayList, setArrayList] = useState(arrayCompras)
    const [shouldFetch, setShouldFetch] = useState(true);
  
    const firebaseApp = initializeApp({
        apiKey: "AIzaSyB7_GeXN6CyWrYq7vd9QOGC80iEXFCmS80",
        authDomain: "erp-next-d27e5.firebaseapp.com",
        projectId: "erp-next-d27e5",
    })
    const db = getFirestore(firebaseApp)
    const comprasCollectionRef = collection(db, 'compras')


    useEffect(() => {
        const unsubscribe = onSnapshot(comprasCollectionRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setArrayList(data);
        });
        console.log("PegouCompra")
        return () => {
          unsubscribe();
        };
        
      }, []);

    async function deleteCompra(id){
        const compraDoc = doc(db, 'compras', id);
        await deleteDoc(compraDoc)
    }


    return(
        <div className={`
            w-[90%] h-[90%] border-solid border-[1px] border-black mt-[-30px] rounded-xl
            bg-white flex flex-col shadow-md overflow-y-scroll
        `}>
            <CardHeadList/>
            <div className="text-black">
                {arrayList.map((buy)=>{
                    return(
                        <div key={buy.id} className="flex flex-row w-full h-12 mt-1  p-4 bg-zinc-300 p-1 rounded-xl " >
                            <CardBuy>{buy.client}</CardBuy>
                            <CardBuy>{buy.material}</CardBuy>
                            <CardBuy>{buy.quantidade}</CardBuy>
                            <CardBuy>R${buy.total}</CardBuy>
                            <CardBuy><button className="text-red-800" onClick={()=> deleteCompra(buy.id)}>X</button></CardBuy>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardList;