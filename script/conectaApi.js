async function listaProdutos () {
    const conexao = await fetch("https://json-server-rho-lovat.vercel.app/produtos"); 
    const conexaoConvertida = await conexao.json(); 

    return conexaoConvertida;
}

async function criarProduto(nome, valor, imagem, id) {
    const conexao =  await fetch("https://json-server-rho-lovat.vercel.app/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        })
    });

    if (!conexao.ok) {  
        throw new Error ("Não foi possível cadastrar o produto!");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


async function excluirProduto(ProdutoId) {
    try {
        const conexao = await fetch(`https://json-server-rho-lovat.vercel.app/produtos/${ProdutoId}`, {
            method: "DELETE",
        });
        const data = await conexao.json();
        console.log(data); 
    } catch (error) { 
        console.error("Erro ao deletar produto:", error);
        throw error;
    }  
}



// em contrução o campo de busca
async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`https://json-server-rho-lovat.vercel.app/produtos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listaProdutos,
    criarProduto, 
    buscaProduto,
    excluirProduto
}
