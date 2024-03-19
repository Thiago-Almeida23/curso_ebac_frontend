class Aluno {
    constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
    }
  
    apresentar() {
      console.log(`Olá, eu sou ${this.nome}, estudante do curso de ${this.curso}, matrícula ${this.matricula}.`);
    }
  }
  
  class AlunoGraduacao extends Aluno {}
  
  class AlunoPosGraduacao extends Aluno {
    constructor(nome, matricula, curso, programa) {
      super(nome, matricula, curso);
      this.programa = programa;
    }
  
    apresentar() {
      console.log(`Olá, eu sou ${this.nome}, estudante de pós-graduação no programa ${this.programa}, do curso de ${this.curso}, matrícula ${this.matricula}.`);
    }
  }
  
  class AlunoDoutorado extends AlunoPosGraduacao {
    constructor(nome, matricula, curso, programa, areaPesquisa) {
      super(nome, matricula, curso, programa);
      this.areaPesquisa = areaPesquisa;
    }
  
    apresentar() {
      console.log(`Olá, eu sou ${this.nome}, estudante de doutorado no programa ${this.programa}, na área de pesquisa ${this.areaPesquisa}, do curso de ${this.curso}, matrícula ${this.matricula}.`);
    }
  }

  const aluno1 = new AlunoGraduacao('Roniel', '2024001', 'Administração');
  const aluno2 = new AlunoPosGraduacao('Raolita', '2024021', 'Engenharia Civil', 'Engenharia de Estruturas');
  const aluno3 = new AlunoDoutorado('Genebildo', '2024301', 'Ciência da Computação', 'Inteligência Artificial');

  aluno1.apresentar();
  aluno2.apresentar();
  aluno3.apresentar();
  