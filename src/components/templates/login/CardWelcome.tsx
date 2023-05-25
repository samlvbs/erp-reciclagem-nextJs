import Button from "@/components/Button";

export default function CardWelcome(props:any){
    return(
        <div className={`
            flex flex-col justify-center items-center w-[40%] h-full
            bg-[#1B4353] text-white text-center rounded-s-xl
        `}>
            <h1>Novo por aqui?</h1>
            <h2>Crie sua conta e comece agora mesmo!</h2>
            <Button name="Cadastre-se" url="/"></Button>
        </div>
    )
}