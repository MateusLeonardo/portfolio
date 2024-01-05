import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import fotoProjeto from './src/assets/ProjetoImagem.png'

const projetos = [
  {
    id: 'ReceitasWeb',
    imagem: fotoProjeto,
    status: 'Em desenvolvimento',
    technologies: [
      <IoLogoJavascript key="js" size={25} />,
      <FaHtml5 key="html" size={25} />,
      <FaCss3 key="css" size={25} />
    ],
    nome: 'Projeto 1',
    descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quibusdam autem quisquam assumenda quas?'
  },
  {
    id: 'CoffeHouse',
    imagem: fotoProjeto,
    status: 'Em desenvolvimento',
    technologies: [
      <IoLogoJavascript key="js" size={25} />,
      <FaCss3 key="css" size={25} />
    ],
    nome: 'Projeto 2',
    descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quibusdam autem quisquam assumenda quas?'
  },
  {
    id: 'ToDoList',
    imagem: fotoProjeto,
    status: 'Em desenvolvimento',
    technologies: [
      <IoLogoJavascript key="js" size={25} />,
      <FaHtml5 key="html" size={25} />,
      <FaCss3 key="css" size={25} />
    ],
    nome: 'Projeto 3',
    descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quibusdam autem quisquam assumenda quas?'
  }
];

export default projetos;


