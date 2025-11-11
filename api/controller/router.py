from fastapi import APIRouter
from .consultar_venda_controller import router as vendas_router

router = APIRouter(prefix="/kevinsoffa")

# Inclui as rotas de vendas dentro do router principal
router.include_router(vendas_router)
