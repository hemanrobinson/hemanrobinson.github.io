import React from 'react';
import ReportCard from './ReportCard';
import './App.css';
import github from './github.svg';
import linkedin from './linkedin.svg';

// Application:  A grid of little problems.
function App() {
    return (
        <div>
            <div className="Description">
                <h1>Heman Robinson&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/hemanrobinson/hemanrobinson.github.io"><img className="icon" title="Code Shared on GitHub" alt="Code Shared on GitHub" src={github}/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/heman-robinson-953a1223/"><img className="icon" title="Contact me on LinkedIn" alt="Contact me on LinkedIn" src={linkedin}/></a></h1>
                <p>
                    I've spent my career developing user interfaces and data visualizations. These ideas from past projects may help others.
                </p>
                <p>
                    Click on any project below.  For each, you'll find:
                </p>
                <ul>
                    <li>Working code under MIT license</li>
                    <li>Usability considerations that drove the design</li>
                    <li>References for further reading</li>
                </ul>
            </div>
            <div className="App Two">
                <ReportCard title="Good Plot Symbols"           href="https://hemanrobinson.github.io/good-plot-symbols/"   img="good-plot-symbols-small.png" text="Symbols with Preattentive Features that Improve Usability" />
                <ReportCard title="Optimized Brushing"          href="https://hemanrobinson.github.io/fast-brushing/"       img="fast-brushing-small.png"     text="Usability and Performance Optimizations for Brushing" />
            </div>
            <div className="App Two">
                <ReportCard title="Top N and Binning"           href="https://hemanrobinson.github.io/top-n-binning/"       img="top-n-binning-small.png"     text="Dynamic Top N and Binning Visualizations" />
                <ReportCard title="Discoverable Zooming"        href="https://hemanrobinson.github.io/zoom/"                img="zoom-small.png"              text="Easily Learned Scale Adjustment" />
            </div>
            <div className="Description">
                <h2>Inspiration</h2>
                <p>
                On user interface design, my main influences are <a href="http://www.cs.umd.edu/users/ben/">Shneiderman</a> and <a href="https://www.nngroup.com/people/jakob-nielsen/">Nielsen</a>.  I believe in following standard design patterns, like <a href="https://material.io">Material Design</a>, to minimize the user's learning curve.
                </p>
                <p className="center">
                    <img title="Inspiration: Usability" alt="Inspiration: Usability" src="usability.jpg"/>
                </p>
                <p>
                On visualization, my main influences are <a href="https://www.stat.purdue.edu/~wsc/">Cleveland</a> and <a href="https://www.edwardtufte.com/tufte/">Tufte</a>, who emphasize the data and de-emphasize everything else.  <a href="https://www.perceptualedge.com">Few</a> is an expert on usability of visualizations, particularly of dashboards.  I believe in making visualizations as interactive as possible, to enable users to work efficiently, at their own speed.
                </p>
                <p className="center">
                    <img title="Inspiration: Visualization" alt="Inspiration: Visualization" src="visualization.jpg"/>
                </p>
                <p>
                    Thanks for viewing!
                </p>
            </div>
        </div>
    );
}

export default App;
