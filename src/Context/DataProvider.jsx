import React, {useState} from 'react'
export const context = React.createContext();

export function DataProvider({children}){
    const [candidateData, setCandidateData] = useState([]);
    const [user, setUser] = useState("");
    const [shortCandidates, setShortCandidates] = useState([]);
    const [rejectCandidates, setRejectCandidates] = useState([]);

    function collectData(data){
        setCandidateData(data);
    }

    function setUserId(id){
        setUser(id);
    }

    function shortlisted(data){
        setShortCandidates(data);
    }

    function reject(data){
        setRejectCandidates(data);
    }
    let value={
        usersData:candidateData,
        collectData:collectData,
        user:user,
        setUserId:setUserId,
        shortCandidates:shortCandidates,
        shortlisted:shortlisted,
        rejectCandidates:rejectCandidates,
        reject:reject
    };
    return <context.Provider value={value}>{children}</context.Provider>;
}