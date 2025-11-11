import express from 'express';
import { create } from 'express-handlebars';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

// Correções para usar __dirname no ambiente ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const API_URL = 'http://127.0.0.1:8000/kevinsoffa/sales'; // SUA API LOCAL

// 1. Configuração do Handlebars
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// 2. Arquivos estáticos (Bootstrap, Chart.js, CSS customizado)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/chart.js', express.static(path.join(__dirname, 'node_modules/chart.js/dist')));


// 3. Rota principal para a Landing Page
app.get('/', async (req, res) => {
    let salesData = [];
    let totalRevenue = 0;
    let totalQuantitySold = 0; 

    try {
        console.log(`Buscando dados em: ${API_URL}`);
        
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        
        const apiResponse = await response.json();
        
        if (apiResponse.status === 'success' && Array.isArray(apiResponse.data)) {
            salesData = apiResponse.data;
            
            // CÁLCULOS TOTAIS COM COERÇÃO DE TIPO (parseFloat)
            const totals = salesData.reduce((acc, sale) => {
                // Garantir que price e quantity_sold sejam tratados como números
                const price = parseFloat(sale.price) || 0;
                const quantity = parseInt(sale.quantity_sold) || 0;
                
                acc.revenue += (price * quantity);
                acc.quantity += quantity;
                return acc;
            }, { revenue: 0, quantity: 0 });

            totalRevenue = totals.revenue;
            totalQuantitySold = totals.quantity;

            // *** LINHAS DE DEBUG ***
            // console.log('--- DEBUG ---');
            // console.log(`Receita Calculada: ${totalRevenue}`);
            // console.log(`Quantidade Total: ${totalQuantitySold}`);
            // console.log('---------------');
        }

        // Prepara os dados agregados para o Gráfico de Barras
        const aggregatedSales = salesData.reduce((acc, sale) => {
            const productName = sale.name;
            const totalSold = acc[productName] ? acc[productName].totalSold + (parseInt(sale.quantity_sold) || 0) : (parseInt(sale.quantity_sold) || 0);
            acc[productName] = { totalSold };
            return acc;
        }, {});
        
        const productNames = JSON.stringify(Object.keys(aggregatedSales));
        const quantities = JSON.stringify(Object.values(aggregatedSales).map(item => item.totalSold));

        const rawSalesData = JSON.stringify(salesData);

        // Renderiza a página
        res.render('home', {
            title: 'Dashboard de Vendas de Celulares',
            productNames: productNames, 
            quantities: quantities,     
            salesCount: salesData.length,

            // Passa os valores formatados
            totalRevenue: totalRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), 
            totalQuantitySold: totalQuantitySold.toLocaleString('pt-BR'),
            
            // Passa os valores formatados
            totalRevenue: totalRevenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), 
            totalQuantitySold: totalQuantitySold.toLocaleString('pt-BR'),

            rawSalesData: rawSalesData, 
            uniqueProducts: Object.keys(aggregatedSales) 
        });

    } catch (error) {
        console.error('Erro fatal ao buscar dados da API:', error.message);
        res.render('home', {
            title: 'Erro no Dashboard',
            error: `Não foi possível carregar os dados. Verifique se sua API está rodando em ${API_URL}. Detalhe: ${error.message}`
        });
    }
});


app.listen(PORT, () => {
    console.log(`\n🚀 Dashboard rodando em: http://localhost:${PORT}`);
    console.log(`Certifique-se que sua API está em: ${API_URL}\n`);
});