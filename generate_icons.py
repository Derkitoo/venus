import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('icons', exist_ok=True)

def create_gradient_circle(size, pad_ratio=0.1):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    pad = int(size * pad_ratio)
    
    # Draw background rounded rect or circle with gradient simulation
    radius = size // 2 - pad
    center = size // 2
    
    for r in range(radius, 0, -1):
        ratio = 1.0 - (r / radius)
        # Gradient from #ea580c (234, 88, 12) to #db2777 (219, 39, 119)
        red = int(234 * (1 - ratio) + 219 * ratio)
        green = int(88 * (1 - ratio) + 39 * ratio)
        blue = int(12 * (1 - ratio) + 119 * ratio)
        draw.ellipse([center - r, center - r, center + r, center + r], fill=(red, green, blue, 255))
        
    # Draw an elegant planetary ring in translucent white/gold
    ring_box = [pad // 2, int(center - radius * 0.35), size - pad // 2, int(center + radius * 0.35)]
    draw.arc(ring_box, start=190, end=350, fill=(255, 255, 255, 180), width=max(2, size // 35))
    draw.arc(ring_box, start=10, end=170, fill=(255, 255, 255, 120), width=max(2, size // 45))
    
    # Mars & Venus small symbolic dots or accents
    accent_r = size // 16
    draw.ellipse([center - radius//2 - accent_r, center - radius//3 - accent_r,
                  center - radius//2 + accent_r, center - radius//3 + accent_r],
                 fill=(255, 237, 213, 240))
    
    draw.ellipse([center + radius//2 - accent_r, center + radius//3 - accent_r,
                  center + radius//2 + accent_r, center + radius//3 + accent_r],
                 fill=(252, 231, 243, 240))
    
    return img

# Generate icons
create_gradient_circle(512, pad_ratio=0.15).save('icons/icon-maskable-512.png', 'PNG')
create_gradient_circle(512, pad_ratio=0.08).save('icons/icon-512.png', 'PNG')
create_gradient_circle(192, pad_ratio=0.08).save('icons/icon-192.png', 'PNG')
create_gradient_circle(180, pad_ratio=0.05).save('icons/apple-touch-icon.png', 'PNG')
create_gradient_circle(32, pad_ratio=0.02).save('icons/favicon.png', 'PNG')

print("PWA Icons generated successfully in ./icons/")
