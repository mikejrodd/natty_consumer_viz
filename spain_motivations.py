import matplotlib.pyplot as plt
from wordcloud import WordCloud
from PIL import Image, ImageDraw, ImageFont
import numpy as np

# Data for Spain
motivations = {
    "Healthier": 3.43,
    "Less Drunk": 1.94,
    "Less Hangover": 2.48,
    "Trendy": 2.23,
    "Easier to Drink": 2.23,
    "Tastes Better": 2.41,
    "Sustainable": 3.49,
    "Handcrafted": 3.65
}

# Function to create a circular text image
def create_grape(text, size):
    font = ImageFont.load_default()  # Use the default Pillow font
    image_size = size * 2
    image = Image.new('RGBA', (image_size, image_size), (255, 255, 255, 0))
    draw = ImageDraw.Draw(image)
    
    # Calculate the bounding box of the text
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    
    # Calculate the position and draw the text
    position = ((image_size - w) // 2, (image_size - h) // 2)
    draw.text(position, text, font=font, fill="black")
    
    # Create circular mask
    mask = Image.new('L', (image_size, image_size), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.ellipse((0, 0, image_size, image_size), fill=255)
    
    # Apply mask to text image
    image.putalpha(mask)
    return image


# Generate "grapes" based on motivations
grape_images = []
for motivation, rating in motivations.items():
    grape_size = int(rating * 40)  # Scale size based on rating
    grape_image = create_grape(motivation, grape_size)
    grape_images.append(grape_image)

# Create a blank canvas for clustering the grapes
canvas_size = 800
canvas = Image.new('RGBA', (canvas_size, canvas_size), (255, 255, 255, 0))

# Paste the grapes on the canvas in a clustered manner
positions = [(200, 200), (300, 150), (400, 200), (300, 300), (350, 250), (250, 300), (450, 150), (200, 350)]
for i, grape in enumerate(grape_images):
    position = positions[i]
    canvas.paste(grape, position, grape)

# Convert to RGB and display the final image
canvas_rgb = canvas.convert('RGB')
plt.figure(figsize=(10, 10))
plt.imshow(canvas_rgb)
plt.axis('off')
plt.title("Natural Wine Perceptions (Spain)", size=20)
plt.show()
