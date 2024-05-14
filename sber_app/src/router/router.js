import DifferentQuotes from '../Components/DifferentQuotes';
import Game from '../Components/Game';
import Menu from '../Components/Menu';

export const Pages =[
    {path: '/menu', component: Menu},
    {path: '/', component: Menu},
    {path: '*', component: Menu},
    {path: '/quotes', component: DifferentQuotes},
    {path: '/game', component: Game},
]
