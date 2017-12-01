import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from 'components/app';

const root = document.getElementById('root');

const renderComponent = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        root
    );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('components/app', () => {
        renderComponent(App);
    });
}
