import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'engineer-blog',  // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: 'ac3fd366-41c7-4274-9dc1-a13bf9bcee3f',
});