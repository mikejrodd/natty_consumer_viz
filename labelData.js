// Data based on the second set of information
const labelData = [
    { label: "Seldom Change Habit Due to Label", percentValue: 40, rawValue: null },
    { label: "Always Read Front Label", percentValue: 25, rawValue: null },
    { label: "Always Read Back Label", percentValue: 18, rawValue: null },
    { label: "Difficult to Understand Labels (*)", percentValue: null, rawValue: 3.1 }, // Raw score out of 5
    { label: "Interest in Nutritional Information (*)", percentValue: null, rawValue: 3.6 } // Raw score out of 5
];

// Extract the labels and the data for both axes
const labelsData = labelData.map(l => l.label);
const percentValues = labelData.map(l => l.percentValue);
const rawValues = labelData.map(l => l.rawValue);

// Create the bar chart with two y-axes
const ctxLabelData = document.getElementById('labelDataChart').getContext('2d');
const labelDataChart = new Chart(ctxLabelData, {
    type: 'bar',
    data: {
        labels: labelsData,
        datasets: [
            {
                label: 'Percentage Data',
                data: percentValues,
                backgroundColor: 'rgba(100, 149, 237, 0.6)',
                borderColor: 'rgba(100, 149, 237, 1)',
                borderWidth: 1,
                yAxisID: 'y1'
            },
            {
                label: 'Raw Score Data (out of 5)',
                data: rawValues,
                backgroundColor: 'rgba(60, 179, 113, 0.6)',
                borderColor: 'rgba(60, 179, 113, 1)',
                borderWidth: 1,
                yAxisID: 'y2'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Percentage'
                }
            },
            y2: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                max: 5,
                title: {
                    display: true,
                    text: 'Raw Score (out of 5)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Survey Data on Nutritional Information Interest'
            }
        }
    }
});
