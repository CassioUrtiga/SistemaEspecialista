const areaPretendida = {
    pergunta: ["Qual a area pretendida?"],
    areas: ["Back-End", "Front-End"]
}
const perguntasFrontEnd = {
    junior: [
        "Você possui conhecimento básico de HTML, CSS e JavaScript?",
        "Você já trabalhou com React, incluindo componentes funcionais, JSX e hooks?",
        "Tem experiência em consumir dados de um back-end através de APIs REST?",
        "Está familiarizado com o controle de versão utilizando Git?",
        "Você entende conceitos de design responsivo e tem experiência em criar interfaces de usuário intuitivas?"
    ],
    pleno: [
        "Você possui experiência sólida em desenvolvimento front-end, especialmente utilizando React em projetos anteriores?",
        "Tem proficiência em HTML5, CSS3 e JavaScript moderno (ES6+)?",
        "Conhece ferramentas de desenvolvimento como webpack, Babel, ESLint, etc.?",
        "Tem experiência em escrever testes unitários e de integração usando frameworks como Jest, Enzyme ou React Testing Library?",
        "Já trabalhou em otimização de desempenho de aplicações web?",
        "Você tem conhecimento em princípios de design de interfaces e experiência do usuário (UI/UX)?"
    ],
    senior: [
        "Você possui vasta experiência em desenvolvimento front-end, com profundo conhecimento de React e suas melhores práticas?",
        "Tem habilidade para liderar e influenciar equipes na implementação de soluções front-end?",
        "Possui experiência em arquitetura de software, incluindo design de componentes reutilizáveis e escaláveis?",
        "Tem forte compreensão de conceitos avançados de JavaScript, como programação funcional, assíncrona e programação orientada a objetos?",
        "Você consegue resolver problemas complexos de forma eficiente e pragmática?",
        "Já atuou em mentoring e treinamento de desenvolvedores mais juniores?"
    ]
};

const perguntasBackEnd = {
    junior: [
        "Você possui conhecimento básico de Java e está familiarizado com o paradigma de programação orientada a objetos?",
        "Entende conceitos fundamentais de desenvolvimento web, como HTTP, APIs RESTful e CRUD?",
        "Tem noções básicas de bancos de dados relacionais e SQL?",
        "Está familiarizado com Spring Framework, especialmente Spring Boot?",
        "Tem experiência em escrever código limpo e bem documentado?"
    ],
    pleno: [
        "Você possui experiência prática em desenvolvimento back-end com Java e Spring?",
        "Tem conhecimento sólido em bancos de dados relacionais, como MySQL ou PostgreSQL, incluindo modelagem de dados e consultas avançadas?",
        "Está familiarizado com conceitos de segurança da informação e práticas de autenticação/autorização?",
        "Tem experiência em integração de sistemas e serviços, como RESTful APIs, SOAP, etc.?",
        "Você consegue resolver problemas de desempenho e escalabilidade em aplicações Java?"
    ],
    senior: [
        "Você possui vasta experiência em desenvolvimento back-end usando Java e Spring, incluindo arquitetura de software?",
        "Tem profundo conhecimento em princípios de design de software, como SOLID, DRY e Design Patterns?",
        "Experiência em desenvolvimento de microserviços e arquiteturas distribuídas?",
        "Habilidade para liderar iniciativas técnicas e tomar decisões arquiteturais?",
        "Possui excelentes habilidades de comunicação e capacidade de colaborar efetivamente com equipes multidisciplinares?"
    ]
};

export default [areaPretendida, perguntasBackEnd, perguntasFrontEnd];
