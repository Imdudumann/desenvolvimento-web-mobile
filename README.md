# Estruturação

O código foi dividido em algumas subpastas para melhor organização, sendo elas:

* components: todos os componentes utilizados para desenvolvimento do site
* interfaces: tipagens da aplicação
* service: camada de tratamento dos dados

# Processo de desenvolvimento

O processo de desenvolvimento começou criando a parte "funcional" da aplicação, que seria a estrutura HTML e depois a service onde foi criado toda a parte de mexer com os dados. Aqui foi onde encontrei o primeiro desafio que foi sobre como persistir os dados no navegador para não perder essa informação ao recarregar a página, mas bastou uma pesquisa no Google e consegui resolver isso facilmente usando o sessionStorage.

Depois de finalizar toda a parte funcional, comecei a estilização do site criando os arquivos CSS e deixando o programa com uma cara mais bonita. Tive também algumas dificuldades para fazer com o que o site ficasse totalmente responsivo e adequado a outros dispositivos.

# Decisões de design

Sinceramente eu não sabia muito bem como fazer o design do site, então segui algo bem simples, criando meio que uma janela no meio da tela com um título, a listagem dos TODO's e os botões de ação, usei bastante border-radius para deixar com uma cara mais amigável.

As cores da aplicação foram todas tiradas de uma biblioteca chamada tailwindcss, as cores padrões que eles utilizam são bem bonitas e utilizam um tom mais pastel, por isso acabei utilizando essa referência.

https://tailwindcss.com/docs/background-color