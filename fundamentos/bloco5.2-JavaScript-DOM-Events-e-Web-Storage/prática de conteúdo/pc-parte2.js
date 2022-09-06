

    // 1. Crie um irmão para `elementoOndeVoceEsta`.
    
    const pai1 = document.getElementById('pai'); // 
    const irmaoElementoOndeVoceEsta = document.createElement('section'); 
    irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
    pai.appendChild(irmaoElementoOndeVoceEsta); // 
    
    // 2. Crie um filho para `elementoOndeVoceEsta`.
    
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); 
    const filhoElementoOndeVoceEsta = document.createElement('section'); 
    filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
    elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta); 

    // 3. Crie um filho para `primeiroFilhoDoFilho`.
    
    const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); 
    const filhoPrimeiroFilhoDoFilho = document.createElement('section'); 
    filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
    primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

    // 4. A partir desse filho criado, acesse `terceiroFilho`.
    const terceiroFilho = filhoPrimeiroFilhoDoFilho
      .parentElement 
      .parentElement 
      .nextElementSibling; 
    console.log(terceiroFilho);


    //Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
    
    const pai = document.getElementById('pai');
    const todosOsFilhos = pai.childNodes;

    for (let index = todosOsFilhos.length - 1; index >= 0; index -= 1) {
      const filhoAtual = todosOsFilhos[index];
      if (filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
      }
    }

    const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); 
    segundoEUltimoFilhoDoFilho.remove();
  