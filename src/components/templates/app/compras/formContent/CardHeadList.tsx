export default function CardHeadList(prop:any){
    return(
        <div className={`
            flex flex-row justify-around items-center
            w-full h-14 bg-zinc-700 text-white
            rounded-tl-xl
           
        `}>
            <div>Cliente</div>
            <div>Produtos</div>
            <div>Quantidade</div>
            <div>Valor</div>
            <div>Deletar</div>
        </div>
    )
}