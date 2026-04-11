import sys
import colorsys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def create_transparent_logo(path_in, path_out):
    img = Image.open(path_in).convert("RGBA")
    pixels = img.load()
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if a == 0: continue
            
            # 1. Invert
            ir, ig, ib = 255-r, 255-g, 255-b
            
            # 2. Hue rotate 180
            h, s, v = colorsys.rgb_to_hsv(ir/255.0, ig/255.0, ib/255.0)
            h = (h + 0.5) % 1.0
            
            # Brightness 1.2
            v = min(1.0, v * 1.2)
            
            rr, rg, rb = colorsys.hsv_to_rgb(h, s, v)
            rr, rg, rb = int(rr*255), int(rg*255), int(rb*255)
            
            # 3. Alpha based on max intensity (screen behavior)
            alpha = max(rr, rg, rb)
            
            if alpha > 0:
                # Pre-multiply un-do so that when it alpha blends, it gives the target intensity.
                rr = min(255, int(rr * 255 / alpha))
                rg = min(255, int(rg * 255 / alpha))
                rb = min(255, int(rb * 255 / alpha))
            
            pixels[x, y] = (rr, rg, rb, alpha)
            
    img.save(path_out)

create_transparent_logo(r"c:\Users\Administrator\Desktop\BT\src\assets\images\brilliant_technologies_logo.png", r"c:\Users\Administrator\Desktop\BT\src\assets\images\logo_transparent.png")
