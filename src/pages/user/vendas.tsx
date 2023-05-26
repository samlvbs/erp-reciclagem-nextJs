import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/Container";
import Content from "@/components/templates/app/Content";
import HighMenu from "@/components/templates/app/HighMenu";
import SideMenu from "@/components/templates/app/SideMenu";

export default function Vendas(){
    return(
       <Container>
            <HighMenu>
                <h1>menu superior</h1>
            </HighMenu>
            <SideMenu>
            </SideMenu>
            <Content>
                <h1>Conteudo Vendas</h1>
            </Content>
       </Container>
    )
}