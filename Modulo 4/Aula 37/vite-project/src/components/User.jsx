import { useEffect, useState } from "react";

function UserProfile() {
    const [ user, Setuser] = useState(null)

    useEffect(() => {
        const fetchUserData = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/2`)
            const userData = await response.json()
            Setuser(userData)
        }

        fetchUserData()

        return () => Setuser(null)
    }, [])
    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            ) : (
                <p>Carregando perfil de usuário</p>
            )}
        </div>
    )
}


export default UserProfile