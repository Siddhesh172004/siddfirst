import React from "react";

const Menucart = ({ Menudata }) => {
  // console.log(Menudata);
  return (
    <>
      <section className="main-card--cointainer">
        {Menudata.map((curr) => {
          const { id, image, name, category, description } = curr; // destructuing of array

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description">{description}</span>
                    <div className="card-read">Read</div>
                    <img src={image} alt="sidd" className="card-media"></img>
                    <button className="btn-buy">Buy Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Menucart;
