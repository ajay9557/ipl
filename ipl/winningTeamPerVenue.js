function winningTeamPerVenue(matches) {
    const result = {};
  const arr=[];
     for(i=0;i<matches.length;i++) {
      const team ={};
  
      const venue = matches[i].venue;
      if(arr.includes(venue)){
            continue;
      }
      else{
        arr.push(venue);
        for(j=0;j<matches.length;j++){
            if(venue==matches[j].venue){
  
                if(team[matches[j].winner]){
                    team[matches[j].winner]+=1;
                }
                else{
                    team[matches[j].winner]=1;
                }
            }
        }
        result[venue]=team;
      }
  
    }
    
  
    return result;
    
  }
  module.exports = winningTeamPerVenue;