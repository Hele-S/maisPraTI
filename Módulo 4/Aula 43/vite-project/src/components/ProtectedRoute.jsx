import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ flag, children}) {
    if(flag){
        return children
        
    } else {
    return <Navigate to="/"/>}
    
}

export default ProtectedRoute