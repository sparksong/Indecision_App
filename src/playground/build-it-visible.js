console.log('buildItVisible.js is running');

const app = {
    title: 'Visibility Toggle',
    details: 'Here are the details that were hidden! Click the hide button to hide them again!',
    isVisible: false,
};

const onDetailsButtonClick = () => {
    app.isVisible = !app.isVisible;
    renderApp();
}

const renderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onDetailsButtonClick}>{app.isVisible ? 'Hide Details' : 'Show Details'}</button>
            {app.isVisible && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));

};

renderApp();