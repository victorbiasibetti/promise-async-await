# Project Promises - Async-Await

Este projeto visa explicar como uma *Promise* funciona e seu funcionamento juntamente com Async-Await e como isso pode ser utilizado.

## O que são Promises?
Promises, como o nome diz, é uma promessa de que uma função vai ser executa. Quando? quando der.

Vejamos esse pequeno trecho de código.

```javascript
function f(){
  return new Promise(resolve => {
      setTimeout(() => {
        console.log('f');
        resolve();
      }, 2000);
    });
}

(() => {
  console.log('begin')
  f();
  console.log('end')
 })();
```
Baseado no código acima, qual será o resultado no console?

 - a) begin - f - end
 - b) begin - end - f
 - c) end - f - begin
 - d) end - begin - f
 - e) não faço ideia

***??????????***

Acredite, o correto é a **b**, mas vamos aprender o porque.

Como dito acima, promises são promessas de que algo vai ser executado, a função que fica dentro de uma promise fica como *pending* enquanto esperam sua vez de ser
executada pela thread principal enquanto o resto do código segue sendo executado normalmente (como se nada tivesse acontecido).

Isso se deve pelo Event Loop do Node (se quiser um projeto com exemplos explicando Event Loop, deixa uma issue aberta :)

Tá, então f() vai ser executado __quando der__, mas e como faz para executar de maneira ***sincrona***? Ai que vem uma das formas, o Async Await.

## Async-Await (o modo bonito de ver o assíncrono)
Pessoalmente, acho muito elegante o modo da escrita do async-await no código. Visualmente mais legível do que encadear callbacks (não abordado aqui) ou 
utilizando *resolve()* dentro das Promises.

Mas e como o async-await funciona?

O async/await trabalha com o código baseado em Promises, porém esconde as promessas para que a leitura seja mais fluída e simples de entender.
Se a Promise se resolver normalmente, o objeto-Promise retornará o valor. Caso lance uma exceção, podemos usar o try/catch como estamos acostumados em programas síncronos.
Pode ver uma explicação mais detalhada aqui na [Alura](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar)

Vamos ao código.

```javascript
function f(){
  return new Promise(resolve => {
      setTimeout(() => {
        console.log('f');
        resolve();
      }, 2000);
    });
}

(async () => {
    console.log('begin')
    await f();
    console.log('end')
})();
```
Então, baseado no código acima, qual será o resultado no console?

 - a) begin - f - end
 - b) begin - end - f
 - c) end - f - begin
 - d) end - begin - f
 - e) não faço ideia

Sim, vai ser a opção **a** :clap::clap::clap::clap:

### Obrigado pela leitura :book:!! 
### Bora praticar?? :rocket:


