// script.js
import { renderContent } from './renderContent.js';

function router() {
  // cria rotas do site
  const routes = {    
    '#about': () => {
      renderContent('<h1>Sobre mim</h1><p>Olá! Meu nome é Arthur e sou um desenvolvedor web em formação. Gosto de aprender coisas novas e resolver problemas complexos. No meu tempo livre gosto de programar jogos.</p>');
    },
    '#formacao-educacional': () => {
      renderContent(
        `<h1>Formação Educacional</h1>
        <p> Eu atualmente estou cursando Engenharia de Software na Uninter e tenho experiência em programação com React, Node, e outros frameworks e bibliotecas. Além disso, eu tenho conhecimento em versionamento com git e github.</p>`);
    },
    '#meu-portfolio': () => {
      renderContent('<h1>Meu Portfolio</h1><p> Veja alguns de meus projetos acessando <a href="https://github.com/arthurwieb" target="_blank"> meu Github </a> </p>');
    },
    '#contato': () => {
      renderContent(
        `<h1>Contato</h1>
        <form action="https://formspree.io/arthurwieb@gmail.com" method="POST">
          <label>
            Nome:
            <input type="text" name="name" required>
          </label>
          <label>
            Email:
            <input type="email" name="email" required>
          </label>
          <label>
            Mensagem:
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      `);
    },
  };

  // obtem o hash da pagina para controlar a roda
  const currentRoute = window.location.hash; 

  if (routes[currentRoute]) {
    routes[currentRoute]();
  } else {
    routes['#about']();    
  }
}

window.addEventListener('hashchange', router);

router();