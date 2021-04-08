document.getElementById("pokemonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("pokemonInput").value;
  if (value === "") {
    return;
  }
  console.log(value);

  const url = "https://pokeapi.co/api/v2/pokemon/" + value.toLowerCase();
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      let name = "";
      name += "<div id='nameAndImage'>";
      name += "<h1>" + json.name.toUpperCase() + "</h1>";
      name += '<img src="' + json.sprites["front_default"] + '"/>';
      name += "</div>";
      document.getElementById("pokemonName").innerHTML = name;
      document.getElementById("nameAndImage").style.display = "flex";
      document.getElementById("nameAndImage").style.flexDirection = "column";
      document.getElementById("nameAndImage").style.justifyContent = "center";
      document.getElementById("nameAndImage").style.alignItems = "center";

      let heightAndWeight = "";
      heightAndWeight += "<div id='heightWeight'>";
      heightAndWeight += "<h2>Height: " + json.height + " ft</h2>";
      heightAndWeight += "<h2>Weight: " + json.weight + " lbs</h2>";
      heightAndWeight += "</div>";
      document.getElementById("heightAndWeight").innerHTML = heightAndWeight;
      document.getElementById("heightWeight").style.display = "flex";
      document.getElementById("heightWeight").style.flexDirection = "column";
      document.getElementById("heightWeight").style.justifyContent = "center";
      document.getElementById("heightWeight").style.alignItems = "center";

      let types = "";
      types += "<div id='typesReturned'>";
      types += "<h2>Type: ";
      let allTypes = "";
      for (let i = 0; i < json.types.length; ++i) {
        allTypes += json.types[i].type.name;
        if (i !== json.types.length - 1) {
          allTypes += "-";
        }
      }
      types += allTypes + "</h2>"
      types += "</div>";
      document.getElementById("types").innerHTML = types;
      document.getElementById("typesReturned").style.display = "flex";
      document.getElementById("typesReturned").style.justifyContent = "center";
      document.getElementById("typesReturned").style.alignItems = "center";

      let baseStats = "";
      baseStats += "<div id='stats'>";
      baseStats += "<h2><u>Base Stats</u></h2>"
      for (let i = 0; i < json.stats.length; ++i) {
        baseStats += "<p>" + json.stats[i].stat.name.toUpperCase() + ": " + json.stats[i].base_stat + "</p>";
      }
      baseStats += "</div>";
      document.getElementById("baseStats").innerHTML = baseStats;
      document.getElementById("stats").style.display = "flex";
      document.getElementById("stats").style.flexDirection = "column";
      document.getElementById("stats").style.justifyContent = "center";
      document.getElementById("stats").style.alignItems = "flexStart";
    });
});
