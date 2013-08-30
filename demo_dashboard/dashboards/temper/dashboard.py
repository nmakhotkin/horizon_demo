from django.utils.translation import ugettext_lazy as _

import horizon


class TemperDash(horizon.Dashboard):
    name = _("Temper")
    slug = "temper"
    panels = ('angular', '#/projects', '#/services',)
    default_panel = 'angular'
    roles = ('admin',)


horizon.register(TemperDash)
