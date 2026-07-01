// Função para testar conexão com API
async function testAPIConnection() {
    try {
        console.log("🔧 Testando conexão com API...");
        let response = await fetch(`${API_URL}?action=Motoboys`);
        console.log("Status HTTP:", response.status);
        let data = await response.json();
        console.log("Resposta da API:", data);
        return data;
    } catch(e) {
        console.error("❌ Erro na conexão:", e);
    }
}

// Chame isso no console do navegador (F12) para debugar
// testAPIConnection();
