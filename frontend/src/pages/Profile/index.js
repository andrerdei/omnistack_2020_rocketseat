import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
    const [incidents, setIncidents] = useState([])

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        })
        .then((response) => setIncidents(response.data))
        
    }, [ongId])

    async function handleDeleteIncident(iterationId) {
        try {
            await api.delete(`incidents/${iterationId}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter((incident) => {
                    return incident.id !== iterationId
                })
            )

        } catch (err) {
            alert("Erro ao deletar caso, tente novamente")
        }
    }

    function handleLogout() {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda {ongName}</span>

                <Link className="spec-button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <section className="casos-cadastrados">
                <h1>Casos cadastrados</h1>

                <ul>
                    {incidents.map((incident) => {
                            return (
                                <li key={incident.id}>
                                    <strong>Caso:</strong>
                                    <p>{incident.title}</p>

                                    <strong>Descrição:</strong>
                                    <p>{incident.description}</p>

                                    <strong>Valor</strong>
                                    <p>
                                        {Intl
                                            .NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                                            .format(incident.value)
                                        }
                                    </p>

                                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                        <FiTrash2 size={20} color="#a8a8b3" />
                                    </button>
                                </li>
                            )                       
                        })
                    }
                </ul>
            </section>
        </div>
    )
}