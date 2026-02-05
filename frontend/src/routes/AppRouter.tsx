import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/UseAuth';
import { Login } from '../pages/auth/Login';
import { Dashboard } from '../pages/dashboard/Dashboard';

export const AppRouter = () => {
    const { user, loading } = useAuth();

    if (loading) return <div>Cargando sistema ANH...</div>;

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta Pública */}
                <Route path="/login" element={!user?.loggedIn ? <Login /> : <Navigate to="/dashboard" />} />

                {/* Ruta Privada (Simplificada por ahora) */}
                <Route path="/dashboard" element={user?.loggedIn ? <Dashboard /> : <Navigate to="/login" />} />

                {/* Redirección por defecto */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};