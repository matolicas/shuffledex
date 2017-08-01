# shuffledex
Este projeto está, atualmente, utilizando um serviço com um db internos
para executar. Para deixar de usar a in-memory-web-api-master e usar como
backend o projeto H2/SpringBoot/REST faça:
  1) Ir no AppModule e comentar nas linhas 18, 19 e 49;
  2) Já no PokemonService:
    a) Descomentar as linhas 11, 19, 21, 33, 35 e 50;
    b) Comentar as linhas 12, 20, 22, 34, 36 e 51;
  3) No PokemonSearchService descomente as linhas 14 e 16 e comente 15 e 17.
  
  
Este projeto angular foi feito juntamente com o shuffledex-rest, ambos com base em:
  
1) Material principal: Spring Boot REST + Angular 2 + JPA + Hibernate +
MySQL CRUD Example
http://www.concretepage.com/spring-boot/spring-boot-rest-angular-2-jpa-hibernate-mysql-crud-example

2) Sobre o uso da DB H2 para os testes locais: Integrate an H2 Database
in Your Spring Boot App
https://dzone.com/articles/integrate-h2-database-in-your-spring-boot-applicat
Material de apoio: How to configure spring-boot to use file based H2
database
https://stackoverflow.com/questions/37903105/how-to-configure-spring-boot-to-use-file-based-h2-database

3) Tutorial principal que eu segui para o desevolvimento da parte
Angular4:Tutorial: Tour of Heroes
https://angular.io/tutorial
ps.: nesse tutorial é usada uma API chamada angular-in-memory-web-api,
a qual pode ser usada num environment de teste local, já que ela simula
um serviço HTTP a partir de um banco interno, ideal para testes de
frontend independetes do estado de produção de um serviço REST. Essa
API é apresentada no módulo de HTTP do tutorial e pode ser encontrada
aqui (https://github.com/angular/in-memory-web-api). Esta já em uma
versão diferente porém análoga à usada no tutorial, onde o nome mudou
de angular-in-memory-web-api para in-memory-web-api-master,
necessitando assim que essa alteração seja feita nas declarações de
importação nos serviços.

4) Também foi consultada frequentemente como material de apoio a
documentação oficial do Angular sobre as suas funcionalidades
principais. Ela está dividida entre vários tópicos nos quais são
aprofundadas as explicações sobre Data Binding, Lifecycle Hooks,
Diretivas, NgModules, entre outros temas, iniciando por esse da
Arquitetura do Angular.
https://angular.io/guide/architecture

5) Porém, após o fim da implementação do projeto de testes, eu tomei
conhecimento de uma terceira fonte de material sobre Angular: as aulas
da Profª Loiane, as quais, por serem no nosso idioma nativo e no
formato de vídeo-aulas, acabam por fornecer uma melhor otimização do
estudo do conteúdo necessário para a implementação. Ela também utiliza
uma organização do ambiente mais próxima da já utilizada aqui na SDS...
pelo menos da presente no projeto no qual estamos trabalhando agora, o
BioPonto2.
http://loiane.training/curso/angular-2/
https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G

6) Sobre o Teradata, para a criação da interface, já usando as
diretivas do Material Design, foram usados os components da biblioteca
de components (https://material.angular.io/components) e para a criação
do layout, foi utilizada como base a Full Demo das Nav Views
(encontrada no final desta página: https://teradata.github.io/covalent/#/layouts/nav-view).
Pode-se também usar como referência o Covalent Quickstart (https://github.com/Teradata/covalent-quickstart).  

obs.: Para a compreensão geral do workflow foi tido como base o que já
há commitado na SVN do projeto BioPonto2, tanto para o frontend, quanto
para o backend.
