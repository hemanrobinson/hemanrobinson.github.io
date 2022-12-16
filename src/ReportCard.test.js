import React from 'react';
import ReactDOM from 'react-dom';

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ReportCard from "./ReportCard";

let container = null;

// Sets up a DOM element as a render target.
beforeEach(() => {
    container = document.createElement( "div" );
    document.body.appendChild( container );
});

// Cleans up on exit.
afterEach(() => {
    unmountComponentAtNode( container );
    container.remove();
    container = null;
});

it( "creates a ReportCard", () => {
    act(() => {
        render( <ReportCard title="" href="href" img="image" text="Hello, Sailor." />, container );
    });
    expect( container.textContent ).toBe( "Hello, Sailor." );
});
