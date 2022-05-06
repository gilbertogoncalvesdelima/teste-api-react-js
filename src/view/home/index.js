import React, { useState, useEffect } from "react";

const Home = () => {
  //UseState
  const [vetor, setVetor] = useState([]);

  const [status, setStatus] = useState("Carregando...");

  //UseEffect
  useEffect(() => {
    obterDados();
  });

  //Função para obter os dados da api
  const obterDados = async () => {
    const dados = await fetch("https://jsonplaceholder.typicode.com/photos");
    // Await = Enquanto api não trazer nenhum dado vai travar nesta linha
    //fetch = devolve informação como texto

    //Convertendo para json
    const converter = await dados.json();
    setVetor(converter);
    //depois que adicionar meus dados convertido para o vetor, eu vou alterar o valor deste meu status
    setStatus("Dados carregados com sucesso!");
  };

  return (
    <div>
      <h1>{status}</h1>

      <ul>
        {" "}
        {/*ul, Criando uma lista*/}
        {/*map, como se fosse um laço de repetição, ele vai percorrer cada elemento que eu tenho no meu vetor e vai poder exibir alguma caracteristica*/}
        {vetor.map(objeto => (
          <li>{objeto.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
