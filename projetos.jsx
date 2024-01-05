import { FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const projetos = [
  {
    id: 1,
    imagem: '../assets/ProjetoImagem.png',
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
    id: 2,
    imagem: './src/assets/ProjetoImagem.png',
    status: 'Em desenvolvimento',
    technologies: [
      <IoLogoJavascript key="js" size={25} />,
      <FaCss3 key="css" size={25} />
    ],
    nome: 'Projeto 2',
    descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quibusdam autem quisquam assumenda quas?'
  },
  {
    id: 3,
    imagem: './src/assets/ProjetoImagem.png',
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


