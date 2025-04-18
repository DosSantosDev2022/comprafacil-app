import { fetchHygraphQuery } from "@/app/api/hygraph";

interface HygraphResponse {
  assets: Asset[];
}
export type Asset = {
  id: string;
  url: string;
};

export type AssetsQueryResponse = {
  assets: Asset[];
};



export const GET_BANNERS = async () => {
  const query = `
   query MyQuery {
      assets(where: {fileName_contains: "banner"}) {
        id
        url
      }
    }
  `

  const response = await fetchHygraphQuery<HygraphResponse>(query);

  const {assets} = response

  if(!assets) {
    throw new Error('Erro ao buscar banners')
  }

  return {assets}
}