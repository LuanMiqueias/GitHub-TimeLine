import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

const Home = () => {
    return (
        <div className="home">
            <h1>Crie uma timeline do seu GitHub</h1>   
            <form>
                <input type="text" placeholder="Seu username do github"/>
                <button>Criar Timeline</button>
                </form>         
        </div>
    )
}
export default Home;