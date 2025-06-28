from django.core.management.base import BaseCommand
from shop.models import Product

class Command(BaseCommand):
    help = 'Populate the database with sample products'

    def handle(self, *args, **options):
        # Clear existing products
        Product.objects.all().delete()
        
        products = [
            {
                'title': 'Classic White T-Shirt',
                'price': 29.99,
                'image': 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'unisex',
                'description': 'Comfortable cotton t-shirt perfect for everyday wear',
                'stock': 50
            },
            {
                'title': 'Elegant Black Dress',
                'price': 89.99,
                'image': 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'women',
                'description': 'Sophisticated black dress for special occasions',
                'stock': 25
            },
            {
                'title': 'Casual Denim Jeans',
                'price': 79.99,
                'image': 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'unisex',
                'description': 'Classic blue denim jeans with perfect fit',
                'stock': 40
            },
            {
                'title': 'Summer Floral Blouse',
                'price': 54.99,
                'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'women',
                'description': 'Light and breezy floral blouse for summer',
                'stock': 30
            },
            {
                'title': 'Men\'s Formal Shirt',
                'price': 69.99,
                'image': 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'men',
                'description': 'Professional white dress shirt for business',
                'stock': 35
            },
            {
                'title': 'Cozy Knit Sweater',
                'price': 94.99,
                'image': 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'women',
                'description': 'Warm and comfortable knit sweater',
                'stock': 20
            },
            {
                'title': 'Athletic Joggers',
                'price': 49.99,
                'image': 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'unisex',
                'description': 'Comfortable joggers for workout and casual wear',
                'stock': 45
            },
            {
                'title': 'Vintage Leather Jacket',
                'price': 199.99,
                'image': 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'unisex',
                'description': 'Classic leather jacket with vintage style',
                'stock': 15
            },
            {
                'title': 'Striped Polo Shirt',
                'price': 44.99,
                'image': 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'men',
                'description': 'Classic striped polo shirt for casual occasions',
                'stock': 38
            },
            {
                'title': 'Bohemian Maxi Dress',
                'price': 119.99,
                'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'women',
                'description': 'Flowing maxi dress with bohemian patterns',
                'stock': 22
            },
            {
                'title': 'Casual Hoodie',
                'price': 64.99,
                'image': 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'unisex',
                'description': 'Comfortable hoodie perfect for cool weather',
                'stock': 42
            },
            {
                'title': 'Business Blazer',
                'price': 149.99,
                'image': 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'men',
                'description': 'Professional blazer for business meetings',
                'stock': 18
            },
            {
                'title': 'Flowy Summer Skirt',
                'price': 39.99,
                'image': 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'women',
                'description': 'Light and airy skirt perfect for summer days',
                'stock': 33
            },
            {
                'title': 'Graphic Print T-Shirt',
                'price': 34.99,
                'image': 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'unisex',
                'description': 'Trendy graphic t-shirt with unique design',
                'stock': 55
            },
            {
                'title': 'Elegant Evening Gown',
                'price': 299.99,
                'image': 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 5,
                'category': 'women',
                'description': 'Stunning evening gown for special events',
                'stock': 8
            },
            {
                'title': 'Casual Chino Pants',
                'price': 59.99,
                'image': 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating': 4,
                'category': 'men',
                'description': 'Versatile chino pants for casual and semi-formal wear',
                'stock': 41
            }
        ]

        for product_data in products:
            Product.objects.create(**product_data)
            
        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {len(products)} products')
        )