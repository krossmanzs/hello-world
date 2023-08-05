import React from 'react'

// normal function syntax
// function Greet() {
//     return <h1>Halo dunia</h1>
// }

// arrow function syntax
// const Greet = () => <h1>Halo dunia</h1>

// name export
export const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Halo {props.name}, hobimu adalah {props.hobby}</h1>
            {props.children}
        </div>
    )
}

// export Greet component as default component of this file
// export default Greet