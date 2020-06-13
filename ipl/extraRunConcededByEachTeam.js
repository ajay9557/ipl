function extraRunConcededByEachTeam(matches,deliveries)
  {
      const result={}
      for(var i=0;i<matches.length;i++)
      {
          if(matches[i].season=="2016")
          {
              var id=matches[i].id;      
              for(var j=0;j<deliveries.length;j++) 
               {
                  var id2=deliveries[j].match_id;     
                  if(id2==id)
                    {                  
                     if(result[deliveries[j].bowling_team])
                    {                 
                          var k=parseInt(deliveries[j].extra_runs);
                      result[deliveries[j].bowling_team] +=k;        
                    }
                   else
                   {
                     var k=parseInt(deliveries[j].extra_runs);      
                     result[deliveries[j].bowling_team] = k;           
                            }              
                          }
                     }      
                  }   
               }
               console.log(result);
      return result;
  }
  module.exports = extraRunConcededByEachTeam;