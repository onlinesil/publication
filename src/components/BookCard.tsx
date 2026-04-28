import { Book } from '../data/books';
import { useState } from 'react';
import { X } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Schema.org JSON-LD for individual Books
  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": {
      "@type": "Person",
      "name": book.author
    },
    "isbn": book.isbn,
    "bookFormat": book.format === 'Paperback' ? "https://schema.org/Paperback" : "https://schema.org/BookFormatType",
    "datePublished": book.publishDate,
    "publisher": {
      "@type": "Organization",
      "name": "Mullick Library"
    }
  };

  return (
    <>
      <div 
        className="group cursor-pointer flex flex-col bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }} />
        <div className="bg-gray-50 aspect-[1420/1110] mb-5 rounded-xl shadow-inner flex items-center justify-center relative overflow-hidden">
          <img 
            src={book.coverUrl} 
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms] ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        <div className="mb-3">
          <span className="inline-block border border-gray-200 text-gray-500 text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm font-medium">
            {book.format}
          </span>
        </div>
        <h4 className="font-serif text-xl font-semibold text-gray-900 leading-tight mb-2 group-hover:text-gray-600 transition-colors">{book.title}</h4>
        <p className="font-sans text-sm font-medium text-gray-500 mb-2">{book.author}</p>
        <p className="font-sans text-sm font-light text-gray-500 leading-relaxed line-clamp-2">
          {book.description}
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm transition-opacity"
             onClick={() => setIsModalOpen(false)}>
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/20 text-white hover:bg-black/40 rounded-full transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            
            {/* Image Pane */}
            <div className="w-full md:w-1/2 h-80 md:h-auto flex-shrink-0 bg-gray-50 flex items-center justify-center p-8 sm:p-12">
              <img 
                src={book.coverUrl} 
                alt={`Cover of ${book.title}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>

            {/* Details Pane */}
            <div className="w-full md:w-1/2 p-8 sm:p-14 flex flex-col overflow-y-auto">
              <h2 className="font-serif text-4xl font-semibold tracking-tight leading-tight mb-2 text-gray-900">{book.title}</h2>
              <p className="font-sans text-lg font-medium text-gray-500 mb-8">{book.author}</p>
              
              <div className="space-y-4 font-sans text-base font-light leading-relaxed text-gray-600 mb-12">
                <p>{book.description}</p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs uppercase font-sans tracking-widest text-gray-500">
                <div>
                  <span className="block font-semibold mb-2 text-gray-900">Format</span>
                  <span className="font-medium">{book.format}</span>
                </div>
                <div>
                  <span className="block font-semibold mb-2 text-gray-900">Publication Date</span>
                  <span className="font-medium">
                    {new Date(book.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <div className="mt-0">
                  <span className="block font-semibold mb-2 text-gray-900">ISBN</span>
                  <span className="font-medium">{book.isbn}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
