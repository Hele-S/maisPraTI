import axios from 'axios'

function GetUser() {
    const ShowUser = () =>{
    axios.get(`https:reqres.in/api/users/${2}`).then(response => {console.log(`Dados o usuário: `, response.data)
    alert('Usuário recuperado:' + JSON.stringify(response.data) )})
    .catch(error => {
        console.log('Erro ao recuperar usuário: ', error)
        alert(`Erro ao recuperar dados do usuário`)
    })}

    return(
        <button onClick={ShowUser}>Recuperar Dados</button>
    )

}
export default GetUser