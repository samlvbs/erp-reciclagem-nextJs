import Button from "@/components/Button";

export default function HeaderEstoque(){
    return(
        <div className="bg-zinc-300 h-20 w-full rounded-t-xl flex justify-center " >
            <Button name="+ Produtos" url="cadprodutos"/>
            <Button name="+ Compra" url="compras"/>
            <Button name="+ Venda" url="vendas"/>
        </div>
    )
}