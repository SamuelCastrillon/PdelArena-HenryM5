import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

export const tournamentsHelper: ITournament[] = [
  {
    id: "1",
    name: "Torneo de Primavera",
    startDate: "2024-09-01",
    endDate: "2024-09-05",
    startingTime: "10:00 AM",
    finishTime: "04:00 PM",
    playingDay: ["2024-09-01", "2024-09-03", "2024-09-05"],
    description: "Torneo de pádel para la categoría de segunda.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: [
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/8/10/wayekhjulogbkd3ctt3p/alejandro-galan-padel-spain",
    ],
    courtsAvailable: 4,
    inscripciones: "abierta",
    status: "por comenzar",
    category: { id: "1", name: "Segunda", description: "Categoría segunda" },
    genero: "masculino",
    teamsQuantity: 8,
    matchDuration: 90,
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 1,
        tournamentId: 1,
      },
    ],
    team: [
      {
        id: "1",
        name: "Equipo A",
        category: {
          id: "1",
          name: "Segunda",
          description: "Categoría segunda",
        },
        users: [
          {
            id: "1",
            name: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            password: "password123",
            phone: "123456789",
            country: "Argentina",
            city: "Buenos Aires",
            address: "Av. Siempre Viva 742",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
          {
            id: "2",
            name: "Ana",
            lastName: "Gómez",
            email: "ana.gomez@example.com",
            password: "password123",
            phone: "987654321",
            country: "Argentina",
            city: "CABA",
            address: "Calle Falsa 123",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "1",
          name: "Torneo de Primavera",
          startDate: "2024-09-01",
          endDate: "2024-09-05",
          startingTime: "10:00 AM",
          finishTime: "04:00 PM",
          playingDay: ["2024-09-01", "2024-09-03", "2024-09-05"],
          description: "Torneo de pádel para la categoría de segunda.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 4,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "1",
            name: "Segunda",
            description: "Categoría segunda",
          },
          genero: "masculino",
          teamsQuantity: 8,
          matchDuration: 90,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "2",
    name: "Copa Verano",
    startDate: "2024-07-15",
    endDate: "2024-07-20",
    startingTime: "09:00 AM",
    finishTime: "03:00 PM",
    playingDay: ["2024-07-15", "2024-07-17", "2024-07-20"],
    description: "Torneo de pádel para la categoría de cuarta.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: [
      "https://cache.tradeinn.com/web/finders/padelFinder-detalle.webp",
    ],
    courtsAvailable: 3,
    inscripciones: "cerrada",
    status: "finalizado",
    category: { id: "2", name: "Cuarta", description: "Categoría cuarta" },
    genero: "femenino",
    teamsQuantity: 6,
    matchDuration: 75,
    fixture: [
      {
        id: "2",
        stage: "Fase de Grupos",
        date: "2024-07-15",
        time: "09:00 AM",
        matchId: 2,
        tournamentId: 2,
      },
    ],
    team: [
      {
        id: "2",
        name: "Equipo B",
        category: { id: "2", name: "Cuarta", description: "Categoría cuarta" },
        users: [
          {
            id: "3",
            name: "Luis",
            lastName: "Martínez",
            email: "luis.martinez@example.com",
            password: "password123",
            phone: "321654987",
            country: "Argentina",
            city: "Córdoba",
            address: "Calle Verdadera 456",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "2",
          name: "Copa Verano",
          startDate: "2024-07-15",
          endDate: "2024-07-20",
          startingTime: "09:00 AM",
          finishTime: "03:00 PM",
          playingDay: ["2024-07-15", "2024-07-17", "2024-07-20"],
          description: "Torneo de pádel para la categoría de cuarta.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 3,
          inscripciones: "cerrada",
          status: "finalizado",
          category: {
            id: "2",
            name: "Cuarta",
            description: "Categoría cuarta",
          },
          genero: "femenino",
          teamsQuantity: 6,
          matchDuration: 75,
          fixture: [
            {
              id: "2",
              stage: "Fase de Grupos",
              date: "2024-07-15",
              time: "09:00 AM",
              matchId: 2,
              tournamentId: 2,
            },
          ],
        },
        matches: [],
      },
    ],
    matches: [],
  },

  {
    id: "3",
    name: "Copa Invierno",
    startDate: "2024-12-01",
    endDate: "2024-12-15",
    startingTime: "11:00 AM",
    finishTime: "05:00 PM",
    playingDay: ["2024-12-01", "2024-12-05", "2024-12-10", "2024-12-15"],
    description: "Torneo de pádel para la categoría de tercera.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Padel_match.jpg",
    ],
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "por comenzar",
    category: { id: "3", name: "Tercera", description: "Categoría tercera" },
    genero: "masculino",
    teamsQuantity: 10,
    matchDuration: 100,
    fixture: [
      {
        id: "3",
        stage: "Fase de Grupos",
        date: "2024-12-01",
        time: "11:00 AM",
        matchId: 3,
        tournamentId: 3,
      },
    ],
    team: [
      {
        id: "3",
        name: "Equipo C",
        category: {
          id: "3",
          name: "Tercera",
          description: "Categoría tercera",
        },
        users: [
          {
            id: "4",
            name: "Carlos",
            lastName: "Sánchez",
            email: "carlos.sanchez@example.com",
            password: "password123",
            phone: "654321987",
            country: "Argentina",
            city: "Rosario",
            address: "Calle de la Paz 789",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "3",
          name: "Copa Invierno",
          startDate: "2024-12-01",
          endDate: "2024-12-15",
          startingTime: "11:00 AM",
          finishTime: "05:00 PM",
          playingDay: ["2024-12-01", "2024-12-05", "2024-12-10", "2024-12-15"],
          description: "Torneo de pádel para la categoría de tercera.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 5,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "3",
            name: "Tercera",
            description: "Categoría tercera",
          },
          genero: "masculino",
          teamsQuantity: 10,
          matchDuration: 100,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },

  {
    id: "4",
    name: "Torneo de Otoño",
    startDate: "2024-10-10",
    endDate: "2024-10-20",
    startingTime: "12:00 PM",
    finishTime: "06:00 PM",
    playingDay: ["2024-10-10", "2024-10-12", "2024-10-15", "2024-10-20"],
    description: "Torneo de pádel para la categoría de primera.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 6,
    inscripciones: "abierta",
    status: "por comenzar",
    category: { id: "4", name: "Primera", description: "Categoría primera" },
    genero: "femenino",
    teamsQuantity: 12,
    matchDuration: 120,
    fixture: [
      {
        id: "4",
        stage: "Fase Final",
        date: "2024-10-20",
        time: "12:00 PM",
        matchId: 4,
        tournamentId: 4,
      },
    ],
    team: [
      {
        id: "4",
        name: "Equipo D",
        category: {
          id: "4",
          name: "Primera",
          description: "Categoría primera",
        },
        users: [
          {
            id: "5",
            name: "María",
            lastName: "López",
            email: "maria.lopez@example.com",
            password: "password123",
            phone: "789654321",
            country: "Argentina",
            city: "Mendoza",
            address: "Calle del Vino 101",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "4",
          name: "Torneo de Otoño",
          startDate: "2024-10-10",
          endDate: "2024-10-20",
          startingTime: "12:00 PM",
          finishTime: "06:00 PM",
          playingDay: ["2024-10-10", "2024-10-12", "2024-10-15", "2024-10-20"],
          description: "Torneo de pádel para la categoría de primera.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 6,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "4",
            name: "Primera",
            description: "Categoría primera",
          },
          genero: "femenino",
          teamsQuantity: 12,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },

  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },

  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "5",
    name: "Torneo Internacional",
    startDate: "2024-11-05",
    endDate: "2024-11-15",
    startingTime: "01:00 PM",
    finishTime: "07:00 PM",
    playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
    description:
      "Torneo de pádel internacional con jugadores de todo el mundo.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: ["https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg"],
    courtsAvailable: 8,
    inscripciones: "abierta",
    status: "por comenzar",
    category: {
      id: "5",
      name: "Internacional",
      description: "Categoría internacional",
    },
    genero: "masculino",
    teamsQuantity: 16,
    matchDuration: 120,
    fixture: [
      {
        id: "5",
        stage: "Fase de Eliminación",
        date: "2024-11-15",
        time: "01:00 PM",
        matchId: 5,
        tournamentId: 5,
      },
    ],
    team: [
      {
        id: "5",
        name: "Equipo E",
        category: {
          id: "5",
          name: "Internacional",
          description: "Categoría internacional",
        },
        users: [
          {
            id: "6",
            name: "Pedro",
            lastName: "García",
            email: "pedro.garcia@example.com",
            password: "password123",
            phone: "456789123",
            country: "Argentina",
            city: "Salta",
            address: "Calle del Sol 202",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "5",
          name: "Torneo Internacional",
          startDate: "2024-11-05",
          endDate: "2024-11-15",
          startingTime: "01:00 PM",
          finishTime: "07:00 PM",
          playingDay: ["2024-11-05", "2024-11-07", "2024-11-10", "2024-11-15"],
          description:
            "Torneo de pádel internacional con jugadores de todo el mundo.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 8,
          inscripciones: "abierta",
          status: "por comenzar",
          category: {
            id: "5",
            name: "Internacional",
            description: "Categoría internacional",
          },
          genero: "masculino",
          teamsQuantity: 16,
          matchDuration: 120,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  // Agrega más torneos según sea necesario...
];
