from fastapi import FastAPI
from .controller.router import router

app = FastAPI(
    title="API de Vendas SmartPhones Silver",
    version="1.0.0",
    description="API para consultar dados de vendas de smartphones."
)

# Inclui o router principal
app.include_router(router)
