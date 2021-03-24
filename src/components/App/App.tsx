import React, { FunctionComponent } from 'react';

import { Generic } from '../../assets/types';

interface AppProps {
    dummyData: Generic
}

const App: FunctionComponent<AppProps> = (props) => {

    return (
        <div className="app-container">
            <h1>Base React App</h1>
        </div>
    )
}

export default App;
