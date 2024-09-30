import { useState } from 'react'

function StdForm() {
    const [name, setName] = useState('')

    const handelChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        alert(`Olá ${name}`)
    }

    return (
        <form onSubmit={handleSubmit} action=''>
            <label>
                Nome:
                <input type="text" value={name} onChange={handelChange} />
            </label>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default StdForm