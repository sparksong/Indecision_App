console.log('app.js is running');

const app = {
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer..',
    options: ['One', 'Two']

};


const onFormSubmit = (e) => {
    //Stops full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;

    console.log('Form submitted ', option);
};

const template = ( 
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);