import React from 'react';
import ReportCard from './ReportCard';
import './App.css';

// Application:  A grid of little problems.
function App() {
    return (
        <div>
            <div className="Description">
                <h2>Heman Robinson</h2>
                <p>
                <a href="https://www.linkedin.com/in/heman-robinson-953a1223/">on LinkedIn</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/hemanrobinson/hemanrobinson.github.io">on GitHub</a>
                </p>
                <p>
                My career has been spent designing and developing user interfaces and visualizations for data analysis.
                </p>
                <p>
                These fields have lots of little unsolved problems, and GitHub provides a place to solve them.
                </p>
            </div>
            <div className="App">
                <ReportCard title="SVG versus CANVAS"     href="https://hemanrobinson.github.io/svg-canvas/"    img="svgcanvas.png"  text="Simple Performance Test"   />
                <ReportCard title="Preattentive Symbols"  href="https://hemanrobinson.github.io/preattentive/"  img="symbols.png"    text="Improving Pattern Detection in Scatter Plots" />
                <ReportCard title="Zooming Aggregates"    href="https://hemanrobinson.github.io/zoom/"          img="zoom.png"       text="Applying Shneiderman's Mantra to Aggregate Graphs" />
            </div>
        </div>
    );
}

export default App;
