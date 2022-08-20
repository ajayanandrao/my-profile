import React from 'react'
import './Three.scss';

const Three = () => {
  return (
    <>
     <div className="page-three" id="Section-3">

<span className="page-two-span">
    <span className="span-display-block">
        <h2>Get Started</h2>
    </span>
</span>
<div className="page-three-section1">
    <div className="col">
        <div className="page-three-card-left">
            <h1>100% <p>Satisfaction <br /> Guaranteed</p></h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet repellendus dolore aperiam earum minima cumque exercitationem nisi nobis perferendis tenetur ex facilis itaque nam qui, facere sint laborum eligendi est?

            <h4>What will be the next step?</h4>
                <div className="g-icon">
                    <i className="material-icons">check</i>We'll prepare the proposal
                </div>
                <div className="g-icon">
                    <i className="material-icons">check</i>We'll discuss it together
                </div>
            
        </div>
    </div>
    <div className="col">
        <form>
            <div className="page-three-card-right">
                <label className="form-label">Name:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter name" name="email" />
                <br /><label  className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                <div className="mb-3 mt-3">
                    <label >Comments:</label>
                    <textarea className="form-control" rows="5" id="comment" placeholder="Comments" name="text"></textarea>
                </div>
                <button type="submit" className="btn btn-glass"><a href="#Section-4">Submit</a></button>
            </div>
        </form>

    </div>
</div>
</div>

    </>
  )
}

export default Three