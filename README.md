# Status-Github
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp;
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) &nbsp;
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

## Tecnologias e conceitos 💻

- Node.js
- Express
- Redis

## Descrição

Essa API consome dados fornecidos pela GitHub Status API, retornados em formato JSON, exibindo informações como id, name, url, timezone e última atualização.

A aplicação também utiliza Redis como cache, armazenando a última requisição realizada, permitindo que esses dados sejam reutilizados em outra rota sempre que solicitados, melhorando o desempenho e reduzindo chamadas desnecessárias à API externa.

## Como usar

### clone
clone o projeto

```bash
git clone https://github.com/juantf16/status-github.git
```

### Start
iniciar o projeto

```bash
cd caminho\do\clone
npm comando-pra-iniciar #ou node app.js
```

# API Endpoints 📍
| route               | description                                          
|---------------------|-----------------------------------------------------
| <kbd>GET /</kbd>| Consome os dados da  Github Status API retorna o JSON recebido e armazena a resposta no Redis por 20 segundos. Após esse tempo, o cache é removido. [Detalhes](#get-auth-detail)
| <kbd>GET /last-request </kbd>| Retorna  a ultima requisição armazenada no redis. Caso não tenha retorna essa mensagem 'Nenhnuma request guardada use a rota /, para fazer uma nova'.     [Detalhes](#get2-auth-detail)

<h3 id="get-auth-detail">GET /</h3>

**RESPOSTA**
```json
{
    "page": {
		"id": "kctbh9vrtdwd",
		"name": "GitHub",
		"url": "https://www.githubstatus.com",
		"time_zone": "Etc/UTC",
		"updated_at": "2026-02-02T21:15:54.520Z"
	}
}
...
```
<h3 id="get2-auth-detail">GET /last-request</h3>

**RESPOSTA - 1**

retorna a ultima requisição armazenada no redis

```json

{
     "page": {
		"id": "kctbh9vrtdwd",
		"name": "GitHub",
		"url": "https://www.githubstatus.com",
		"time_zone": "Etc/UTC",
		"updated_at": "2026-02-02T21:15:54.520Z"
	}
}
...
```

**RESPOSTA - 2**

caso não tenha nenhum dados guardado no redis, retorna essa mensagem

```send
Nenhnuma request guardada use a rota /, para fazer uma nova
```

## Observações

Este projeto foi feito somente para fins de **aprendizado na prática de desenvolvimento backend**, não sendo destinado a uso em produção. Ele explora conceitos como consumo de APIs externas, cache com Redis e boas práticas na construção de APIs. 