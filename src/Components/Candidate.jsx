import React, {useEffect, useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { context } from '../Context/DataProvider';
import './candidate.css'

const Candidate = () => {
    const [usersData, setData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [value, setValue] = useState("");
    const {collectData, setUserId} = useContext(context);
    const history  = useNavigate();
    useEffect(()=>{
        fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
        .then((data)=> data.json())
        .then((content)=> {console.log(content); collectData(content); setData(content); setTempData(content)})
        .catch((error)=>console.log(error));
    }, [])

    function handleClick(e){
        console.log(value);
        if(value===""){
            setTempData(usersData);
            document.querySelector('.invisible').classList.add("visible");
            document.querySelector('.invisible').classList.remove("invisible");
            return;
        }

        let data = [];
        data = usersData.filter((data)=>{
            return data.name === value
        })
        setTempData(data);
        if(data===[]){
            document.querySelector('.invisible').classList.add("visible");
            document.querySelector('.invisible').classList.remove("invisible");
        }
    }

    function handleClickPage(e){
        let id = e.target.classList[1];
        setUserId(id);
        history(`/${id}`);
    }
    function handleShortPage(e){
        history('/shortlisted');
    }

    function handleRejectPage(e){
        history("/rejected");
    }
    return ( 
    <div className="main-content">
        <header>
            <div className="search">
                <input type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Search Candidates"/>
                <button onClick={handleClick}>Search</button>
            </div>
            <div className="short-reject">
                <button onClick={handleShortPage}>Shortlist</button>
                <button onClick={handleRejectPage}>Reject</button>
            </div>
        </header>
        
        <div className="candidates-list">
                {tempData.map((obj) => {
                    return(<div key={obj.id} className={"card-content "+obj.id} onClick={handleClickPage}>
                        <img src={obj.Image} alt="" className={"1 "+obj.id}/>
                        <strong className={"2 "+obj.id}>{obj.name} </strong>
                    </div>);
                })
            }
            <strong className="invisible">Candidate Not Found</strong>            
        </div>
    </div> );
}
 
export default Candidate;