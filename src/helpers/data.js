import brFlag from '../images/icons/br-flag.svg';
import enFlag from '../images/icons/en-flag.svg';

import marinhoBg from '../images/projects/1/bg.jpg';
import marinhoLogo from '../images/projects/1/logo.svg';

import trevisanBg from '../images/projects/2/bg.jpg';
import trevisanLogo from '../images/projects/2/logo.png';

import simplesmenteBg from '../images/projects/3/bg.jpg';
import simplesmenteLogo from '../images/projects/3/logo.svg';

import vitalajudaBg from '../images/projects/4/bg.jpg';
import vitalajudaLogo from '../images/projects/4/logo.svg';

import neoBg from '../images/projects/5/bg.jpg';
import neoLogo from '../images/projects/5/logo.svg';

import viniBg from '../images/projects/6/bg.jpg';
import viniLogo from '../images/projects/6/logo.svg';

export const data = {
  br: {
    header: {
      logoAlt: 'logo de vinicius bortoletto',
      downloadButton: {
        text: 'Baixar currículo',
        link: 'https://drive.google.com/file/d/1uZ0h6AinxlDH92f5HDnQW0RjFzbfEK0y/view?usp=sharing',
      },
      flag: enFlag,
      flagAlt: 'click to change website language to english.',
    },
    hero: {
      avatarAlt: 'ilustração de vinicius bortoletto',
      profession: 'Desenvolvedor Web Fullstack',
      location: 'Piracicaba | São Paulo | Brasil',
    },
    recentProjects: {
      title: 'Projetos Recentes',
      cards: [
        {
          id: 1,
          bg: marinhoBg,
          logo: marinhoLogo,
          description:
            'Melhor qualidade em rações, acessórios e cuidados para animais.',
          website: 'https://marinho-agropecuaria.netlify.app/',
          github: 'https://github.com/vinibortoletto/marinho-agropecuaria',
        },
        {
          id: 2,
          bg: trevisanBg,
          logo: trevisanLogo,
          description:
            'Logística e soluções para transportes públicos e rodoviários.',
          website: 'https://viacao-trevisan.netlify.app/',
          github: 'https://github.com/vinibortoletto/ui-clone-viacao-trevisan',
        },

        {
          id: 3,
          bg: simplesmenteBg,
          logo: simplesmenteLogo,
          description: 'Roupas minimalistas e sustentáveis.',
          website: 'https://simplesmente.netlify.app/',
          github: 'https://github.com/vinibortoletto/simples-mente',
        },
        {
          id: 4,
          bg: vitalajudaBg,
          logo: vitalajudaLogo,
          description: 'Serviçoes de assistênte pessoal e ajuda exclusiva.',
          website: 'https://vital-ajuda.netlify.app/',
          github: 'https://github.com/vinibortoletto/vital-ajuda',
        },
        {
          id: 5,
          bg: neoBg,
          logo: neoLogo,
          description: 'Criador e desenvedor front-end.',
          website: 'https://neo-dev.netlify.app/',
          github: 'https://github.com/vinibortoletto/neo',
        },
        {
          id: 6,
          bg: viniBg,
          logo: viniLogo,
          description: 'Ilustrador digital dando vida a ideias.',
          website: 'https://ilustrador-digital.netlify.app/',
          github: 'https://github.com/vinibortoletto/ilustrador-digital',
        },
      ],
      buttonsText: {
        website: 'Visitar site',
        github: 'Visitar Github',
      },
    },
    skills: {
      title: 'Habilidades',
      sections: [
        {
          id: 1,
          title: 'Front-end',
          description:
            'HTML5, CSS3, TailwindCSS, JavaScript, React.js, Redux, Context API, React Testing Library, React Hooks, e Styled Component.',
        },
        {
          id: 2,
          title: 'Back-end',
          description:
            'Docker, MySQL, Sequelize, Node.js, Mocha, Chai, Sinon, TDD, Express.js, TypeScript, SOLID, POO, MongoDB e NoSQL.',
        },
        {
          id: 3,
          title: 'Ferramentas',
          description:
            'Git, Bash, Linux, SCRUM, Kanban, Visual Studio Code, Figma, Adobe Photoshop e Procreate.',
        },
        {
          id: 4,
          title: 'Idiomas',
          description:
            'Português (nativo), Inglês (avançado) e Francês (intermediário).',
        },
      ],
    },
    aboutMe: {
      title: 'Sobre Mim',
      description:
        'Após atuar por cerca de 5 anos como ilustrador, trabalhando com clientes ao redor do mundo, descrobri um interesse pela programação e tecnologia, e decidi mergulhar definitivamente neste mundo.',
    },
    footer: {
      logoAlt: 'Logo de Vinicius Bortoletto',
      downloadButton: {
        text: 'Baixar currículo',
        link: 'https://drive.google.com/file/d/1uZ0h6AinxlDH92f5HDnQW0RjFzbfEK0y/view?usp=sharing',
      },
      copyright: 'Criado e desenvolvido por',
    },
    illustrationsAlt: {
      drawing:
        'ilustração de um computador desktop, notebook, smartphone, livro e caneca.',
      shape: 'forma de uma onda abstrata',
    },
  },
  en: {
    header: {
      logoAlt: "vinicius bortoletto's logo",
      downloadButton: {
        text: 'Download CV',
        link: 'https://drive.google.com/file/d/1xq0ln4_tRLY_36hW3P2mauOFKVSU3L5A/view?usp=sharing',
      },
      flag: brFlag,
      flagAlt: 'clique para mudar o idioma do site para português.',
    },
    hero: {
      avatarAlt: 'cartoon illustration of vinicius bortoletto',

      profession: 'Fullstack Web Developer',
      location: 'Piracicaba | São Paulo | Brazil',
    },
    recentProjects: {
      title: 'Recent Projects',
      cards: [
        {
          id: 1,
          bg: marinhoBg,
          logo: marinhoLogo,
          description: 'Best quality pet food, acessories and health care.',
          website: 'https://marinho-agropecuaria.netlify.app/',
          github: 'https://github.com/vinibortoletto/marinho-agropecuaria',
        },
        {
          id: 2,
          bg: trevisanBg,
          logo: trevisanLogo,
          description:
            'Logistics and solutions for public and road transportation.',
          website: 'https://viacao-trevisan.netlify.app/',
          github: 'https://github.com/vinibortoletto/ui-clone-viacao-trevisan',
        },
        {
          id: 3,
          bg: simplesmenteBg,
          logo: simplesmenteLogo,
          description: 'Sustainable and minimalist clothing.',
          website: 'https://simplesmente.netlify.app/',
          github: 'https://github.com/vinibortoletto/simples-mente',
        },
        {
          id: 4,
          bg: vitalajudaBg,
          logo: vitalajudaLogo,
          description: 'Personal assistant service and expert help.',
          website: 'https://vital-ajuda.netlify.app/',
          github: 'https://github.com/vinibortoletto/vital-ajuda',
        },
        {
          id: 5,
          bg: neoBg,
          logo: neoLogo,
          description: 'Front-end web developer portfolio.',
          website: 'https://neo-dev.netlify.app/',
          github: 'https://github.com/vinibortoletto/neo',
        },
        {
          id: 6,
          bg: viniBg,
          logo: viniLogo,
          description: 'Digital fantasy artist bringing ideas to life',
          website: 'https://ilustrador-digital.netlify.app/',
          github: 'https://github.com/vinibortoletto/ilustrador-digital',
        },
      ],
      buttonsText: {
        website: 'Visit website',
        github: 'Visit Github',
      },
    },
    skills: {
      title: 'Skills',
      sections: [
        {
          id: 1,
          title: 'Front-end',
          description:
            'HTML5, CSS3, TailwindCSS, JavaScript, React.js, Redux, Context API, React Testing Library, React Hooks, and Styled Component.'
        },
        {
          id: 2,
          title: 'Back-end',
          description:
            'Docker, MySQL, Sequelize, Node.js, Mocha, Chai, Sinon, TDD, Express.js, TypeScript, SOLID, POO, MongoDB and NoSQL.',
        },
        {
          id: 3,
          title: 'Tools',
          description:
            'Git, Bash, Linux, SCRUM, Kanban, Visual Studio Code, Figma, Adobe Photoshop and Procreate.',
        },
        {
          id: 5,
          title: 'Speaking Languages',
          description:
            'Portuguese (native), English (advanced) and French (intermediate).',
        },
      ],
    },
    aboutMe: {
      title: 'About Me',
      description:
        'After working for about 5 years as a digital artist, working with clients around the globe, I discover an interest for coding and technologies, and so I decided to dive in to this world.',
    },
    footer: {
      logoAlt: "Vinicius Bortoletto's logo",
      downloadButton: {
        text: 'Download CV',
        link: 'https://drive.google.com/file/d/1xq0ln4_tRLY_36hW3P2mauOFKVSU3L5A/view?usp=sharing',
      },
      copyright: 'Created and designed by',
    },
    illustrationsAlt: {
      drawing:
        'illustration of a desktop computer, laptop, smartphone, book and mug.',
      shape: 'abstract wave shape',
    },
  },
};
