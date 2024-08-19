import numpy as np
import matplotlib.pyplot as plt
from math import pi

# Data for Italy and Spain
labels = [
    "Healthier", "Less Drunk", "Less Hangover", 
    "Trendy", "Easier to Drink", "Tastes Better", 
    "Sustainable", "Handcrafted"
]

italy_means = [3.60, 2.13, 2.34, 2.41, 2.13, 3.00, 3.33, 3.53]
spain_means = [3.43, 1.94, 2.48, 2.23, 2.23, 2.41, 3.49, 3.65]

# Number of variables
num_vars = len(labels)

# Compute the angle of each axis
angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()

# The radar chart requires that we "close the loop"
italy_means += italy_means[:1]
spain_means += spain_means[:1]
angles += angles[:1]

# Initialize the radar chart
fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))

# Draw one axe per variable and add labels
ax.set_theta_offset(pi / 2)
ax.set_theta_direction(-1)
ax.set_rlabel_position(0)
ax.set_ylim(0, 5)

# Plot data for Italy
ax.plot(angles, italy_means, color="#E75480", linewidth=2, linestyle='solid', label="Italy")
ax.fill(angles, italy_means, color="#E75480", alpha=0.25)

# Plot data for Spain
ax.plot(angles, spain_means, color="#9370DB", linewidth=2, linestyle='solid', label="Spain")
ax.fill(angles, spain_means, color="#9370DB", alpha=0.25)

# Add labels to each axis
ax.set_xticks(angles[:-1])
ax.set_xticklabels(labels, color='grey', size=10)

# Add a title
plt.title("Natural Wine Consumption Motivations: Italy vs Spain", size=15, color='grey', pad=20)

# Add a legend
ax.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))

# Display the chart
plt.show()
