import Navbar from '../Navbar'
import Footer from '../Footer'

const products = [
    {
      id: 1,
      name: 'MELUNCUR SS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/meluncur-ss-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
      href : '#'
    },
    {
      id: 1,
      name: 'MT LUNCUR SS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/mt-luncur-ss-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 189.000',
    },
    {
      id: 1,
      name: 'MELUNCUR LS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/meluncur-ls-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 189.000',
    },
    {
      id: 1,
      name: 'MT LUNCUR LS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/mt-luncur-ss-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 189.000',
    },
    {
      id: 1,
      name: 'TOPI TEMPUR',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/topi-tempur-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
    },
    {
      id: 1,
      name: 'TOPENG TEMPUR',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/topeng-tempur-1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 109.000',
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
  