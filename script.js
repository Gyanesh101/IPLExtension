async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=98ce49f6-6d63-4197-b967-534dcf66f753&offset=0")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            if (data.status != "success")return;
            const matchesList = data.data;
            if(!matchesList)return [];
            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc").map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');
            return relevantData;
        })
        .catch(e => console.log(e));
}
getMatchData();