export default function ContentEstoque(props){
    return(
        <div className={`
            flex flex-col bg-white h-full w-full rounded-xl p-1 "
        `}>
            {props.children}
        </div>
    )
}