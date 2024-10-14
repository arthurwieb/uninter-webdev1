// função que renderiza o conteudo dentro da div 'content'
export function renderContent(content) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = content;    
  }