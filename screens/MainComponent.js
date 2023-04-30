import { useState } from 'react';
import { BEERS } from '../shared/BEERS';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [beers, setBeers] = useState(BEERS);

    return <DirectoryScreen beers={beers} />
};

export default Main;