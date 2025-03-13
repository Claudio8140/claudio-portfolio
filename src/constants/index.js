import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    getringo,
    gygis,
    asako,
    shopeeshop,
    paaep,
    agri,
    confidence,
    metyamiko,
    car4you,
    threejs,
    bob,
    tsiky,
    steph,
    mawia,
    afripoks,
    pokermada,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "work",
      title: "Travail",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développement Front-end",
      icon: web,
    },
    {
      title: "Développement Back-end",
      icon: mobile,
    },
    {
      title: "UX/UI Design",
      icon: backend,
    },
    {
      title: "Intégration APIs",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },

  ];
  
  const experiences = [
    {
      title: "Lead project & Développeur fullstack web",
      company_name: "Elthio Community",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Avril 2023 - Aujourd'hui",
      points: [
        "Leader des développeurs de la communauté.",
        "Conception et développement de la site web de la communauté en utilisant React Js et Laravel.",
        "Mis en oeuvre de fonctionnalités clés dans l’application de gestion des membres.",
        "Etude de mis à jour et correction de bug du projet existant",
        "Coordination avec les équipes front-end et back-end pour assurer une intégration transparente.",
        "Assure la perfection et la finalisation de chaque projet avant la livraison.",
      ],
    },
    {
      title: "Développeur fullstack web (Laravel/React JS)",
      company_name: "LCOM",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Février 2021 - Mars 2023",
      points: [
        "Analyser les besoins et spécification technique  du projet.",
        "Conception et développement de l’interface utilisateur d’une plateforme e-commerce à fort trafic en utilisant React JS.",
        "Développement des fonctionnalités dynamiques du projet en utilisant Laravel ou Django.",
        "Collaboration avec l’équipe UX/UI pour mettre en oeuvre un design attrayant et fonctionnel.",
      ],
    },
    {
      title: "Alternant en développement React JS",
      company_name: "Imiary",
      icon: shopify,
      iconBg: "#383E56",
      date: "Novembre 2019 - Janvier 2021",
      points: [
        "Conception et développement de l’interface utilisateur en utilisant React JS et Redux.",
        "Optimisation de l’interface du projet déjà existant.",
        "Collaboration avec l’équipe des développeur back-end.",
        "Assurer la mise en relation des ordinateurs du serveur télécoms en interne, ainsi qu'avec les réseaux en externe.",
      ],
    },
    {
      title: "Stagiaire en développement web",
      company_name: "Yas",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Septembre 2019",
      points: [
        "Connaitre le métier de développeur web.",
        "Intérrogation avec des développeurs de la société.",
        "Développement d'une interface statique.",
        "Participation aux réunions des développeurs.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Je n'ai jamais vu un développeur web aussi investi dans la réussite de ses clients que Claudio.",
      name: "Tsiky Rakotonirina",
      designation: "LEADER",
      company: "SURF-INWEB",
      image: tsiky,
    },
    {
      testimonial:
        "Je pensais qu'il était impossible de créer un site et une application mobile aussi beaux que notre produit, mais Claudio m'a prouvé le contraire.",
      name: "Moumini Stephano",
      designation: "PDG",
      company: "PROPRE",
      image: steph,
    },
    {
      testimonial:
        "Depuis l'optimisation de notre site internet, nous avons vu une hausse de 60% du trafic. Merci infiniment, Claudio!",
      name: "Mawia Rakotovao",
      designation: "COMMUNITY MANAGER",
      company: "PLUS DE CLICKS",
      image: mawia,
    },
  ];
  
  const projects = [
    {
      name: "AFRIPOKS",
      description:
        "Plateforme performant de jeux poker Holdem en ligne.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: afripoks,
      source_code_link: "https://afripoks.fr",
    },
    {
      name: "SHOPEESHOP",
      description:
        "Site e-commerce spécialisé dans les housses de téléphone et les écouteurs Bluetooth.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: ".liquid",
          color: "pink-text-gradient",
        },
      ],
      image: shopeeshop,
      source_code_link: "https://shopeeshop.fr",
    },
    {
      name: "BULKER",
      description:
        "Site d'un agence expert en négoce de produits de matériaux de constructions.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: ".liquid",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://bulker.fr",
    },
    {
      name: "CONFIDENCE",
      description:
        "Application mobile(Android et iOS) permettant d'accéder à des services de consultation médicale.",
      tags: [
        {
          name: "Node js",
          color: "blue-text-gradient",
        },
        {
          name: "Flutter",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: confidence,
      source_code_link: "#",
    },
    {
      name: "METY@KO",
      description:
        "Application mobile(Android et iOS) de gestion de vente en ligne adapté à Madagascar.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "React native",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: metyamiko,
      source_code_link: "#",
    },
    {
      name: "ASSISTANT BOB",
      description:
        "Système d'intelligence artificielle optimisé pour l'environnement windows.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: bob,
      source_code_link: "https://github.com/Claudio8140/Assistant-Bob",
    },
    {
      name: "GETRINGO",
      description:
        "Site de vente de la bouteille d'eau qui maintient magnétiquement le téléphone.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: ".liquid",
          color: "pink-text-gradient",
        },
      ],
      image: getringo,
      source_code_link: "https://getringo.com",
    },
    {
      name: "CAR4YOU",
      description:
        "Site officiell d'une entreprise spécialisée dans la vente de véhicules haut gamme.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: car4you,
      source_code_link: "https://www.car4you.cl",
    },
    {
      name: "KAYZER",
      description:
        "Site de vente des housses personnalisés de téléphone et les écouteurs Bluetooth.",
      tags: [
        {
          name: "Shopify",
          color: "blue-text-gradient",
        },
        {
          name: ".liquid",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://kayzer.fr",
    },
    {
      name: "GYGIS",
      description:
        "Site d'un entreprise spécialisée dans la fabrication et la distribution d'emballage en plastique.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: gygis,
      source_code_link: "https://www.gygis.co",
    },
    {
      name: "PAAEP",
      description:
        "Site d'un projet d'amélioration de l'accès à l'eau potable de Madagascar.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: paaep,
      source_code_link: "https://paaep.mg",
    },
    {
      name: "AGRI",
      description:
        "Site d'entreprise d'un entreprise d'accompagnement aux projets agricoles.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: agri,
      source_code_link: "https://www.ics-agri.com",
    },
    {
      name: "ASAKO",
      description:
        "Plateforme de recherche et publication des offres d'emploi partout à Madagascar.",
      tags: [
        {
          name: "Symfony",
          color: "blue-text-gradient",
        },
        {
          name: "Vue js",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: asako,
      source_code_link: "https://www.asako.mg",
    },
    {
      name: "POKERMADA",
      description:
        "Plateforme de recherche et publication des offres d'emploi partout à Madagascar.",
      tags: [
        {
          name: "Symfony",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: pokermada,
      source_code_link: "https://www.pokermada.com",
    },
    {
      name: "LCOM",
      description:
        "Site d'un agence de développement d'application web&mobile et marketing.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://lcom-corp.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  