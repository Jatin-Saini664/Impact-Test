import React, {useContext} from 'react'
import { useNavigate } from 'react-router';
import { context } from '../Context/DataProvider';
import './shortlisted.css';

const Shortlisted = () => {
    const {shortCandidates, setUserId} = useContext(context);
    const history = useNavigate();
    function handleClickPage(e){
        let id = e.target.classList[1];
        setUserId(id);
        history(`/${id}`);
    }
    return (
        <div className="main-content">
            {shortCandidates.map((obj)=>{
            return (<div key={obj.id} className={"card-content "+obj.id} onClick={handleClickPage}>
            <img src={obj.Image} alt="" className={"1 "+obj.id}/>
            <strong className={"2 "+obj.id}>{obj.name} </strong>
        </div>)
        })}
        </div>
        
     );
}
 
export default Shortlisted;