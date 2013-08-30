import json

from django import http
from django.utils.translation import ugettext_lazy as _
from django.views import generic

class IndexView(generic.TemplateView):
    template_name = 'temper/angular/index.html'

