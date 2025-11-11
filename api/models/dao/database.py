from psycopg2.extras import RealDictCursor
from psycopg2 import connect
from decouple import config
from decouple import Config, RepositoryEnv


# Config
env_path = ".env"
config = Config(repository=RepositoryEnv(env_path))

senha_banco_de_dados = config('DATA_BASE_PASSWORD')

CONEXAO = connect(
    host="localhost",
    database="sales_smart_phones_silver",
    user="kevinsoffa",
    password=senha_banco_de_dados,
    cursor_factory=RealDictCursor
)


