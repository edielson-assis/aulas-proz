let notebook = document.createElement("div");

notebook.innerHTML = `
    <h2 id="produto">Notebook ideapad3i - Lenovo</h2>
    <img src="https://uae.microless.com/cdn/category_files/6202d45861ab1083b6fa6f7254d95c23.jpg" width=300px hegth=400px alt="Notebook Lenovo">
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