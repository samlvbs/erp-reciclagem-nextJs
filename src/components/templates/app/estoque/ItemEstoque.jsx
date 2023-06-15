export default function ItemEstoque(props){
    return(
        <div className="flex items-center justify-around w-full text-black h-16 font-bold bg-zinc-200 rounded-xl">
            <div className="w-[20%] text-center"><span>{props.nome}</span></div>
            <div className="w-[20%] text-center"><span>{props.quantidade}</span></div>
            <div className="w-[20%] text-center"><span>{props.valorPago}</span></div>
            <div className="w-[20%] text-center"><span>{props.valorVenda}</span></div>
            <div className="w-[20%] text-center"><span>{props.lucro}</span></div>
        </div>
    )
}