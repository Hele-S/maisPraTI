import { useState } from 'react'
import axios from 'axios'
function Form() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)

            
            console.log(response.data)
            alert('Usuário criado com sucesso! ID: ' + response.data)
        } catch (error) {
            console.error(error)
            alert('Erro ao criar o usuário.')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="name" onChange={handleChange} value={user.name} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" onChange={handleChange} value={user.email} />
                </label><br />
                <label>
                    Senha:
                    <input type="text" name="password" onChange={handleChange} value={user.password} />
                </label>
                <br />
                <label>
                    Confirmar Senha:
                    <input type="text" name="cPassword" onChange={handleChange} value={user.cPassword} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Form