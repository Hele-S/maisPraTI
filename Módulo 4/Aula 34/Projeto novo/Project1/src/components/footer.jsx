import classe from "./footer.module.css"
function FunctionFooter(caixa) {
    return (
        <footer className={classe.rodape1}>
            <h1>RODAPÉ</h1>
            <p>{caixa.texto1}</p>
        </footer>
    )
}

export default FunctionFooter