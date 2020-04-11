import React from 'react';
import Loadable from 'react-loadable'

function Loading(){
  return <div>loading...</div>
}

const Home = Loadable({
  loading: Loading,
  loader: () => import('../components/Home')
})
const Login = Loadable({
  loading: Loading,
  loader: () => import('../components/Login')
})
const User = Loadable({
  loading: Loading,
  loader: () => import('../components/User')
})
const Error = Loadable({
  loading: Loading,
  loader: () => import('../components/Error')
})

const routes = [{
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '*',
    component: Error
  }
]

export default routes;