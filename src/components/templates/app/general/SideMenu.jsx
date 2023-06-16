import ButtonAsideMenu from "./ButtonAsideMenu";


export default function SideMenu(props){
    return(
        <div className={`
            col-start-1 row-start-2 row-span-full bg-[#777777] text-white text-center rounded-r-lg
            
        `}>
            <ButtonAsideMenu name="Compras" url="compras"></ButtonAsideMenu>
            <ButtonAsideMenu name="Vendas" url="vendas"/>
            <ButtonAsideMenu name="Estoque" url="estoque"/>
            <ButtonAsideMenu name="Saude financeira" url="homepage"/>
            <ButtonAsideMenu name="Cadastrar Produtos" url="cadprodutos"/>
            <ButtonAsideMenu name="Cadastrar Comprador" url="homepage"/>
            <ButtonAsideMenu name="Cadastrar Fornecedor" url="homepage"/>
            <ButtonAsideMenu name="Lista de clientes" url="homepage"/>
            <ButtonAsideMenu name="Lista de fornecedores" url="homepage"/>

        </div>
    )
}