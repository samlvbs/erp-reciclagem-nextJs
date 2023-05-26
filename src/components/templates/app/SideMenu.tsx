import ButtonAsideMenu from "./ButtonAsideMenu";

export default function SideMenu(props:any){
    return(
        <div className={`
            col-start-1 row-start-2 row-span-full bg-[#124559] text-white text-center
            
        `}>
            <ButtonAsideMenu name="Compras" url="compras"/>
            <ButtonAsideMenu name="Vendas" url="vendas"/>
            <ButtonAsideMenu name="Estoque" url="/"/>
            <ButtonAsideMenu name="Saude financeira" url="/"/>
            <ButtonAsideMenu name="Cadastrar Produtos" url="/"/>
            <ButtonAsideMenu name="Cadastrar Comprador" url="/"/>
            <ButtonAsideMenu name="Cadastrar Fornecedor" url="/"/>
            <ButtonAsideMenu name="Lista de clientes" url="/"/>
            <ButtonAsideMenu name="Lista de fornecedores" url="/"/>

        </div>
    )
}