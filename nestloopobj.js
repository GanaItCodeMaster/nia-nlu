var myCollection = {
    "cars": [
              { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
              { "name":"BMW", "models":[ "320", "X3", "X5" ] },
              { "name":"Fiat", "models":[ "500", "Panda" ] }
            ]
    }
    myCollection.cars.forEach(function (value) {
      //console.log("name" + value.name + ", models" + value.models);
      //for printing cars alonecars
      console.log(value.name);
      //for print models alone
      value.models.forEach(function (model) {
        console.log(model);
      });
    });