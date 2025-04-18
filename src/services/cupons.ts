import { fetchHygraphQuery } from "@/app/api/hygraph";

interface HygraphResponse {
  cupons: Cupom[];
}

export type Cupom = {
  id: string;
  label: string;
  description: string;
  validity: string;
};

export type Data = {
  cupons: Cupom[];
};

export const GET_CUPONS = async (): Promise<Data> => {
  const query = `
      query MyQuery {
        cupons {
          id
          label
          description
          validity
        }
      }
    `
  const response = await fetchHygraphQuery<HygraphResponse>(query);

  const { cupons } = response;

  if (!cupons) {
    throw new Error("Erro ao buscar cupons");
  }

  return { cupons };
};
