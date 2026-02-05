import { useState } from "react"
import { useAuth } from "../../hooks/UseAuth"
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/Card"

export const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await login(username, password)

    if (!result.success) {
      alert("Credenciales inválidas")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <Card title="ANH - Inicio de Sesión">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Ingresar al Sistema</Button>
        </form>
      </Card>
    </div>
  )
}
