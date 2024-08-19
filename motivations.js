// Data for motivations with their corresponding ratings
const motivations = [
    { label: "Healthier", rating: 3.43 },
    { label: "Less Drunk", rating: 1.94 },
    { label: "Less Hangover", rating: 2.48 },
    { label: "Trendy", rating: 2.23 },
    { label: "Easier to Drink", rating: 2.23 },
    { label: "Tastes Better", rating: 2.41 },
    { label: "Sustainable", rating: 3.49 },
    { label: "Handcrafted", rating: 3.65 }
];

// Sort motivations by rating in ascending order
motivations.sort((a, b) => a.rating - b.rating);

// Extract the sorted labels and data
const labelsMotivations = motivations.map(m => m.label);
const dataMotivations = motivations.map(m => m.rating);

// Create the bar chart for motivations
const ctxMotivations = document.getElementById('motivationsChart').getContext('2d');
const motivationsChart = new Chart(ctxMotivations, {
    type: 'bar',
    data: {
        labels: labelsMotivations,
        datasets: [{
            label: 'Motivation Ratings',
            data: dataMotivations,
            backgroundColor: 'rgba(231, 84, 128, 0.6)',
            borderColor: 'rgba(231, 84, 128, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 5
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Spanish Consumer Motivations for Choosing Natural Wine'
            }
        }
    }
});
