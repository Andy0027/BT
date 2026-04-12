import sys
import os
try:
    from PIL import Image, ImageChops
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def crop_and_square(path_in, path_out):
    img = Image.open(path_in).convert("RGBA")
    
    # 1. Trim white background
    # Let's manually find the bounding box for white (255, 255, 255)
    width, height = img.size
    left, top, right, bottom = width, height, 0, 0
    
    pixels = img.load()
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if (r < 250 or g < 250 or b < 250): # Not white
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
    
    if left < right and top < bottom:
        # Pad with 1% of the logo size just to avoid clipping
        logo_w = right - left
        logo_h = bottom - top
        padding = 0
        
        img = img.crop((left - padding, top - padding, right + padding, bottom + padding))
    
    # 2. Make it square
    w, h = img.size
    size = max(w, h)
    new_img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
    new_img.paste(img, ((size - w) // 2, (size - h) // 2))
    
    # 3. Resize to 128x128 for a sharp favicon
    new_img = new_img.resize((128, 128), Image.Resampling.LANCZOS)
    
    new_img.save(path_out)

crop_and_square(
    r"c:\Users\Administrator\Desktop\BT\src\assets\images\Minimalist cloud network design.png",
    r"c:\Users\Administrator\Desktop\BT\public\favicon.png"
)
