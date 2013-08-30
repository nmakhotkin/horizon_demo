from django.utils.translation import ugettext_lazy as _

import horizon
from demo_dashboard.dashboards.temper import dashboard


class Angular(horizon.Panel):
    name = _("Angular")
    slug = 'angular'

class ProjectsDirect(horizon.Panel):
    name = _("Projects")
    slug = '#/projects'
    
class ServicesDirect(horizon.Panel):
    name = _("Services")
    slug = '#/services'

dashboard.TemperDash.register(Angular)
dashboard.TemperDash.register(ProjectsDirect)
dashboard.TemperDash.register(ServicesDirect)


