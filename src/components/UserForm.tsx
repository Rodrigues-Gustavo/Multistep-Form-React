import React from 'react'

const UserForm = () => {
  return (
    <div>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
          type="text" 
          name="text"
          id="name"
          placeholder="Digite seu nome"
          required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input 
          type="email" 
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
          />
        </div>
    </div>
  )
}

export default UserForm