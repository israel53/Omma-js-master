const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

const listaDeReceitas = [{
  id: 1,
  titulo: "Cachorro Quente",
  dificuldade: "simples",
  ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
  preparo: "jodbvnujd osbvcujsbn jsbfusb",
  link: "youtube.com",
  vegano: false,
}, ];

const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };
  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.onclick = (evento)=> {
  //impede que a pagina seja recarregada /previne comporatamento padrão
  evento.preventDefault();

  // alert('formulario enviado');

  // selecionando campos do formulario

  let inputTitulo = document.querySelector('#titulo');
  let inputDificuldade = document.querySelector('#dificuldade');
  let inputIngredientes = document.querySelector('#ingredientes');
  let inputPreparo = documet.querySelector('#preparo');
  let inputLink = documet.querySelector('#link');
  let inputVegano = Document.querySelector('input[name="vegano"]:checked');


let novaReceita = {
  id: listaDeReceitas.length,
  titulo:inputTitulo.value,
  dificuldade: inputDificuldade.value.split(','),
  preparo: inputPreparo.value,
  link:inputLink.value,
  // vegano inputVegano.value ? inputVegano : 'não' 
}

console.log(novaReceita);
listaDeReceitas.push(novaReceita);

}


function exibirReceitas() {
let htmlReceitas =''

  for (let index = 0; index < listaDeReceitas.length; index++) {
    htmlReceitas += '<article class="card">
    <h2>${listaDeReceitas[index].titulo</h2>
    <small>Dificuldade: ${listaDeReceitas[index].dificuldade}</small>
    <p> ${listaDeReceitas[index].preparo}</p>
    </article>';
 }

  let painelReceitas = document.querySelector('.painel-receitas');
  painelReceitas.innerHTML =htmlReceitas

exibirReceitas();

function deletarReceita(id) {
  let novaListaDeReceitas = [];

  for (let index = 0; index < listaDeReceitas.length; index++) {
    const receita = listaDeReceitas[index];

    if (receita.id != id) {
      novaListaDeReceitas.push(receita);
    }
  }

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}

function deletarReceita(id) {
  const novaListaDeReceitas = listaDeReceitas.filter(
    (receita) => receita.id != id
  );

  if (novaListaDeReceitas.length == listaDeReceitas.length) {
    return console.log("Não encontrei o id");
  }

  listaDeReceitas = novaListaDeReceitas;
  console.log("receita deletada com sucesso!");
}


const condicaoDeReceita = (receita) => (receita.vegano = true);


const atualizaReceita = (id, receitaAtualizada) => {
  let foiAtualizado = false;

  listaDeReceitas.forEach((receita) => {
    if (receita.id != id) {
      return;
    }

    if (receitaAtualizada.titulo) {
      receita.titulo = receitaAtualizada.titulo;
    }

    if (receitaAtualizada.ingredientes) {
      receita.ingredientes = receitaAtualizada.ingredientes;
    }

    foiAtualizado = true;
  });

  console.log(
    foiAtualizado ?
    "Receita atualizada com sucesso!" :
    "Não foi encontrado o id"
  );
};


const buscarReceita = (termoBuscado) => {

  const resultados = listaDeReceitas.filter(
    (receita) =>
    receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
  );

  // if (resultados.length) {
  //   console.log(resultados);
  // } else {
  //   console.log("Não foi encontrado receitas");
  // }

  if (!resultados.length) {
    console.log("Não foi encontrado receitas");
  }

  return console.log(resultados);
};