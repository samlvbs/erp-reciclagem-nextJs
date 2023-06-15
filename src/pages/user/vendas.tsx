import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/general/Container";
import Content from "@/components/templates/app/general/Content";
import HighMenu from "@/components/templates/app/general/HighMenu";
import SideMenu from "@/components/templates/app/general/SideMenu";

export default function Vendas(){
    return(
       <Container>
            <HighMenu>
            </HighMenu>
            <SideMenu>
            </SideMenu>
            <Content>
                <h1>Conteudo Vendas</h1>
            </Content>
       </Container>
    )
}