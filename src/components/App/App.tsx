import React, { FunctionComponent } from 'react';

interface AppProps {
    // Props go here
}

const App: FunctionComponent<AppProps> = (props) => {
    return (
        <div className="app-container">
            <h1>Base React App</h1>
        </div>
    )
}

export default App;
