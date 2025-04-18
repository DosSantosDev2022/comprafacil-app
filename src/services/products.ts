import { fetchHygraphQuery } from "@/app/api/hygraph"

interface HygraphResponse {
  products: Product[];
  productsConnection: {
    aggregate: {
      count: number;
    };
  };
}

 export interface Product {
  id: string;
  title: string;
  description: string;
    affiliate: {
      name: string
      image : {
        url: string
      }
    }
  category: {
    url: string
  }
  url: string;
  image: {
    url: string
  }
}

interface Data {
  products: Product[];
  totalCount: number
}


export const GET_PRODUCTS = async ():Promise<Data> => {
  const query = `
    query MyQuery {
      products {
        id
        slug
        title
        description
        affiliate {
         name
         image {
             url
           }
         }
        category {
         url
        }
        url
        image {
          url
        }
      }
        productsConnection {
        aggregate {
          count
        }
      }
    }
  `

  /* const skip = (page - 1) * pageSize
	const variables = { first: pageSize, skip } */

	const response = await fetchHygraphQuery<HygraphResponse>(
		query,
		/* variables, */
	)
	const { products,productsConnection } = response

	if (!products || !productsConnection) {
		throw new Error('Failed to fetch projects or projectConnection')
	}

	const totalCount = productsConnection.aggregate.count
	return { products,totalCount }
}