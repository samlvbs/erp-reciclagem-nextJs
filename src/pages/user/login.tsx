import Button from "@/components/Button";
import Page from "@/components/templates/Page";
import CardLogin from "@/components/templates/login/CardLogin";
import CardUserData from "@/components/templates/login/CardUserData";
import CardWelcome from "@/components/templates/login/CardWelcome";

export default function Login(){
    return(
        
        <Page>
           <CardLogin>
                <CardWelcome/>
                <CardUserData/>
           </CardLogin>
        </Page>
        
    )
}