import React from 'react'
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/register">
                        <FiLogIn  size={16} color="E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input className="input-cidade" placeholder="Cidade"/>
                        <input className="input-uf" placeholder="UF"/>
                    </div>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}