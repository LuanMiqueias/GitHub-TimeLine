import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.scss'

const Home = () => {
    const [username, setUsername] = React.useState("");
    const [erro, setErro] = React.useState("");

    const history = useHistory();
    const GetTimeline = async (e:React.MouseEvent) => {
        e.preventDefault();
        if(!username){
            setErro("Preencha com seu username do GITHUB!")
            return;
        }
        history.push(`/timeline/${username}`)
    }
    return (
        <div className="home">
            <h1>Crie uma timeline do seu GitHub</h1>   
            <form>
                <input type="text" placeholder="Seu username do github" value={username} required onInput={(e) => setUsername(e.currentTarget.value)}/>
                <button onClick={(e) => GetTimeline(e)}>Criar Timeline</button>
            </form>         
                {erro && <p className="erro">{erro}</p>}
        </div>
    )
}
export default Home;