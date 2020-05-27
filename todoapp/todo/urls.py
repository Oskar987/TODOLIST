from rest_framework import routers
from .api import TodoViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register('api/todo', TodoViewSet, 'todo')
router.register('api/categories', CategoryViewSet, 'categories')

urlpatterns = router.urls
