from horizon import tables
from mistralclient.api import client as mistral_client

from demo_dashboard.dashboards.mistral.executions.tables import ExecutionsTable


class IndexView(tables.DataTableView):
    table_class = ExecutionsTable
    template_name = 'mistral/executions/index.html'

    def get_data(self):
        client = mistral_client.Client()
        return [item for wb in client.workbooks.list()
                for item in client.executions.list(wb.name)]
