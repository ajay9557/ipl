const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunConcededByEachTeam = require("./ipl/extraRunConcededByEachTeam");
const topEconomtBowler = require("./ipl/topEconomtBowler");
const winningTeamPerVenue = require("./ipl/winningTeamPerVenue");





const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          //console.log(deliveries[0], matches[0], "matches-deliveries");
          let result = matchesPlayedPerYear(matches);
          let result1 = matchesWonByEachTeam(matches);
          let result2 = extraRunConcededByEachTeam(matches,deliveries);
          let result3 = topEconomtBowler(matches,deliveries);
          let result4 = winningTeamPerVenue(matches);


          saveMatchesPlayedPerYear(result,result1,result2,result3,result4);
        });
    });
}

function saveMatchesPlayedPerYear(result,result1,result2,result3,result4) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonByEachTeam: result1,
    extraRunConcededByEachTeam: result2,
    topEconomtBowler:result3,
    winningTeamPerVenue:result4,



  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
