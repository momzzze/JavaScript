let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    renderMethod();
}

const renderMethod = () => {
    let templateOne = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(templateOne, document.getElementById('app'));
}

renderMethod();