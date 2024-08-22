// tournamentsData.ts

import { ITournament } from "@/interfaces/Tournament";

export const tournaments: ITournament[] = [
  {
    id: "1",
    name: "Torneo de Primavera",
    startDate: "2024-09-01",
    endDate: "2024-09-05",
    startingTime: "10:00 AM",
    finishingTime: "04:00 PM",
    playingDays: ["2024-09-01", "2024-09-03", "2024-09-05"],
    description: "Torneo de pádel para la categoría de segunda.",
    imageUrl:
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/8/10/wayekhjulogbkd3ctt3p/alejandro-galan-padel-spain",
    courtsAvailable: 4,
    inscripciones: "abierta",
    status: "upcoming",
    categoria: "segunda",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 1,
        tournamentId: 2,
      },
    ],
  },
  {
    id: "2",
    name: "Copa Verano",
    startDate: "2024-07-15",
    endDate: "2024-07-20",
    startingTime: "09:00 AM",
    finishingTime: "03:00 PM",
    playingDays: ["2024-07-15", "2024-07-17", "2024-07-20"],
    description: "Torneo de pádel para la categoría de cuarta.",
    imageUrl: "https://cache.tradeinn.com/web/finders/padelFinder-detalle.webp",
    courtsAvailable: 3,
    inscripciones: "cerrada",
    status: "finished",
    categoria: "cuarta",
    genero: "femenino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 3,
        tournamentId: 2,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "inProgress",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "finished",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "inProgress",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "inProgress",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "inProgress",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Desafío Otoño",
    startDate: "2024-10-01",
    endDate: "2024-10-10",
    startingTime: "08:00 AM",
    finishingTime: "02:00 PM",
    playingDays: ["2024-10-01", "2024-10-05", "2024-10-10"],
    description: "Torneo de pádel para la categoría de tercera.",
    imageUrl:
      "https://www.bnlitalymajorpremierpadel.com/media/FIT/Supertennis/Photo_Galleries/20220519_Padel_Doha_21.jpg",
    courtsAvailable: 5,
    inscripciones: "abierta",
    status: "upcoming",
    categoria: "tercera",
    genero: "masculino",
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 4,
        tournamentId: 3,
      },
    ],
  },
];
