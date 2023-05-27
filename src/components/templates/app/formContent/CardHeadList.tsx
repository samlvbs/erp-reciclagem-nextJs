export default function CardHeadList(prop:any){
    return(
        <div className={`
            flex flex-row justify-around items-center
            w-full h-14 bg-slate-950 text-white
            rounded-t-xl
        `}>
            <div>Cliente</div>
            <div>Produtos</div>
            <div>Quantidade</div>
            <div>Valor</div>
            <div>Horario</div>
        </div>
    )
}