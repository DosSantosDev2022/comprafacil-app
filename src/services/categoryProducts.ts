import { fetchHygraphQuery } from '@/app/api/hygraph'

interface HygraphResponse {
	products: Product[]
	productsConnection: {
		aggregate: {
			count: number
		}
	}
}

export interface Product {
	id: string
	title: string
	description: string
	affiliate: {
		name: string
		image: {
			url: string
		}
	}
	category: {
		url: string
	}
	url: string
	image: {
		url: string
	}
}

interface Data {
	products: Product[]
	totalCount: number
}

export const GET_PRODUCTS_BY_CATEGORY_PAGINATION = async (
	category: string,
	page: number,
	pageSize: number,
): Promise<Data> => {
	const query = `
    query MyQuery($category: String, $first: Int, $skip: Int) {
      products(
        where: { category: { url: $category } }
        first: $first
        skip: $skip
      ) {
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
      productsConnection(where: { category: { url: $category } }) {
        aggregate {
          count
        }
      }
    }
  `

	const skip = (page - 1) * pageSize
	const variables = { category, first: pageSize, skip }

	const response = await fetchHygraphQuery<HygraphResponse>(
		query,
		variables,
	)

	const { products, productsConnection } = response

	if (!products || !productsConnection) {
		throw new Error('Failed to fetch products or productsConnection')
	}

	const totalCount = productsConnection.aggregate.count
	return { products, totalCount }
}
