    const heading =React.createElement(
        "h1",
        {  // props 
            id:"title"
        },
        "SincosTani🪴  :--1 "
    );
    const heading1 =React.createElement(
        "h2",
        {  // props 
            id:"title"
        },
        "SincosTani🪴  :--2 "
    );
    const container =React.createElement("div",{
        id:container
    },[heading,heading1])
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);