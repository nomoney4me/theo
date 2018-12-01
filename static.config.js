import axios from 'axios';
import fetch from 'node-fetch';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: `http://104.129.16.55:7474/graphql/`,
  fetch: fetch,
  headers: {
    "Authorization": `Basic ${process.env.AUTH}`
  }
});

const functions = {
  people: () => client.query({ query: gql`
    {
      People(status: "publish") {
        Name
        Person_Lookup
        status
        Aliases
        Verses {
          Osis_Ref
        }
        Personal_network
        Has_Been_to
        Events
      }
    }
  `
  }).then(res => res.data)
  ,
  places: () => client.query({ query: gql`
    {
      Places(status: "publish") {
        Place_Lookup
        Display_Title
        Has_been_here
        Verses
        Events_here
        status
      }
    }
  `
  }).then(res => res.data)
}

export default {
  // siteRoot: "",
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { People } = await functions.people()
    const { Places } = await functions.places()

    return [
      {
        path: '/people',
        component: 'src/pages/People.jsx',
        getData: () => ({
          People
        }),
        children: People.map(person => ({
          path: `/person/${person.Person_Lookup}`,
          component: 'src/pages/templates/peopleTemplate.jsx',
          getData: () => ({ person })
        }))
      },
      {
        path: '/places',
        component: 'src/pages/Places.jsx',
        getData: () => ({
          Places
        }),
        children: Places.map(place => ({
          path: `/place/${place.Place_Lookup}`,
          component: 'src/pages/templates/placesTemplate.jsx',
          getData: () => ({ place })

        }))
      },
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}