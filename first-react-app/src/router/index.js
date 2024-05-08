import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";



export const privateRoutes =[
    {path: '/about', component: About},
    {path: '/', component: Posts},
    {path: '*', component: Error},
    {path: '/post', component: Posts},
    {path: '/post/:id', component: PostIdPage},
]

export const publicRoutes =[
    {path: '/login', component: Login},
    {path: '*', component: Login},
]