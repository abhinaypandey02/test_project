import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'exi5i0sv', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})
