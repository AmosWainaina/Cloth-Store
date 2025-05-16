from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def root_view(request):
    return HttpResponse("Welcome to the Cloth-Store Backend API. Use /api/ for API endpoints or /admin/ for admin panel.")

urlpatterns = [
    path('', root_view, name='root'),
    path('admin/', admin.site.urls),
    path('api/', include('shop.urls')),
    
]
