import React from "react";

const ProductColor = ({colors}) => {
  return (
    <div className="flex items-center gap-3">
      {colors?.map((color, i) => {
        return (
          <div key={i} className="border border-slate-300 px-2">
            <button onClick={() => console.log(color)}>{color}</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductColor;
