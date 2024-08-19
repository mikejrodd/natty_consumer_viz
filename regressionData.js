// Data for regression results with inverse p-values and direction
const regressionData = [
    { label: "Price", pValue: 0.001, coefficient: 1 / 0.001, highlight: true },        // Positive
    { label: "Diet", pValue: 0.014, coefficient: 1 / 0.014 },                         // Positive
    { label: "Physical Activity", pValue: 0.019, coefficient: 1 / 0.019 },            // Positive
    { label: "Age", pValue: 0.004, coefficient: -1 / 0.004 },                         // Negative
    { label: "Education", pValue: 0.058, coefficient: -1 / 0.058 },                   // Negative
    { label: "Wine Consumption", pValue: 0.077, coefficient: 1 / 0.077 }              // Positive
];

// Create the bar chart for inverse p-values
const ctxRegressionData = document.getElementById('regressionDataChart').getContext('2d');
const regressionDataChart = new Chart(ctxRegressionData, {
    type: 'bar',
    data: {
        labels: regressionData.map(d => d.label),
        datasets: [{
            label: 'Inverse P-value (1/p)',
            data: regressionData.map(d => d.coefficient),
            backgroundColor: regressionData.map(d => {
                if (d.coefficient < 0) return 'rgba(255, 99, 132, 0.6)'; // Red for negative impact
                if (d.highlight) return 'rgba(255, 165, 0, 0.6)';        // Orange for most significant
                return 'rgba(75, 192, 192, 0.6)';                         // Teal for positive impact
            }),
            borderColor: regressionData.map(d => {
                if (d.coefficient < 0) return 'rgba(255, 99, 132, 1)'; // Red for negative impact
                if (d.highlight) return 'rgba(255, 165, 0, 1)';        // Orange for most significant
                return 'rgba(75, 192, 192, 1)';                         // Teal for positive impact
            }),
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 300,  // Limit the main y-axis to 300
                title: {
                    display: true,
                    text: 'Inverse P-value (1/p)'
                },
                ticks: {
                    callback: function(value, index, values) {
                        // Only show ticks for the visible range
                        if (value <= 300) return value;
                        if (value === 1000) return '1000+'; // Indicate that the "Price" bar exceeds this range
                        return null;
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Impact of Factors on Interest in Wine Ingredient Information'
            },
            afterDatasetsDraw: function(chart, easing) {
                // Drawing a line to indicate the bleed-off
                const ctx = chart.ctx;
                const yAxis = chart.scales['y'];
                
                // Get the pixel position for the 300 max
                const maxPixel = yAxis.getPixelForValue(300);
                
                ctx.save();
                ctx.strokeStyle = '#FF4500';  // Use a different color to highlight the bleed
                ctx.setLineDash([5, 5]);  // Dashed line to indicate a break
                ctx.beginPath();
                ctx.moveTo(chart.chartArea.left, maxPixel);
                ctx.lineTo(chart.chartArea.right, maxPixel);
                ctx.stroke();
                
                // Draw a triangle to indicate the continuation
                ctx.fillStyle = '#FF4500';
                ctx.beginPath();
                ctx.moveTo(chart.chartArea.right - 15, maxPixel - 10);
                ctx.lineTo(chart.chartArea.right, maxPixel);
                ctx.lineTo(chart.chartArea.right - 15, maxPixel + 10);
                ctx.closePath();
                ctx.fill();
                
                ctx.restore();
            }
        }
    }
});
