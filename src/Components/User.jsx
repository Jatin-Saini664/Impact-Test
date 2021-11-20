import React, {useEffect, useContext, useState} from 'react'
import { context } from '../Context/DataProvider';

const User = () => {
    const {usersData, user, shortCandidates, shortlisted, rejectCandidates, reject} = useContext(context);
    const [candidate, setCandidate] = useState([]);
    useEffect(()=>{
        console.log(usersData)
        let data = [];
        data = usersData.filter((obj)=>{
            return obj.id === user;
        })
        setCandidate(data);
        console.log(candidate[0]);
    }, [])

    function handleClick(e){
        if(e.target.classList[0]==="short"){
            let data = rejectCandidates.filter((obj)=>{
                return obj.id===user;
            })
            if(data.length>0){
                reject(rejectCandidates.filter((obj)=>{
                    return obj.id!==user
                }));
            }
            data = shortCandidates.filter((obj)=>{
                return obj.id===user;
            })
            if(data.length==0){
                
                data = usersData.filter((obj)=>{
                    return obj.id===user;
                })
                let data1 = shortCandidates;
                data1.push(data[0]);
                shortlisted(data1);
            }
        }else{
            let data = shortCandidates.filter((obj)=>{
                return obj.id===user;
            })
            if(data.length>0){
                shortlisted(shortCandidates.filter((obj)=>{
                    return obj.id!==user
                }));
            }
            data = rejectCandidates.filter((obj)=>{
                return obj.id===user;
            })
            // console.log(data);
            if(data.length==0){
                
                data = usersData.filter((obj)=>{
                    return obj.id===user;
                })
                let data1 = rejectCandidates;
                data1.push(data[0]);
                reject(data1);
            }
        }
        console.log(shortCandidates);
        console.log(rejectCandidates);
    }
    return ( 
    <div className="user-content">
        <header><strong>Candidate Info</strong></header>
        <div className="candidate">
            <img src={(candidate.length>0)?candidate[0].Image:""} alt="" />
            <div className="user-data">
                <strong>{(candidate.length>0)?candidate[0].name:""}</strong>
                <div className="selection">
                    <button className="short" onClick={handleClick}>Shortlist</button>
                    <button class="reject" onClick={handleClick}>Reject</button>
                </div>
            </div>
        </div>
    </div> );
}
 
export default User;