# Api-MongoDB
Api feita com NodeJs + Mongoose + MongoDB para a disciplina de Tecnologias para gestão de dados, a conexão com o banco é dado pelo cloud do MongoDB ou pela conexão com o proprio servidor da faculdade

## Operações exemplos

Itens POST
{
	"QtdItens": 3,
	"ValorTotal": 30,
	"produto": "62aa360904ec15485a9336e3"
}

Itens PUT
{
	"QtdItens": 2,
	"ValorTotal": 32,
	"produto":"62aa35df04ec15485a9336dd"
}


Pedidos POST
{
	"cliente":"62b5acf117e8a4860ddaff9e",
	"item" : [
		"62b4be2e8c810c5ab9f27c97",
		"62b5ad807ef79b32484ff906"
	]
}

Pedidos PUT
{
	"cliente":"62b5acf117e8a4860ddaff9e"
}

Cliente POST
{
	"nome":"Lucas",
	"telefone":"(55)99192-9999",
	"Bairro":"Centro",
	"Pagamento":"Pix"
}

Cliente PUT
{
	"nome": "Pedro"
}

Produtos POST
{
    "descricao": "Refil guarana",
    "valor": 12,
    "QtdProduto": 1
}

Produtos PUT
{
    "descricao": "Hamburguer de carne",
    "valor": 16.98,
    "QtdProduto": 1
}
