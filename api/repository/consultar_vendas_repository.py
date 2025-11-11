from api.models.dao.utils.sql_select import executar_select
from api.models.dao.database import CONEXAO as _c


class SalesRepository:
    """
    Repository responsável por acessar a tabela sales_smart_phones_silver
    e retornar os registros do banco de dados.
    """

    def __init__(self):
        self.conexao = _c
        self.tabela = '"public"."sales_smart_phones_silver"'
  # aspas externas para case exato
 # 👈 schema incluído

    def get_all_sales(self):
        """
        Retorna todos os registros da tabela de vendas.
        """
        try:
            with self.conexao.cursor() as cursor:
                resultados = executar_select(
                    cursor=cursor,
                    tabela=self.tabela,
                    colunas=["name", "price", "quantity_sold", "sale_date"]
                )

                vendas = [
                    {
                        "name": row["name"],
                        "price": row["price"],
                        "quantity_sold": row["quantity_sold"],
                        "sale_date": row["sale_date"],
                    }
                    for row in resultados
                ]
                return vendas

        except Exception as e:
            print(f"❌ Erro ao buscar vendas no banco: {e}")
            return []
