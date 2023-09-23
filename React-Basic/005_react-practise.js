const app = document.getElementById("app");

/**
 * The same way like html element has attributes.
 * We can pass data to component.
 * And collect them via 'props'
 */
function Title(props) {
    return (
        <div>
            <h1> {props.title} </h1>
            {/* using curly braces we can write javascript inside jsx */}
        </div>
    );
}

/**
 * Uses object destructring to directly use the parameter
 * instead of using props.param
 * The empty element <> used here is called fragment,
 * Fragment helps to render UI without add one more element
 *     and directl adding the componenet inside the calling componenet
 *     i.e., parent component.
 */
function Header({ context }) {
    return (
        <>
            <h2> {context} </h2>
        </>
    );
}

// Iterating through lists
function Names({ nameList = [] }) {
    return (
        <ul>
            {nameList.map((name) => {
                return (
                    <li id={name} key={name}>
                        {name}
                    </li>
                );
            })}
        </ul>
    );
}

// Interactivity with State and event handlers in react
function ToggleButton() {
	const [visibility, setVisibility] = React.useState("initial");

    function clickHandlerFunction() {
		setVisibility(visibility === "initial" ? "none" : "initial");
    }

	return (
        <>
            <button onClick={clickHandlerFunction}> {visibility == "none" ? "Show" : "Hide"} Text &gt; </button>
            <span style={{ display: visibility }}> React Event Handling Using State </span>
        </>
    );
}

/**
 * The main <App /> componenet
 * If you inspect,
 * The <Title /> is render inside an nested <div>
 * while the <Header /> is render inside the main #app div, bcoz of the use
 *     of fragment <> in header component.
 */
function Homepage() {
	return (
        <>
            <Title title="React Practise" />
            <Header context="Run...Build...Deploy...🚀" />
            <Names
                nameList={["Kate", "Mike", "Jake", "Harry", "Hermione", "Ron"]}
            />
            <ToggleButton />
        </>
    );
}

ReactDOM.render(<Homepage />, app);