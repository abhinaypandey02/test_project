import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})
