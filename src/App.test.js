import { act, render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

let container;

beforeEach(() => {
    container = document.createElement( "div" );
    document.body.appendChild( container );
});

afterEach(() => {
    document.body.removeChild( container );
    container = null;
});

test( "renders App with childnodes", () => {
    // Test first render and componentDidMount
    act(() => {
        ReactDOM.render(<App />, container );
    });
    const div = container.querySelector( "div" );
    expect( div.className ).toBe( "" );
    expect( div.childNodes.length ).toBe( 4 );
});
