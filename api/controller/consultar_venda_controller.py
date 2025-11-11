from fastapi import APIRouter, HTTPException
from ..service.consultar_vendas_service import listar_vendas_service


router = APIRouter(tags=["Sales"])

@router.get("/sales", summary="Listar todas as vendas", description="Retorna todas as vendas registradas no banco de dados.")
def listar_vendas_controller():
    try:
        vendas = listar_vendas_service()
        if not vendas:
            raise HTTPException(status_code=404, detail="Nenhuma venda encontrada.")
        return {"status": "success", "data": vendas}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
