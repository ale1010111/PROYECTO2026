import { useAuth } from "../../hooks/UseAuth"
import { Card } from "../../components/ui/Card"
import { Button } from "../../components/ui/Button"
import { DashboardLayout } from "../../components/layout/DashboardLayout"

export const Dashboard = () => {
  const { logout } = useAuth()

  return (
    <DashboardLayout>

         <h1 className="text-2xl font-bold mb-4">
        Panel de Control
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          Módulo 1
        </div>
        <div className="bg-white p-4 rounded shadow">
          Módulo 2
        </div>
        <div className="bg-white p-4 rounded shadow">
          Módulo 3
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Consumidores">
          <p className="text-3xl font-bold text-blue-600">0</p>
        </Card>
        <Card title="Reportes">
          <p className="text-3xl font-bold text-green-600">0</p>
        </Card>
        <Card title="Alertas">
          <p className="text-3xl font-bold text-red-600">0</p>
        </Card>
      </div>

      <div className="max-w-xs">
  <Button
    variant="secondary"
    className="w-full text-base py-6 rounded-xl"
    onClick={logout}
  >
    Cerrar Sesión
  </Button>
</div>

    </DashboardLayout>
  )
}
