# Fashion Store - Full Stack E-commerce Application

A modern, full-stack e-commerce application built with React frontend and Django REST API backend.

## 🚀 Features

### Frontend (React)
- Modern, responsive UI with Tailwind CSS
- User authentication (login/register)
- Product browsing with filters and search
- Shopping cart functionality
- Checkout process with multiple payment options
- Toast notifications for user feedback

### Backend (Django REST API)
- RESTful API with Django REST Framework
- JWT authentication
- Product management
- Cart and order management
- User registration and authentication
- Admin panel for content management

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Axios for API calls
- React Icons
- React Toastify

### Backend
- Django 5.2
- Django REST Framework
- JWT Authentication
- SQLite Database
- CORS Headers

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fashion-store
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up the database**
   ```bash
   npm run migrate
   ```

4. **Create sample data**
   ```bash
   npm run seed-data
   ```

5. **Start both frontend and backend**
   ```bash
   npm run dev
   ```

### Manual Setup

#### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # Optional: create admin user
python create_sample_products.py  # Create sample products
python manage.py runserver
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🌐 API Endpoints

### Authentication
- `POST /auth/login/` - User login
- `POST /auth/register/` - User registration
- `POST /auth/refresh/` - Refresh JWT token

### Products
- `GET /api/products/` - List all products
- `GET /api/products/{id}/` - Get product details
- `GET /api/products/categories/` - Get product categories

### Cart
- `GET /api/cart/` - Get user's cart
- `POST /api/cart/add_item/` - Add item to cart
- `POST /api/cart/update_item/` - Update cart item quantity
- `DELETE /api/cart/remove_item/` - Remove item from cart
- `DELETE /api/cart/clear/` - Clear entire cart

### Orders
- `GET /api/orders/` - List user's orders
- `POST /api/orders/` - Create new order

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Aesthetics**: Clean, professional design with smooth animations
- **User-Friendly**: Intuitive navigation and clear call-to-actions
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

## 🔧 Development

### Project Structure
```
fashion-store/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   └── assets/         # Images and static files
│   └── public/
├── backend/                 # Django application
│   ├── backend/            # Django project settings
│   ├── shop/              # Main app with models, views, serializers
│   └── requirements.txt
└── package.json            # Root package.json for scripts
```

### Available Scripts

- `npm run dev` - Start both frontend and backend
- `npm run frontend` - Start only frontend
- `npm run backend` - Start only backend
- `npm run install-all` - Install all dependencies
- `npm run migrate` - Run database migrations
- `npm run seed-data` - Create sample products

## 🚀 Deployment

### Frontend Deployment
The React app can be deployed to platforms like:
- Netlify
- Vercel
- GitHub Pages

### Backend Deployment
The Django API can be deployed to:
- Heroku
- DigitalOcean
- AWS
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Django team for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and testers

## 📞 Support

For support, email support@fashionstore.com or create an issue in the repository.