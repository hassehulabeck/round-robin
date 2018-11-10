function getMatches(antal) {
  // create players.
  spelare = [];
  for (let i=0; i<antal; i++) {
    spelare.push(String.fromCharCode(65 + i));
  }

  // Skapa matcher per omgång.
  var allMatches = [];
  var otherPlayers = spelare.slice(1);

  for (let i=0; i < antal-1; i++) {
    var thisRound = [];
    thisRound.push(spelare[0]);
    allMatches.push(thisRound.concat(otherPlayers));

    // Rotera spelare i otherPlayers
    var firstPlayer = otherPlayers.shift();
    otherPlayers.push(firstPlayer);
  }


  var stringResult = "";
  var counter = 1;

  //Skapa sträng för utskrift, en omgång i taget.
  allMatches.forEach(function(round){
    stringResult += `<h2>Omgång ${counter}</h2><ul>`;

    // Varje omgång ska ha antal matcher = spelare/2
    for (let i=0; i < antal/2; i++) {

      // Last letar upp sista elementet i arrayen.
      let last = antal - i - 1;
      let str = "";

      /*
        I varje omgång plockas spelare ur arrayen.
        En från början, en från slutet.
        Om det är ojämnt antal blir värdet detsamma för i och för last sista gången.
       */
      // ABCDE
      //AE, BD, CC

      if (round[i] != round[last])
        str = `<li>${round[i]} - ${round[last]}</li>`;
      else
        str = `<li>${round[i]} står över den här omgången.`;
      stringResult += str;
    }
    counter++;
    stringResult += `</ul>`;
  })
  return stringResult;

  console.log(allMatches);
}

document.addEventListener('DOMContentLoaded', ()=>{
  var knapp = document.getElementsByTagName('button');
  var input = document.getElementsByTagName('input');
  var output = document.getElementsByTagName('div');
  knapp[0].addEventListener('click', function(){
    var antal = input[0].value;
    output[0].innerHTML = getMatches(antal);
  })
});
