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
                <ReportCard title="Preattentive Symbols"  href="https://hemanrobinson.github.io/preattentive/"  img="symbols.png"    text="Improving Pattern Detection" />
                <ReportCard title="Zooming Aggregates"    href="https://hemanrobinson.github.io/zoom/"          img="zoom.png"       text="Applying Shneiderman's Mantra" />
                <ReportCard title="Brushing One Million"  href="https://hemanrobinson.github.io/brush/"         img="brush.png"      text="Scatterplot Brushing Performance" />
                <ReportCard title="SVG versus CANVAS"     href="https://hemanrobinson.github.io/svg-canvas/"    img="svgcanvas.png"  text="SVG versus Canvas Performance" />
            </div>
            <div className="Description">
                <br />
                <br />
                <br />
                <h2>Inspiration</h2>
                <p>
                    <img src="inspiration.jpg"/>
                </p>
                <p>
                My main influences are Cleveland and Tufte, who emphasize the data and de-emphasize everything else.  Few is expert on usability, particularly of dashboards.
                </p>
            </div>
        </div>
    );
}

export default App;
