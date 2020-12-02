import React from 'react'

function YtContainer({strYoutube}) {
    return (
        <div className="ytContainer">
            <div className="firstTut">
                <h3>Watch Tutorials</h3>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/5rbrzpF8iFI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="secondTut">
                <h3>Another by dev ed</h3>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U9T6YkEDkMo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            
        </div>
    )
}

export default YtContainer
