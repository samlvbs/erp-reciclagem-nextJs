import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/general/Container";
import Content from "@/components/templates/app/general/Content";
import HighMenu from "@/components/templates/app/general/HighMenu";
import SideMenu from "@/components/templates/app/general/SideMenu";
import CardList from "@/components/templates/app/compras/formContent/CardList";
import FormSuperior from "@/components/templates/app/compras/formContent/FormSuperior";

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