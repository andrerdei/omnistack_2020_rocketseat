import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()
    
    async function handleRegister(event){
        event.preventDefault()

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')

        } catch (err) {
            alert("Erro no cadastro, tente novamente")
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft  size={16} color="E02041"/>
                        Logon
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        pattern="[A-Za-z]+\s[A-Za-z]+"
                        title="Preencha com seu nome e sobrenome, sem acentos"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />  
                    <input type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <input placeholder="Whatsapp"
                        type="number"
                        title="Preencha com o seu Whatsapp"
                        value={whatsapp}
                        onChange={(event) => setWhatsapp(event.target.value)}
                        required
                    />

                    <div className="input-group">
                        <input className="input-cidade"
                            placeholder="Cidade"
                            pattern="[A-Za-z\s]+"
                            title="Preencha com o nome de sua cidade"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            required
                        />
                        <input className="input-uf"
                            placeholder="UF"
                            pattern="[A-Z]{2}"
                            title="Preencha com a sigla de seu estado, ex: SP"
                            value={uf}
                            onChange={(event) => setUf(event.target.value)}
                            required
                        />
                    </div>

                    <button className="spec-button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}