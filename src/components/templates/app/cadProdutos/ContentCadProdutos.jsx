export default function ContentCadProdutos(props){
    return(
        <div className={`
            flex justify-center flex-col bg-white h-full w-full rounded-xl "
        `}>
            {props.children}
        </div>
    )
}