import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import fotoReceitasWeb from "./src/assets/receitasWebImg.png";
import fotoToDolist from "./src/assets/ToDolistImg.png";
import fotoImagemSearch from "./src/assets/ImagemSearch.png";
import fotoCoffeeHouse from "./src/assets/CoffeeHouse.png";

const projetos = [
  {
    id: "ReceitasWeb",
    imagem: fotoReceitasWeb,
    status: "Em desenvolvimento",
    technologies: [
      <FaHtml5 key="HTML" size={25} />,
      <FaCss3 key="CSS" size={25} />,
      <IoLogoJavascript key="JavaScript" size={25} />,
    ],
    nome: "Receitas Web",
    descricao:
      "O projeto Receitas Web é uma página online que oferece uma variedade de receitas simples e fáceis de fazer. A página tem como objetivo proporcionar aos usuários uma experiência prática e acessível para encontrar e seguir passo a passo diversas receitas.",
    descricaoPequena:
      "O projeto Receitas Web é uma página online que oferece uma variedade de receitas simples e fáceis de fazer...",
    liveDemo: "https://receitas-web.vercel.app/",
    githubCode: "https://github.com/MateusLeonardo/receitasWeb",
  },
  {
    id: "CoffeeHouse",
    imagem: fotoCoffeeHouse,
    status: "Em desenvolvimento",
    technologies: [
      <FaReact key="React" size={25} />,
      <FaHtml5 key="HTML" size={25} />,
      <BsFiletypeScss key="SCSS" size={25} />,
    ],
    nome: "Coffee House",
    descricao:
      'O projeto "Coffee House" é uma aplicação de uma cafeteria, oferecendo uma experiência completa aos usuários. A plataforma permite que os clientes naveguem por um menu intuitivo, escolham itens como cafés, sanduiches e pastéis e os adicionem facilmente ao carrinho de compras.',
    descricaoPequena:
      'O projeto "Coffee House" é uma aplicação de uma cafeteria, oferecendo uma experiência completa aos usuários. A plataforma permite...',
    liveDemo: "https://coffee-house-gold.vercel.app/",
    githubCode: "https://github.com/MateusLeonardo/CoffeeHouse",
  },
  {
    id: "ToDolist",
    imagem: fotoToDolist,
    status: "agosto 2023",
    technologies: [
      <FaHtml5 key="HTML" size={25} />,
      <FaCss3 key="CSS" size={25} />,
      <IoLogoJavascript key="JavaScript" size={25} />,
    ],
    nome: "To-Do List",
    descricao:
      'O projeto "To-Do List" é uma aplicação desenvolvida para auxiliar os usuários na organização de suas tarefas diárias, semanais ou mesmo de longo prazo. Essa aplicação permite aos usuários criar listas de tarefas personalizadas, adicionando itens, definindo prioridades, marcando tarefas concluídas e removendo-as conforme necessário.',
    descricaoPequena:
      'O projeto "To-Do List" é uma aplicação desenvolvida para auxiliar os usuários na organização de suas tarefas diárias...',
    liveDemo: "https://to-do-list-drab-zeta.vercel.app/",
    githubCode: "https://github.com/MateusLeonardo/ToDoList",
  },
  {
    id: "imagemSearch",
    imagem: fotoImagemSearch,
    status: "Janeiro 2024",
    technologies: [
      <FaHtml5 key="HTML" size={25} />,
      <FaCss3 key="CSS" size={25} />,
      <IoLogoJavascript key="JavaScript" size={25} />,
    ],
    nome: "Imagem Search",
    descricao:
      'O projeto "Imagem Search" é uma aplicação projetada para facilitar a busca de imagens de forma intuitiva. Desenvolvida com a finalidade de proporcionar uma experiência eficiente aos usuários, a aplicação utiliza a poderosa API do Unsplash para recuperar imagens com base nas entradas fornecidas pelo usuário.',
    descricaoPequena:
      'O projeto "Imagem Search" é uma aplicação projetada para facilitar a busca de imagens de forma intuitiva...',
    liveDemo: "https://imagem-search.vercel.app/",
    githubCode: "https://github.com/MateusLeonardo/Imagem-Search",
  },
];

export default projetos;
