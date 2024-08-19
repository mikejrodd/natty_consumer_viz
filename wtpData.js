// wtpData.js

// Data preparation
const wtpData = [
    { label: "WTP Organic", easygoing: 10.1, convenience: 4.72, clean: 19.8 },
    { label: "WTP No-additives", easygoing: 9.54, convenience: 4.62, clean: 19.5 },
    { label: "WTP Low-sulfites", easygoing: 9.28, convenience: 4.40, clean: 18.4 },
    { label: "WTP Natural", easygoing: 9.25, convenience: 4.41, clean: 17.8 }
];

// Sort data by "Clean wine passionate" in ascending order
wtpData.sort((a, b) => a.clean - b.clean);

const labels = wtpData.map(d => d.label);
const easygoingData = wtpData.map(d => d.easygoing);
const convenienceData = wtpData.map(d => d.convenience);
const cleanData = wtpData.map(d => d.clean);

// Create the bar chart
const ctxWTP = document.getElementById('wtpChart').getContext('2d');
const wtpChart = new Chart(ctxWTP, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: "Convenience drinkers (13.4%)",
                data: convenienceData,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: "Easygoing wine enjoyers (63.7%)",
                data: easygoingData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: "Clean wine passionate (22.9%)",
                data: cleanData,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Willingness-to-Pay (€)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Willingness-to-Pay for Different Wine Attributes (Ascending Order)'
            }
        }
    }
});
