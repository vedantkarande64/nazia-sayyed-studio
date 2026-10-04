import os
import json
import re
from PIL import Image

# --- CONFIGURATION ---
IMAGE_DIRECTORY = './Images'
JSON_FILE_PATH = './portfolio_data.json'

# --- 1. IMAGE COMPRESSION ---
def compress_images(directory):
    print("Starting image compression...")
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                try:
                    img = Image.open(filepath)
                    
                    # Convert PNGs to RGB if saving as JPEG, or just optimize
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                        
                    # Save and replace the image with 75% quality and optimization
                    img.save(filepath, optimize=True, quality=75)
                    print(f"Compressed: {filepath}")
                except Exception as e:
                    print(f"Failed to compress {filepath}: {e}")

# --- 2. JSON NUMBER CLEANUP ---
def clean_portfolio_json(json_path):
    print("\nStarting JSON cleanup...")
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Regex to match leading numbers and a dot (e.g., "1. ", "12. ")
        pattern = re.compile(r'^\d+\.\s*')

        # Loop through categories (RESIDENTIAL, COMMERCIAL, etc.)
        for category, projects in data.items():
            for project_key, project_data in projects.items():
                # Remove numbers from the title
                if 'title' in project_data:
                    old_title = project_data['title']
                    new_title = pattern.sub('', old_title)
                    project_data['title'] = new_title
        
        # Save the cleaned JSON back to the file
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4)
        print("JSON successfully cleaned and numbers removed!")
            
    except Exception as e:
        print(f"Failed to process JSON: {e}")

if __name__ == "__main__":
    compress_images(IMAGE_DIRECTORY)
    clean_portfolio_json(JSON_FILE_PATH)