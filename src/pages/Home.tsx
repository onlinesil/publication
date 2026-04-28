import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export function Home() {
  // Limit to 4 books as requested
  const displayedBooks = books.slice(0, 4);

  // Schema.org JSON-LD for the Publishing House and Website
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Mullick Library",
        "url": "https://www.mullicklibrary.com/"
      },
      {
        "@type": "PublishingHouse",
        "name": "Mullick Library",
        "url": "https://www.mullicklibrary.com",
        "logo": "https://www.mullicklibrary.com/images/logo.png",
        "description": "Mullick Library is an independent publisher dedicated to bringing provocative, beautiful, and transformative literature to the world."
      }
    ]
  };

  return (
    <div className="flex-1 bg-[#FAFAFA] text-gray-900 overflow-hidden pt-20 md:pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      
      {/* Hero Section */}
      <section className="pt-12 pb-24 px-6 sm:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-[#FAFAFA] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
            Curating voices<br/>that define our times.
          </h1>
          <p className="font-sans text-lg text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Mullick Library is an independent publisher dedicated to bringing provocative, beautiful, and transformative literature to the world.
          </p>
          <div className="flex justify-center">
            <a href="#catalog" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Explore Catalog
            </a>
          </div>
        </div>
      </section>

     

      {/* Catalog Section */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 sm:px-10 pb-32">
        <header className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-3">Browse Curated Works</h2>
          <div className="w-12 h-0.5 bg-gray-300 mx-auto" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}
