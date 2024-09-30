import axios from 'axios'

function DeleteRequest() {
    const Deleting = () => {
        axios.get(`https:reqres.in/api/users/3`).then( response => {
            console.log(response)
            axios.delete(`https:reqres.in/api/users/3`).then( response => {
                console.log(response)}
            )
        })
        
    }

    return (<>
    <br />
    <button onClick={Deleting} >Deletar</button>
    </>)
}

export default DeleteRequest