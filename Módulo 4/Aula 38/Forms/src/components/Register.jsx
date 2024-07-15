import { useState } from 'react'

function Register() {
    const [info, setInfo] = useState({
        Name: '',
        Email: '',
        Password: '',
        confirmPassword: ''
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        let validPassword = false
        event.preventDefault()
        console.log(info)
        if (!info.Name || !info.Email || !info.Password || !info.confirmPassword) {
            alert('Por favor, preencha todos os campos do formulário de registro.')
        } else {
            console.log('foi todos')
        }
        if (info.Password.length >= 8 && info.Password == info.confirmPassword) {
            validPassword = true
        } else if (info.Password.length < 8) {
            alert('A senha deve ter no mínimo 8 caractéres')
        } else if (info.confirmPassword != info.Password) {
            alert('as senhas não batem')
        }
        if (validPassword == true) {
            alert('concluido com sucesso')
        }
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input type="text" name='Name' /*value={info.Name}*/ onChange={handleChange} />
                <p></p>
            </label>
            <br />
            <label>
                Email:
                <input type="text" name='Email' /*value={info.Email}*/ onChange={handleChange} />
            </label>
            <br />
            <label>
                Senha:
                <input type="password" name='Password' /*value={info.Password}*/ onChange={handleChange} />
            </label>
            <br />
            <label>
                Confirmar Senha:
                <input type="password" name='confirmPassword' /*value={info.confirmPassword}*/ onChange={handleChange} />
            </label>
            <br />
            <button type='submit'>Enviar</button>
        </form>
    </>)
}

export default Register