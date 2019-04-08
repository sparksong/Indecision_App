console.log('app.js is running');

const app = {
    title: 'Indescision App',
    subtitle: 'Put your life in the hands of a computer..',
    options: []

};


const onFormSubmit = (e) => {
    //Stops full page refresh
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        console.log('Form submitted ', option);
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);

    console.log(randomNum);
};

const numbers = [55, 101, 1000];

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
        
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>

            <ol>
            {
                 app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        
        ReactDOM.render(template, appRoot);
}

renderApp();
