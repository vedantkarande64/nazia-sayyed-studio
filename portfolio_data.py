import os
import json
import re

# Set the path to your main images folder
BASE_DIR = "Images"
OUTPUT_FILE = "portfolio_data.json"
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

def generate_portfolio_json():
    portfolio = {}

    # Check if the Images directory exists
    if not os.path.exists(BASE_DIR):
        print(f"Error: Could not find the directory '{BASE_DIR}'")
        return

    # 1. Loop through Categories (RESIDENTIAL, RETAIL, COMMERCIAL)
    for category in os.listdir(BASE_DIR):
        cat_path = os.path.join(BASE_DIR, category)
        if not os.path.isdir(cat_path):
            continue

        portfolio[category] = {}

        # 2. Loop through Project Folders (e.g., "1. OBEROI SKYCITY")
        for project in os.listdir(cat_path):
            proj_path = os.path.join(cat_path, project)
            if not os.path.isdir(proj_path):
                continue

            # Clean up folder name to create an ID and Title
            # Removes leading numbers and dots (e.g., "1. OBEROI SKYCITY" -> "oberoi-skycity")
            clean_name = re.sub(r'^\d+\.\s*', '', project)
            proj_id = clean_name.lower().replace(" ", "-")
            proj_title = clean_name.title()

            project_data = {
                "title": proj_title,
                "subtitle": "", # Manually update subtitles in JSON later
                "thumbnail": "",
                "images": []
            }

            # 3. Traverse inside the Project Folder
            for item in os.listdir(proj_path):
                item_path = os.path.join(proj_path, item)

                # Scenario A: Loose images directly inside the project folder
                if os.path.isfile(item_path) and os.path.splitext(item)[1].lower() in ALLOWED_EXTENSIONS:
                    # Use filename without extension, replace underscores with spaces
                    label = os.path.splitext(item)[0].replace("_", " ").title()
                    src = item_path.replace("\\", "/") # Normalize slashes for the web
                    project_data["images"].append({"label": label, "src": src})

                # Scenario B: Sub-folders (e.g., "Living Room")
                elif os.path.isdir(item_path):
                    for sub_item in os.listdir(item_path):
                        sub_item_path = os.path.join(item_path, sub_item)
                        if os.path.isfile(sub_item_path) and os.path.splitext(sub_item)[1].lower() in ALLOWED_EXTENSIONS:
                            label = item.title() # Use the folder name as the label
                            src = sub_item_path.replace("\\", "/")
                            project_data["images"].append({"label": label, "src": src})

            # Set the first image as the thumbnail for the main page cards
            if project_data["images"]:
                project_data["thumbnail"] = project_data["images"][0]["src"]

            portfolio[category][proj_id] = project_data

    # 4. Save to JSON file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(portfolio, f, indent=4)
        
    print(f"Success! '{OUTPUT_FILE}' has been generated/updated.")

if __name__ == "__main__":
    generate_portfolio_json()