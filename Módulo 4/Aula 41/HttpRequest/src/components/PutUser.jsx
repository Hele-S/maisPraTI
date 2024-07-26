import axios from 'axios'

function PutUser() {
    // const newData = {
    //     id : '2',
    //     first_name: 'hele'
    // }

    const upDate = () => {
        function test(response) {
            response.data.first_name = 'NOVO'
            return response
        }
        axios.get(`https:reqres.in/api/users/3`).then(response => {
            alert(`Dado anterior: ${response.data.data.first_name}`)
            console.log(response.data.data)
            axios.put(`https:reqres.in/api/users/3`, test(response.data)).then(response => {
                alert(`Dado novo: ${response.data.data.first_name}`)
                console.log(response.data.data)
            }).catch(error => {
                console.log("Erro no PUT :", error)
                console.log(response.data)
            })
        }).catch(error => {
            console.log("Erro no GET :", error)
        })
    }
    return (<>
        <br />
        <button onClick={upDate}>Atualizar</button>
        </>)
}
export default PutUser