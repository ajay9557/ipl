function matchesWonByEachTeam(matches) {
    const result = {};
  
    for(i=0;i<matches.length;i++) {
      
      const season = matches[i].season;
      const win={};
      
      top : while(season==matches[i].season){
  
        const winner = matches[i].winner;
        
        if(win[winner]){
          win[winner]+=1;
          
          i++;
        }
        else{
          win[winner]=1;
          
          i++;
        }
        if(i>=matches.length){
          break top;
        }
      
      };
      result[season]=win;
      i--;
    }
    return result;
  }
  
  module.exports = matchesWonByEachTeam;
