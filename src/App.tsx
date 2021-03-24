import React from 'react';
import Main from './pages/Main';

import { GlobalStyles } from './assets/styles/global';

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />
            <Main />
        </>
    );
};

export default App;
