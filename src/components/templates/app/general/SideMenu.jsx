import ButtonAsideMenu from "./ButtonAsideMenu";


export default function SideMenu(props){
    return(
        <div className={`
            col-start-1 row-start-2 row-span-full bg-[#777777] text-white text-center rounded-r-lg
            
        `}>
            <ButtonAsideMenu name="Compras" url="compras"></ButtonAsideMenu>
            <ButtonAsideMenu name="Vendas" url="vendas"/>
            <ButtonAsideMenu name="Estoque" url="estoque"/>
            <ButtonAsideMenu name="Saude financeira" url="/"/>
            <ButtonAsideMenu name="Cadastrar Produtos" url="/"/>
            <ButtonAsideMenu name="Cadastrar Comprador" url="/"/>
            <ButtonAsideMenu name="Cadastrar Fornecedor" url="/"/>
            <ButtonAsideMenu name="Lista de clientes" url="/"/>
            <ButtonAsideMenu name="Lista de fornecedores" url="/"/>

        </div>
    )
}