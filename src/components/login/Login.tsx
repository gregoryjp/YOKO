
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './Login.css'

type LoginData = {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>()

  const onSubmit = (data: LoginData) => {
    console.log('Datos enviados:', data)
    // Aquí conectas con Zustand o tu backend
  }

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

      <div className="form-group">
   
        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Correo inválido',
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: {
              value: 6,
              message: 'Mínimo 6 caracteres',
            },
          })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <button type="submit" className="btn-login">
        Login
      </button>

      <div className="form-links">
        <Link to="/recover-password">¿Olvidaste tu contraseña?</Link>
        <span>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </span>
      </div>
    </form>
  )
}

export default LoginForm
