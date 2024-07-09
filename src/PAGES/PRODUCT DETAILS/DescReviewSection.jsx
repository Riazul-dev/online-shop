import React from 'react'
import NavComponent from './NavComponent'

const DescReviewSection = ({component, setComponent, displayProduct}) => {
  return (
    <div className="px-4 lg:px-6">
          <nav className="border-t-4 md:border-t-2 border-slate-600 md:border-slate-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <button
                className={`${!component && "border-t-4 border-slate-950 text-blue-500 py-4"}`}
                onClick={() => setComponent(false)}
              >
                Description
              </button>
              <button
                className={`${component && "border-t-4 border-slate-950 text-blue-500 py-4"} `}
                onClick={() => setComponent(true)}
              >
                Reviews (0)
              </button>
            </div>
          </nav>
          {/* Product Description */}
          <div>
            <NavComponent component={component} displayProduct={displayProduct} />
          </div>
          
        </div>
  )
}

export default DescReviewSection