import React from 'react'

const NavComponent = ({component}) => {
  return (
    <>
        {component ? (
            <div>
              <h1>Nothing Page</h1>
            </div>
          ) : (
            <div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl">Product description</h3>
                <p>
                  Since it’s creation lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <p className="py-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
              <div className="">
                <div className="grid md:grid-cols-2">
                  <img
                    className="w-full"
                    src="./products/Basic-Gray-Jeans.jpeg"
                    alt=""
                  />
                  <img
                    className="w-full"
                    src="./products/Yellow-Shoes.jpeg"
                    alt=""
                  />
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="md:order-1 flex flex-col justify-center gap-4 p-8 bg-white">
                    <div>
                      <h4 className="text-xl">Ut enim ad minim</h4>
                      <p className="text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl">Quis nostrud</h4>
                      <p className="text-slate-500">
                        Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl">Duis aute irure</h4>
                      <p className="text-slate-500">
                        Dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <img
                    className="w-full"
                    src="./products/Blue-Shoes.jpeg"
                    alt=""
                  />
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="bg-white flex flex-col justify-center gap-3 p-8">
                    <h4 className="text-xl">More about the product</h4>
                    <p className="text-sm text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in.
                    </p>
                  </div>
                  <img
                    className="w-full"
                    src="./products/Blue-Shoes.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
    </>
  )
}

export default NavComponent