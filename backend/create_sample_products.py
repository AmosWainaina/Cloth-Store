import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from shop.models import Product

# Sample products data
products_data = [
    {
        'title': 'Classic Men\'s T-Shirt',
        'price': 25.99,
        'image': 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
        'category': 'men',
        'description': 'Comfortable cotton t-shirt for everyday wear',
        'stock': 50
    },
    {
        'title': 'Women\'s Summer Dress',
        'price': 45.99,
        'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
        'category': 'women',
        'description': 'Light and breezy summer dress perfect for warm weather',
        'stock': 30
    },
    {
        'title': 'Men\'s Denim Jeans',
        'price': 65.99,
        'image': 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
        'category': 'men',
        'description': 'Classic blue denim jeans with perfect fit',
        'stock': 40
    },
    {
        'title': 'Women\'s Blouse',
        'price': 35.99,
        'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
        'category': 'women',
        'description': 'Elegant blouse for office or casual wear',
        'stock': 25
    },
    {
        'title': 'Unisex Hoodie',
        'price': 55.99,
        'image': 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
        'category': 'unisex',
        'description': 'Comfortable hoodie for all seasons',
        'stock': 35
    },
    {
        'title': 'Women\'s Skirt',
        'price': 29.99,
        'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
        'category': 'women',
        'description': 'Stylish skirt for various occasions',
        'stock': 20
    },
    {
        'title': 'Men\'s Polo Shirt',
        'price': 39.99,
        'image': 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
        'category': 'men',
        'description': 'Classic polo shirt for smart casual look',
        'stock': 45
    },
    {
        'title': 'Women\'s Jacket',
        'price': 79.99,
        'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
        'category': 'women',
        'description': 'Stylish jacket for cooler weather',
        'stock': 15
    }
]

# Create products
for product_data in products_data:
    product, created = Product.objects.get_or_create(
        title=product_data['title'],
        defaults=product_data
    )
    if created:
        print(f"Created product: {product.title}")
    else:
        print(f"Product already exists: {product.title}")

print("Sample products created successfully!")