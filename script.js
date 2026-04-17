fetch('https://api-colombia.com/api/v1/Holiday/year/2026')
  .then(response => response.json())
  .then(json => {
//h
    console.log(json);

    let meses = [0,0,0,0,0,0,0,0,0,0,0,0];

    json.forEach(festivo => {

      let fecha = new Date(festivo.date);

      if (!isNaN(fecha)) {
        let mes = fecha.getMonth(); // 0 a 11
        meses[mes]++;
      }

    });

    var data = [
      {
        x: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        y: meses,
        type: 'bar'
      }
    ];

    Plotly.newPlot('myDiv', data);

  })
  .catch(error => console.log("ERROR:", error));