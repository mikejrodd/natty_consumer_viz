// socioDemographicData.js

// Data preparation
const socioDemographics = [
    { label: "Age", clean: 41.5, easygoing: 48.3 },
    { label: "Male (%)", clean: 42, easygoing: 51 },
    { label: "Household Size", clean: 3.38, easygoing: 2.99 },
    { label: "Low Income (%)", clean: 32, easygoing: 42 },
    { label: "University Degree (%)", clean: 46, easygoing: 34 },
    { label: "Employed (%)", clean: 70, easygoing: 62 }
];

// Sort data by "Clean wine passionate" in ascending order
socioDemographics.sort((a, b) => a.clean - b.clean);

const labelsSocio = socioDemographics.map(d => d.label);
const cleanWineData = socioDemographics.map(d => d.clean);
const easygoingWineData = socioDemographics.map(d => d.easygoing);

// Create the bar chart
const ctxSocio = document.getElementById('socioDemographicChart').getContext('2d');
const socioDemographicChart = new Chart(ctxSocio, {
    type: 'bar',
    data: {
        labels: labelsSocio,
        datasets: [
            {
                label: "Clean wine passionate (22.9%)",
                data: cleanWineData,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            },
            {
                label: "Easygoing wine enjoyers (63.7%)",
                data: easygoingWineData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
                    text: 'Socio-Demographic Metrics'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Socio-Demographic Profile of Clean Wine Passionate (Including Easygoing Wine Enjoyers, Ascending Order)'
            }
        }
    }
});
