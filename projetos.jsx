import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import fotoProjeto from './src/assets/ProjetoImagem.png'
import fotoReceitasWeb from './src/assets/receitasWebImg.png'
import fotoToDolist from './src/assets/ToDolistImg.png'

const projetos = [
  {
    id: 'ReceitasWeb',
    imagem: fotoReceitasWeb,
    status: 'Em desenvolvimento',
    technologies: [
      <FaHtml5 key="HTML" size={25} />,
      <FaCss3 key="CSS" size={25} />,
      <IoLogoJavascript key="javaScript" size={25} />
    ],
    nome: 'Receitas Web',
    descricao: 'O projeto Receitas Web é uma página online que oferece uma variedade de receitas simples e fáceis de fazer. A página tem como objetivo proporcionar aos usuários uma experiência prática e acessível para encontrar e seguir passo a passo diversas receitas.',
    descricaoPequena: 'O projeto Receitas Web é uma página online que oferece uma variedade de receitas simples e fáceis de fazer...',
    liveDemo: 'https://receitas-web.vercel.app/',
    githubCode: 'https://github.com/MateusLeonardo/receitasWeb'
  },
  {
    id: 'ToDolist',
    imagem: fotoToDolist,
    status: 'agosto 2023',
    technologies: [
      <FaHtml5 key="HTML" size={25} />,
      <FaCss3 key="CSS" size={25} />,
      <IoLogoJavascript key="javaScript" size={25} />,
    ],
    nome: 'To-Do List',
    descricao: 'O projeto "To-Do List" é uma aplicação desenvolvida para auxiliar os usuários na organização de suas tarefas diárias, semanais ou mesmo de longo prazo. Essa aplicação permite aos usuários criar listas de tarefas personalizadas, adicionando itens, definindo prioridades, marcando tarefas concluídas e removendo-as conforme necessário.',
    descricaoPequena: 'O projeto "To-Do List" é uma aplicação desenvolvida para auxiliar os usuários na organização de suas tarefas diárias...',
    liveDemo: 'https://to-do-list-drab-zeta.vercel.app/',
    githubCode: 'https://github.com/MateusLeonardo/ToDoList'
  },
  // {
  //   id: 'ToDoList',
  //   imagem: fotoProjeto,
  //   status: 'Em desenvolvimento',
  //   technologies: [
  //     <IoLogoJavascript key="javaScript" size={25} />,
  //     <FaHtml5 key="HTML" size={25} />,
  //     <FaCss3 key="CSS" size={25} />
  //   ],
  //   nome: 'Projeto 3',
  //   descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quibusdam autem quisquam assumenda quas?',
  // }
];

export default projetos;


