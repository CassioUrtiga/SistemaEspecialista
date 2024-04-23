var myChart;

const grafico = (data) =>{
    let ctx = document.getElementById('myChart').getContext('2d');

    if (myChart){
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Redes', 'Front-end', 'Back-end', 'Inteligência Artificial', 'Ciência de Dados', 'Engenharia de software'],
            datasets: [{
                label: 'Nível de aptidão',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });
}

const carregar = () => {
    document.getElementById('myform').addEventListener('submit', function(event) {
        event.preventDefault();

        grafico([
            redes(), 0, 0, inteligenciaArtificial()
        ]);
    });
}

const redes = () =>{
    let checkedBoxes = document.querySelectorAll('input[name="skills"]:checked');
    return checkedBoxes.length;
}

const inteligenciaArtificial = () =>{
    return 100;
}



window.addEventListener('load', carregar);
