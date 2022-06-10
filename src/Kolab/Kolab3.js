import Navbar from '../Navbar'
import Footer from '../Footer'

const products = [
    {
      id: 1,
      name: 'RIDESTER TS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-ts-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
      href : '#'
    },
    {
      id: 1,
      name: 'RIDESTER ZH',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-zh-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 369.000',
    },
    {
      id: 1,
      name: 'RIDESTER WB',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-wb-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 399.000',
    },
    {
      id: 1,
      name: 'RIDESTER SB',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-sb-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 309.000',
    },
    {
      id: 1,
      name: 'RIDESTER HC',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-hc-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 99.000',
    },
    {
      id: 1,
      name: 'RIDESTER GL',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/ridester-gl-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 209.000',
    },
  ]
  
  export default function Example() {
    return (
      <>
      <Navbar/>      
      <div className="bg-black">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-white">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      </>

    )
  }
  