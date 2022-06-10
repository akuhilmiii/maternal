import Navbar from './Navbar'
import Footer from './Footer'

const callouts = [
    {
      name: '',
      description: 'MATERNAL DISASTER X ERGA STOOL',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/1-2.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: 'Kolab1',
    },
    {
      name: '',
      description: 'MATERNAL DISASTER X MESIN TEMPUR',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2022/02/1-1.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: 'Kolab2',
    },
    {
      name: '',
      description: 'MATERNAL DISASTER X HIKARI RIDERS',
      imageSrc: 'https://www.maternaldisaster.com/wp-content/uploads/2021/12/1-1.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: 'Kolab3',
    },
  ]
  
  export default function Example() {
    return (
        <>
        <Navbar/>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-16 lg:py-16 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-white">Collaborations</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-white">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base mt-6 font-bold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  