import React from 'react'
import "./Slide.css"

function Slide() {
    return (
        <div className="accordeon">
            <div class="accordion">

                        {/* <div className="titreTop3"> */}
                                <input type="radio" name="select" class="accordion-select" checked />
                            <div class="accordion-title"><span>Top 3 Séries Netflix selon Ingrid </span></div>
                            <div class="accordion-content">
                            {/* {isShowedIngrid ? <Top3Ingrid /> : ""} */}
                            
                            </div> 
                        {/* </div> */}

                        {/* <div className="titreTop3"> */}
                                <input type="radio" name="select" class="accordion-select" />
                            <div class="accordion-title"><span>Top 3 Séries Netflix selon Philippe </span></div>
                            <div class="accordion-content">Content</div> 
                        {/* </div> */}
                        

                        {/* <div className="titreTop3"> */}
                                <input type="radio" name="select" class="accordion-select" />
                            <div class="accordion-title"><span>Top 3 Séries Netflix selon Thibaut</span></div>
                            <div class="accordion-content">Content</div>
                        {/* </div> */}


                        {/* <div className="titreTop3"> */}
                                <input type="radio" name="select" class="accordion-select" />
                            <div class="accordion-title"><span>Top 3 Séries Netflix selon Damien</span></div>
                            <div class="accordion-content">Content</div>
                        {/* </div> */}
            </div> 
        </div>
    )
}
export default Slide;