import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident(event) {
        event.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            alert("Caso cadastrado com sucesso")

        } catch (err) {
            alert("Erro ao cadastrar novo caso, tente novamente")
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft  size={16} color="E02041"/>
                        Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Descrição"
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />

                    <input
                        placeholder="Valor em reais"
                        type="number"
                        onChange={(event) => setValue(event.target.value)}
                        required
                    />

                    <div className="button-group">   
                        <button className="spec-button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}