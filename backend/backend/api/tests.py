from django.test import TestCase

# Create your tests here.

from .models import api


class ApiModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        api.objects.create(title='first todo')
        api.objects.create(description='a description here')

    def test_title_content(self):
        todo = api.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'first todo')

    def test_description_content(self):
        todo = api.objects.get(id=2)
        expected_object_name = f'{todo.description}'
        self.assertEquals(expected_object_name, 'a description here')