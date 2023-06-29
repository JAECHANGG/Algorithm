function solution(id_list, report, k) {
    const id_listObj = {};
    const reportObj = {};
    const setReport = new Set(report);
    const newReport = [...setReport];
    
    for(let i of id_list) {
        id_listObj[i] = 0;
    }
    
    for(let n of newReport) {
        const arr = n.split(' ');
        if(reportObj[arr[1]] === undefined) reportObj[arr[1]] = [arr[0]];
        else reportObj[arr[1]] = [...reportObj[arr[1]], arr[0]] 
    }
    
    for(let key in reportObj) {
        if(reportObj[key].length >= k) {
            for(let i=0; i<reportObj[key].length; i++) {
             id_listObj[reportObj[key][i]]++;   
            }
        }
    }
    return Object.values(id_listObj);
}