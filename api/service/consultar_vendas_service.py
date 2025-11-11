from ..repository.consultar_vendas_repository import SalesRepository
from fastapi import HTTPException


def listar_vendas_service():
    try:
        repo = SalesRepository()
        vendas = repo.get_all_sales()
        return vendas
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Falha interna ao consultar vendas. Detalhe: {str(e)}"
        )