const ctx_gender = document.getElementById("Gender_Chart");
let Gender_Chart = new Chart(ctx_gender, {
  type: 'doughnut',
  data: {
    labels: ['Woman', 'Man'],
    datasets: [{
      label: 'Gender',
      data: [16,12],
      backgroundColor: [
        'hsl(48deg 95% 68%)',
        'hsl(49deg 95% 84%)',
      ],
      borderColor: [
        'hsl(48deg 95% 68%)',
        'hsl(49deg 95% 84%)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    responsive: false,

  }
});

const ctx_Under_Grad_Program = document.getElementById("Undergraduate_Program");
let Age_Graph = new Chart(ctx_Under_Grad_Program,  {
  type: 'horizontalBar',
  data: {
    labels: ['Health Science', 'Criminal Justice','Computer Science','Accounting','Nutrition','Other/Not applicable','Psychology','Communication Arts'],
     datasets: [{
      data: [7,6,4,3,3,2,2,1],
        backgroundColor: ["#C02F1D", "#73BFB8", "#a2b86c", "#ebc844", "#0c364c", "white", "pink","lime"], 
     }]
  },
  options: {
     tooltips: {
       enabled: false
     },
     responsive: false,
     legend: {
        display: false,
        position: 'bottom',
        fullWidth: true,
        labels: {
          boxWidth: 10,
          padding: 50
        }
     },
     scales: {
        yAxes: [{
          barPercentage: 0.75,
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
            color:'white'
          },
          ticks: {
            fontColor: 'white',
            fontFamily: 'Lato',
            fontSize: 11
          }
           
        }],
        xAxes: [{
            gridLines: {
              display: true,
              drawTicks: true,
              tickMarkLength: 0,
              drawBorder: false,
              color:'white'
            },
          ticks: {
            padding: 5,
            beginAtZero: true,
            fontColor: 'white',
            fontFamily: 'Lato',
            fontSize: 11,
            callback: function(label, index, labels) {
             return label/1;
            }
              
          },
           scaleLabel: {
             display: true,
             padding: 10,
             fontFamily: 'Lato',
             fontColor: 'white',
             fontSize: 16,
             fontStyle: 700,
             labelString: 'Undergraduate Program'
           },
          
        }]
     }
  }
});

const ctx_Race = document.getElementById("Race");
let Race_Chart = new Chart(ctx_Race, {
  type: 'bar',
  data: {
    labels: ['White', 'Other/Multiple',"Asian",'Native Hawaiian or Other Pacific Islander',"Black or African American "],
    datasets: [{
      label: '',
      data: [12,9,4,2,1],
      backgroundColor: [
        '#1496BB',
        'Indigo','Coral','Lime','Pink'
      ],
      borderColor: [
      ],
      borderWidth: 3
    }]
  },
  options: {
    responsive: false,
    legend: {
      display: false,},
      scales: {
        xAxes: [{
          ticks:{fontColor: 'aquamarine',
          fontFamily: 'Lato'},
          display: true,
          gridLines: {color: "aquamarine" },
          scaleLabel: {
            display: true,
            color:'aquamarine'
          }
        }],
        yAxes: [{
          ticks:{fontColor: 'aquamarine',
          fontFamily: 'Lato'},
          display: true,
          gridLines: {color: "aquamarine" },
          scaleLabel: {
            display: true,
            labelString: '',
            color:'aquamarine'
          }
        }]
      }

  },
 
});



