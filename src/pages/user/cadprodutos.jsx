import Container from "@/components/templates/app/general/Container";
import Content from "@/components/templates/app/general/Content";
import HighMenu from "@/components/templates/app/general/HighMenu";
import SideMenu from "@/components/templates/app/general/SideMenu";
import ContentCadProdutos from "../../components/templates/app/cadCompras/ContentCadProdutos";
import HeaderCadProd from "../../components/templates/app/cadCompras/HeaderCadCompras";
import ListCadProdutos from "../../components/templates/app/cadCompras/ListCadProdutos";


export default function CadProdutos(){
    return(
        <div>
            <Container>
                <HighMenu/>
                <SideMenu/>
                <Content>
                    <ContentCadProdutos>
                        <HeaderCadProd/>
                        <div className="flex justify-around h-10 w-full text-black p-2 bg-slate-200  mb-1 font-bold">
                            <span>Nome Produto</span>
                            <span>Medida (Kg, unid., Litro)</span>
                            <span>Valor Pago</span>
                            <span>Valor Revenda</span>
                            <span></span>
                        </div>
                        <ListCadProdutos/>
                    </ContentCadProdutos>
                </Content>
            </Container>
        </div>
    )
}