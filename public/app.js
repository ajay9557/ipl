function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizematchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeextraRunConcededByEachTeam(data.extraRunConcededByEachTeam);
  visualizetopEconomtBowler(data.topEconomtBowler);
  visualizewinningTeamPerVenue(data.winningTeamPerVenue);




  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}







function visualizematchesWonByEachTeam(matchesWonByEachTeam) {
  seriesData=[];
  for( let m in matchesWonByEachTeam){
  seriesData.push(m,matchesWonByEachTeam[m]);
  }
  console.log(seriesData);
  var years=[];
  for(i=0;i<seriesData.length;i++){
    years.push(seriesData[i]);
    i++;
  }
  console.log(years);
  var distinct_team=[];

for(i=1;i<seriesData.length;i++){
  q=seriesData[i];
  q1=Object.keys(q);
  for(k=0;k<Object.keys(q).length;k++){
    if(distinct_team.includes(q1[k])){
      continue;
    }
    else{
    distinct_team.push(q1[k]);
    }
    
  }i++;
}

var main_arr=[];
 var value=0;
 var z=0;
for(i=0;i<distinct_team.length;i++){
  team=distinct_team[i];
  var arr1=[];

  for(j=1;j<=seriesData.length;j++){
    var t=0;
    z=seriesData[j];
    z1=Object.keys(z);
    for(c=0;c<Object.keys(z).length;c++){
      if(team==z1[c]){
        arr1.push(z[team]);
        t=1;
      }
    }
    if(t!=1){
      arr1.push(0);
    }
    j++;
  }
  new_obj={};
  e='name';
  d='data';
  new_obj[d]=arr1;
  new_obj[e]=team;


  main_arr.push(new_obj);

}


  Highcharts.chart('matches-played-per-year1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'number of matches won by each team '
    },
    subtitle: {
        text: 'IPL database'
    },
    xAxis: {
      categories:years,
    },
    yAxis: {
        min: 0,
        title: {
            text: ' matches won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: main_arr
});
  }





  function visualizeextraRunConcededByEachTeam(extraRunConcededByEachTeam) {
    const seriesData = [];
    for (let year in extraRunConcededByEachTeam) {
      seriesData.push([year, extraRunConcededByEachTeam[year]]);
    }
  
    Highcharts.chart("matches-played-per-year2", {
      chart: {
        type: "column"
      },
      title: {
        text: "2016-Extra run conceded by each team"
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "runs"
        }
      },
      series: [
        {
          name: "teams",
          data: seriesData
        }
      ]
    });
  }





  function visualizetopEconomtBowler(topEconomtBowler) {
    const seriesData = [];
    for (let year in topEconomtBowler) {
      seriesData.push([year, topEconomtBowler[year]]);
    }
    console.log(seriesData);
  
    Highcharts.chart('matches-played-per-year3', {
      chart: {
          type: 'column'
      },
      title: {
          text: '2015-top 10 economical bowler'
      },
      subtitle: {
          text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">ipl database</a>'
      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'economy_rates'
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'top bowler: <b>{point.y:.1f} </b>'
      },
      series: [{
          name: 'bowler',
          data: seriesData,
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
    });
  }




  
  function visualizewinningTeamPerVenue(winningTeamPerVenue) {
    seriesData=[];
    for( let m in winningTeamPerVenue){
    seriesData.push(m,winningTeamPerVenue[m]);
    }
    var distinct_team=[];
    var stadium=[];
    for(i=0;i<=seriesData.length;i++){
      stadium.push(seriesData[i]);
      i++;
    }
  
  for(i=1;i<seriesData.length;i++){
    q=seriesData[i];
    q1=Object.keys(q);
    for(k=0;k<Object.keys(q).length;k++){
      if(distinct_team.includes(q1[k])){
        continue;
      }
      else{
      distinct_team.push(q1[k]);
      }
      
    }i++;
  }
  
  var main_arr=[];
   var value=0;
   var z=0;
  for(i=0;i<distinct_team.length;i++){
    team=distinct_team[i];
    var arr1=[];
  
    for(j=1;j<=seriesData.length;j++){
      var t=0;
      z=seriesData[j];
      z1=Object.keys(z);
      for(c=0;c<Object.keys(z).length;c++){
        if(team==z1[c]){
          arr1.push(z[team]);
          t=1;
        }
      }
      if(t!=1){
        arr1.push(0);
      }
      j++;
    }
    new_obj={};
    e='name';
    d='data';
    new_obj[d]=arr1;
    new_obj[e]=team;
  
  
    main_arr.push(new_obj);
  
  }
  
  
  Highcharts.chart('matches-played-per-year4', {
    chart: {
        type: 'column'
    },
    title: {
        text: ' Story: Matches Won by each team per venue'
    },
    xAxis: {
        categories: stadium
    },
    plotOptions: {
      series:  {pointWidth: 10},
      pointPadding:10,
  
      
  },
    
    yAxis: {
        min: 0,
        title: {
            text: 'team_with_winning_match_number'
        },
        
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 20,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: main_arr
  });
  }