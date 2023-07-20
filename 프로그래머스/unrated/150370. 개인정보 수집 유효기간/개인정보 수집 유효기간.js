function solution(today, terms, privacies) {
    var answer = [];
    today = Number(today.replaceAll('.', ''));
    privacies = privacies.map(value => value.split(' '));
    
    const object = Object.fromEntries(terms.map((value) => value.split(' ')));
    
    for(let i=0; i<privacies.length; i++) {
        const addMonth = Number(object[privacies[i][1]]);
        const date = privacies[i][0].replaceAll('.', '');
        let year = Number(date.slice(0, 4));
        let month = Number(date.slice(4, 6));
        let day = date.slice(6, 8);
        
        if(month + addMonth > 12) {
            year += Math.floor((month+addMonth) / 12);
            month = String((month+addMonth) % 12).padStart(2, 0);
            
            if(month === '00') {
                year--;
                month = '12'
            }  
            
            const newDate = Number(String(year)+String(month)+day);
    
            if(today >= newDate) answer.push(i+1);
        } else {
            month = String(month + addMonth).padStart(2, 0);
            const newDate = Number(String(year)+String(month)+day);
            
            if(today >= newDate) answer.push(i+1);
        }
    }
    return answer;
}