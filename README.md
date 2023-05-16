# desculpe-me
gerador de desculpas esfarrapadas para fugir dos seus problemas 🤷‍♂️.

## requisitos
ter boas desculpas para contribuir.

## contribuindo
para contribuir, basta adicionar suas desculpas no arquivo [`src/messages.txt`](https://github.com/desculpe-me/desculpe-me-app/blob/main/src/desculpas.txt) e enviar um pull request.

## como funciona
este repositório está conectado com o [Cloudflare Pages](https://pages.cloudflare.com), ao receber um novo commit é executado o script `npm run build` que gera as páginas estáticas html das mensagens do arquivo `src/messages.txt` usando hash md5 como nome do arquivo. junto com este script também é gerado um módulo nodejs ~~(de forma duvidosa)~~ com a lista de arquivos gerados que posteriormente é usado nas [Cloudflare Worker](https://workers.cloudflare.com) para mostrar um item aleatório toda vez que você acessa a raiz do site.

---

inspirado em [whatthecommit.com](https://whatthecommit.com)
