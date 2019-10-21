import React from "react";

function Gallery() {

  return (
      <>
 <hr />

<div class="card">
  <div class="card-header">
  <h5 className="card-title">Some of my pictures</h5>
  </div>
  <div className="card-body">
    <div className="container">
    <div className="box">
      <img src="https://source.unsplash.com/1000x800" />
    <span>Photo 1</span>
  </div>
  <div className="box">
    <img src="https://source.unsplash.com/1000x802" />
    <span>Photo 2</span>
  </div>
  <div className="box">
    <img src="https://source.unsplash.com/1000x804" />
    <span>Photo 3</span>
  </div>
  <div className="box">
    <img src="https://source.unsplash.com/1000x806" />
    <span>Photo 4</span>
  </div>
</div>

  </div>
</div>
    
</>
);
}

export default Gallery;
