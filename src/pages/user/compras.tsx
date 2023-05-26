import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/Container";
import Content from "@/components/templates/app/Content";
import HighMenu from "@/components/templates/app/HighMenu";
import SideMenu from "@/components/templates/app/SideMenu";
import CardList from "@/components/templates/app/formContent/CardList";
import FormSuperior from "@/components/templates/app/formContent/FormSuperior";

export default function Compras(){
    return(
       <Container>
            <HighMenu/>
            <SideMenu/>
            <Content>
                <FormSuperior/>
                <CardList/>
            </Content>
       </Container>
    )
}