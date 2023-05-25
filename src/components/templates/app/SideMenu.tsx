import ButtonAsideMenu from "./ButtonAsideMenu";

export default function SideMenu(props:any){
    return(
        <div className={`
            col-start-1 row-start-2 row-span-full bg-slate-600 text-white text-center
            
        `}>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Vendas" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>
            <ButtonAsideMenu name="Compras" url="/"/>

        </div>
    )
}