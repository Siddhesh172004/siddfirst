import React from "react";

const Navbarfilter = ({ filterit, uniquelist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {uniquelist.map((current,index) => {
            console.log(index);
            return (
              <button
                className="btn-group__item"
                onClick={() => {
                  filterit(current);
                }}
              >
                {current}
              </button>
            );
          })}
        </div>
      </nav>

      <script>
        current(5)="active"
        </script>
    </>
  );
};

export default Navbarfilter;
