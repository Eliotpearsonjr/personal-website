# convert.py
from PIL import Image
import sys
import os

def convert_png_to_webp(input_path, output_path):
    with Image.open(input_path) as img:
        img.save(output_path, format='WEBP', quality=80)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python convert.py input.png output.webp")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    convert_png_to_webp(input_file, output_file)
