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
                    My career has been spent designing and developing user interfaces and data visualizations.
                </p>
                <p>
                    These fields present many interesting problems.  I hope others may benefit from these suggested solutions.
                </p>
                <p>
                    All the code here is under MIT license.  If you can suggest improvements, please contact me on LinkedIn.  Thanks!
                </p>
            </div>
            <div className="App Two">
                <ReportCard title="Preattentive Plotting" href="https://hemanrobinson.github.io/preattentive/"  img="symbols.png"    text="Discriminable Plot Symbols" />
                <ReportCard title="Persistent Brushing"   href="https://hemanrobinson.github.io/brush/"         img="brush.png"      text="Brush Performance and Usability" />
            </div>
            <div className="App Two">
                <ReportCard title="Dynamic Binning"       href="https://hemanrobinson.github.io/bin/"           img="bin.png"        text="Interactive Bin Adjustment" />
                <ReportCard title="Discoverable Zooming"  href="https://hemanrobinson.github.io/zoom/"          img="zoom.png"       text="Easily Learned Scale Adjustment" />
            </div>
            <div className="App One">
                <ReportCard title="SVG versus CANVAS"     href="https://hemanrobinson.github.io/svg-canvas/"    img="svgcanvas.png"  text="SVG versus Canvas Performance" />
            </div>
            <div className="Description">
                <br />
                <br />
                <br />
                <h2>Inspiration</h2>
                <p>
                    <img alt="Inspiration: Visualization" src="inspiration0.jpg"/>
                </p>
                <p>
                On visualization, my main influences are <a href="https://www.stat.purdue.edu/~wsc/">Cleveland</a> and <a href="https://www.edwardtufte.com/tufte/">Tufte</a>, who emphasize the data and de-emphasize everything else.  <a href="https://www.perceptualedge.com">Few</a> is an expert on usability of visualizations, particularly of dashboards.  I believe in making visualizations as interactive as possible, to enable users to work efficiently, at their own speed.
                </p>
                <p>
                    <img alt="Inspiration: Usability" src="inspiration1.jpg"/>
                </p>
                <p>
                On user interface design, my main influences are <a href="http://www.cs.umd.edu/users/ben/">Shneiderman</a> and <a href="https://www.nngroup.com/people/jakob-nielsen/">Nielsen</a>.  I believe in following standard design patterns, like <a href="https://material.io">Material Design</a>, to minimize the user's learning curve.
                </p>
            </div>
        </div>
    );
}

export default App;
