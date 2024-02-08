const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "let minhaVar = 10;",
        "variável minhaVar = 10;",
        "minhaVar = 10;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas opções é um tipo de dado primitivo em JavaScript?",
      respostas: [
        "Objecto",
        "Matriz",
        "Corda",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreveria um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
        "para (i < 5; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas funções converte uma string para um número em JavaScript?",
      respostas: [
        "parseInt()",
        "toString()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método você usaria para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeUltimo()",
        "deleteUltimo()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retorna o tipo de uma variável",
        "Verifica se duas variáveis são do mesmo tipo",
        "Converte uma variável para outro tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
        "// Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(typeof([]))?",
      respostas: [
        "objeto",
        "matriz",
        "corda",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector(`#quiz`)
  const template = document.querySelector('template')
  
   const corretas = new Set()
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
   // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
         const estaCorreta = event.target.value == item.correta
         
         corretas.delete(tiem)
         if(estaCorreta) {
           corretas.add(item)
         }
         mostrarTotal.textContent = corretas.size + ' de  ' + totalDePerguntas
      }
    
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  