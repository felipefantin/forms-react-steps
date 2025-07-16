# 🚀 Projeto: Formulário com Steps em React

---

## 👋 Bem-vindo(a) ao Projeto!

Este repositório contém um projeto de desenvolvimento front-end focado na criação de um **formulário interativo com múltiplos passos (steps)** utilizando **React.js**. O objetivo é demonstrar a componentização, o gerenciamento de estado e as boas práticas no desenvolvimento de interfaces de usuário com React.

O conteúdo e as diretrizes foram elaboradas pelo **Prof. Vinicius Martins**.

---

## 🎯 Objetivo do Exercício: Construindo um Formulário por Etapas

A meta principal deste exercício é desenvolver uma tela de formulário que simula um processo com várias etapas. A **arquitetura de funcionamento da página deve seguir o modelo proposto**, enquanto o **design e layout são flexíveis** e podem ser personalizados à vontade.

### Requisitos Técnicos Essenciais:

1.  **Componentização Funcional**: É crucial identificar e criar **componentes funcionais (`functional components`)** que, juntos, formarão a tela final através da **composição de componentes**.
2.  **Definição de Props**: Para cada componente, você deverá definir quais **props (`properties`)** ele receberá para garantir sua flexibilidade e reusabilidade.
3.  **Estilização**: A estilização deve ser implementada utilizando **CSS Modules (`.module.css`)** ou **CSS Inline (`style`)**. Escolha o método que melhor se adapte ao seu fluxo de trabalho.

---

## 💡 Sugestões de Componentes Propostas pelo Professor

Para guiar o desenvolvimento e promover uma boa estrutura de código, o professor sugere a criação dos seguintes componentes:

* ### `Box.tsx`
    * Um componente contêiner que envolverá tanto os steps quanto o formulário.
    * Deverá ser capaz de receber um **`children`** via props, o que permitirá que ele encapsule todo o conteúdo do formulário.

* ### `Divider.tsx`
    * Um componente simples, sem props (`dumb component`), responsável por renderizar uma linha divisória entre a área dos steps e o corpo do formulário.

* ### `Steps.tsx`
    * Este componente será encarregado de exibir a sequência de passos do formulário.
    * Receberá uma **lista (`array`)** de objetos via **props**, onde cada objeto representa um passo (`step`).
    * **Estrutura de um Step**: Cada `step` deve ser um objeto TypeScript com as propriedades `nome` (string, para o título do passo) e `ordem` (number, para a numeração do passo). Exemplo: `{ nome: "Dados Pessoais", ordem: 1 }`.
    * A renderização dos passos na interface deve ser feita utilizando o método **`.map()`** da classe `Array` do JavaScript, seguindo as boas práticas de **`list and keys`** do React.

    **Exemplo de Implementação (`Steps.tsx`):**
    ```typescript
    type StepsProps = {
      steps: { nome: string; ordem: number }[];
    };

    function Steps(props: StepsProps) {
      return (
        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>

          {props.steps.map((step) => {
            return (
              <div key={step.ordem}> {/* Adicionado key para otimização do React */}
                <span>{step.ordem}</span>
                <p>{step.nome}</p>
              </div>
            );
          })}
        </div>
      );
    }
    export default Steps;
    ```
    * **Nota:** A propriedade `key` foi adicionada no `div` interno do `map` para seguir as boas práticas do React ao renderizar listas.

* ### `Input.tsx`
    * Um componente reutilizável para campos de entrada de dados do formulário.
    * Poderá receber props como `label` (para o rótulo do campo) e `placeholder` (para o texto de exemplo) para ser configurável.

* ### `Button.tsx`
    * Um componente genérico para botões da interface.
    * Poderá receber uma prop como `texto` para definir o conteúdo textual que será exibido no botão.

---

Sinta-se à vontade para explorar, implementar e, se necessário, sugerir melhorias. Se tiver dúvidas ou precisar de ajuda, este README serve como um guia inicial para o seu desenvolvimento.

Boa codificação! 🚀