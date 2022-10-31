import styles from "./Register.module.css"
import { useState, useEffect } from 'react'
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
  const [displayName,setDisplayName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [error,setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (evento) => {
    evento.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }
    const res = await createUser(user)

    console.log(user)
  }


  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" name="displayName" 
            required 
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(evento) => setDisplayName(evento.target.value)}
             />
          </label>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" 
            required 
            placeholder="Email do usuário"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="password" name="password" 
            required 
            placeholder="Insira sua senha"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}            
            />
          </label>
          <label>
            <span>Confirmação de Senha:</span>
            <input type="password" name="confirmPassword" 
            required 
            placeholder="Insira sua senha novamente"
            value={confirmPassword}
            onChange={(evento) => setConfirmPassword(evento.target.value)}            
            />
          </label>
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>Aguarde</button>}
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register