function topEconomtBowler(matches,deliveries)
  {
      const result={};
      const over={};
      for(var i=0;i<matches.length;i++)
      {
          if(matches[i].season=="2015")
          {
              var id=matches[i].id;      
              for(var j=0;j<deliveries.length;j++) 
               {
                  var id2=deliveries[j].match_id;     
                  if(id2==id)
                    {                  
                     if(result[deliveries[j].bowler])
                    {                 
                          var k=parseFloat(deliveries[j].total_runs);
                      result[deliveries[j].bowler] +=k; 
                      if(deliveries[j].extra_runs==0) { 
                        if(over[deliveries[j].bowler]){
                          over[deliveries[j].bowler] +=1;        
                        }
                        else{
                          over[deliveries[j].bowler]=1;
                        }
                      
                      }      

                    }
                   else
                   {
                     var k=parseFloat(deliveries[j].total_runs);      
                     result[deliveries[j].bowler] = k;
                     if(deliveries[j].extra_runs=='0'){

                      if(over[deliveries[j].bowler]){
                        over[deliveries[j].bowler] +=1;        
                      }
                      else{
                        over[deliveries[j].bowler]=1;
                          }
                       }
       
                     }   
                          
                   }
               }      
           }   
      }
               var a=0;
               var arr=[];
               var over1={};
               for(let m in over){
                 a=(result[m]/(over[m]/6));
                 over1[m]=parseFloat(a.toFixed(2));
               }
               console.log(over1);
               
               var value1=[];
               for(let m in over1){
                 value1.push(over1[m])
               }
              console.log(value1);

            over2={};

            value1.sort(function(a, b){return a - b});   
               for(i=0;i<10;i++){
                 for(let n in over1){
                   if(over1[n]==value1[i]){
                     over2[n]=value1[i];
                     
                   }
                 }
               }
      return over2;
  }
  module.exports = topEconomtBowler;