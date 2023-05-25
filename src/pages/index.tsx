import Button from "@/components/Button";

export default function Home() {
  return (
    <div className={`
      flex flex-col gap-2 justify-center items-center h-screen bg-black text-white
      text-4xl
    `}>
      <h1>Pagina inicial</h1>
      <h1>Ir para a pagina de login</h1>
      <Button name="Login" url="user/login"/>
    </div>
  )
}
