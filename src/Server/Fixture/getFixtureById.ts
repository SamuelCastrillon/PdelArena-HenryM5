import { axiosInstance } from "../AxiosConfig";

export const getFixtureById = async (fixtureId: string) => {
  console.log(fixtureId);
  try {
    const response = await axiosInstance.get(`/tournamentfixture/${fixtureId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
