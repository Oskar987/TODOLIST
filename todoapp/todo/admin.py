from django.contrib import admin
from .models import Todo, Category

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'category', 'description', 'date', 'done')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title')
    list_editable = ('done',)
    list_filter = ('done', 'category')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('title',)
    search_fields = ('title',)


admin.site.register(Todo, TodoAdmin)
admin.site.register(Category, CategoryAdmin)
