import React from 'react'
import './style.scss'
import api from "../../services/api"
import { useParams } from 'react-router-dom';

interface IParams{
    username:string
}
const TimeLine = () => {
    const params = useParams<IParams>();
    const [dados, setDados] = React.useState(null);

    React.useEffect( () => {
        (async()=>{
            const responce = await api.get(`/users/${params.username}/repos`);
            setDados(responce.data)
            console.log(responce)
        })();
    },[])
    return (
        <div>
            Essá é a TimeLine
        </div>
    )
}
export default TimeLine;