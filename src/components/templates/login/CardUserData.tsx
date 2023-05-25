import Button from "@/components/Button";
import Input from "@/components/Input";

export default function CardUserData(props:any){
    return(
        <div className={`
            flex flex-col items-center justify-center text-center
            w-[60%] h-full rounded-r-xl bg-white gap-2 text-2xl
        `}>
            <h1>Bem vindo!</h1>
            <h2>Entre com sua conta para começar</h2>
            <Input name="login" placeholder="Login" type="text" ></Input>
            <Input name="password" placeholder="Senha" type="password" ></Input>
            <Button name="Entrar" url="homepage"></Button>
        </div>
    )
}