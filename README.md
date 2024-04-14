# JSON Server | In Memory

API desenvolvida para ser semelhante ao JSONServer, porém para ser gerido na memória, sem armazenamento em disco.

- Para executar:
```powershell
npm install pvvdb
npx pvvdb
```

Output:
```powershell
$ Ouvindo na porta 3001
```

Não foi realizada verificação se os objetos possuem o parâmetro `id`, porém ele é utilizado para a busca destes elementos!

# Rotas disponíveis
- GET
  - `/obj` - Retorna todos os objetos deste tipo;
  - `/obj/id` - Retorna o objeto com o `id` solicitado
- POST
  - `/obj` c/ body `json` - Armazena o objeto no banco.
- PUT
  - `/obj/id` c/ body `json` - Altera o objeto com o id no banco.
- DELETE
  - `/obj/id` - Remove o objeto cujo `id` é igual ao fornecido.