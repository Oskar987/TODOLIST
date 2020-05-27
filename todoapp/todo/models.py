from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=400, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False, null=False)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title
