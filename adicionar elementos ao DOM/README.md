<h1>Adicionando elementos pelo DOM</h1>
<h2>Instruções do projeto</h2>
<p>Crie um projeto com dois arquivos: index.html e script.js. 
  No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.
</p>
<p>
Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. 
  O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. 
  Procure usar o método simples e o método complexo, ensinados neste tópico. 
</p>

<h3>Código html</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionando elementos pelo DOM</title>
    <script src="./script.js" defer></script>
</head>
<body>
    
</body>
</html>
```
<h3>Código javascript</h3>

```
let notebook = document.createElement("div");

notebook.innerHTML = `
    <h2 id="produto">Notebook ideapad3i - Lenovo</h2>
    <h3>Descrição</h3>
    <ul>
        <li>Intel Core i3-10110U</li>
        <li>Memória 4GB</li>
        <li>Armazenamento 1TB</li>
        <li>Tela antirreflexo</li>
        <li>Privacidade de Webcam - Câmera HD</li>
        <li>Dolby Audio</li>
    </ul>

    <h3>Preço</h3>
    <p>R$ 1.855,60</p>
`
let produto = document.querySelector("body");
produto.appendChild(notebook);
```
