import { Navigate } from "react-router-dom";

function ProtectedRoute ({ children, isAllowed}) {
    if(!isAllowed){
        return <Navigate to="/login" replace/>;
    }
    return children;
}

export default ProtectedRoute;