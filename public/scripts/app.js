'use strict';

console.log('app.js is running');

var app = {
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer..',
    options: ['One', 'Two']

};

var onFormSubmit = function onFormSubmit(e) {
    //Stops full page refresh
    e.preventDefault();

    var option = e.target.elements.option.value;

    console.log('Form submitted ', option);
};

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
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'One'
        ),
        React.createElement(
            'li',
            null,
            'Two'
        )
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

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
