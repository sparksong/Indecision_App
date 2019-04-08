'use strict';

console.log('app.js is running');

var app = {
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer..',
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    //Stops full page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        console.log('Form submitted ', option);
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);

    console.log(randomNum);
};

var numbers = [55, 101, 1000];

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options:' : 'No options available'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
