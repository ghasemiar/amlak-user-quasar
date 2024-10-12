import config from 'src/config';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export default function useTypesense(query_by: string) {
  try {
    const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
      server: {
        apiKey: config.TYPESENSE_API_KEY || '',
        nodes: [
          {
            host: config.TYPESENSE_HOST || '',
            port: Number(config.TYPESENSE_PORT) || 8108,
            protocol: config.TYPESENSE_PROTOCOL || 'http',
          },
        ],
      },
      additionalSearchParameters: {
        query_by: query_by,
      },
    });
    const searchClient = typesenseInstantsearchAdapter.searchClient;
    console.log('typesense run successfully');
    return { searchClient };
  } catch (err) {
    console.log('cant run typesense there is a problem : ', err);
  }
}
