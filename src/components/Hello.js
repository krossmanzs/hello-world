import React from 'react'

/*
    JavaScript XML (JSX)
    Extension to the JavaScript language syntax

    - Write XML-like code for elements and components
    - JSX tags have a tag name, attributes, and children.
    - JSX is not a necessity to write React applications
    - JSX makes your react code simpler and elegant
    - JSX ultimately transpiles to pure JavaScript which is understood by the browsers

    JSX difference
    Class -> className
    for -> htmlFor
    camelCase property naming convention
        - onclick -> onClick
        - tabindex -> tabIndex
    more info: https://github.com/facebook/react/issues/13525
*/

const Hello = () => {
    // with JSX
    // return (
    //     // this is returning JSX
    //     <div className='dummyClass'>
    //         <h1>
    //             Halo es, ini JSX
    //         </h1>
    //     </div>
    // )

    // without JSX
    // React.createElement(<html tag>, <optional props>, <children of html tag>)
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Gesss')
    )
}

export default Hello