import Page from "@/components/templates/Page";
import Container from "@/components/templates/app/Container";
import HighMenu from "@/components/templates/app/HighMenu";
import SideMenu from "@/components/templates/app/SideMenu";

export default function HomePage(){
    return(
       <Container>
            <HighMenu>
                <h1>menu superior</h1>
            </HighMenu>
            <SideMenu>
            </SideMenu>
       </Container>
    )
}