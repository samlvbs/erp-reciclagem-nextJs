import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/general/Container";
import Content from "@/components/templates/app/general/Content";
import HighMenu from "@/components/templates/app/general/HighMenu";
import SideMenu from "@/components/templates/app/general/SideMenu";
import ContentEstoque from "@/components/templates/app/estoque/ContentEstoque"
import HeaderEstoque from "@/components/templates/app/estoque/HeaderEstoque"
import ListEstoque from "@/components/templates/app/estoque/ListEstoque"

export default function Estoque(props:any){
    return(
       <Container>
            <HighMenu>
            </HighMenu>
            <SideMenu>
            </SideMenu>
            <Content>
                <ContentEstoque>
                    <HeaderEstoque/>
                    <div className="w-full h-20 font-bold text-lg bg-zinc-400 text-black flex items-center
                        justify-around border-solid border-b-2 border-zinc-500" >
                        <div><span>Produto</span></div>
                        <div><span>Quantidade</span></div>
                        <div><span>Valor total pago</span></div>
                        <div><span>Valor total venda</span></div>
                        <div><span>Lucro {props.lucro}</span></div>
                    </div>
                    <ListEstoque/>\w
                </ContentEstoque>
            </Content>
       </Container>
    )
}