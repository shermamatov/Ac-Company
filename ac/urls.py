from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('services/', TemplateView.as_view(template_name = 'index.html')),
    path('services/heatin_repair/', TemplateView.as_view(template_name = 'index.html')),
    path('about_us/', TemplateView.as_view(template_name = 'index.html')),
    path('best_offers/', TemplateView.as_view(template_name = 'index.html')),
    path('best_offers12/', TemplateView.as_view(template_name = 'index.html')),
    path('photos/', TemplateView.as_view(template_name = 'index.html')),
    path('review/', TemplateView.as_view(template_name = 'index.html')),
    path('book/', TemplateView.as_view(template_name = 'index.html')),
    path('location/', TemplateView.as_view(template_name = 'index.html')),
    
]
