import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  ArrowRight
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteInfo';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

export const LearningEnvironment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const galleryItems: GalleryItem[] = [
    {
      id: 'lecture-setup',
      title: 'Classroom & Lecture Environment',
      category: 'Classroom',
      imageSrc: '/images/classrooms/classroom-interior.svg',
      description: 'Structured seating with whiteboard orientation designed for ledger problem walkthroughs, step-by-step accounting drills, and board answer presentation.'
    },
    {
      id: 'curriculum-resources',
      title: 'Ledgers, Calculations & Practice Sets',
      category: 'Resources',
      imageSrc: '/images/classrooms/study-books-accounting.svg',
      description: 'Dedicated focus on practical workbook solving, double-entry journalizing exercises, and quantitative business problem sets.'
    },
    {
      id: 'peer-learning',
      title: 'Focused Study & Doubt Resolution',
      category: 'Study Culture',
      imageSrc: '/images/students/student-discussion.svg',
      description: 'An interactive academic atmosphere where students clarify adjustment entries, economic theories, and commercial case studies.'
    }
  ];

  const categories = ['All', 'Classroom', 'Resources', 'Study Culture'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="environment" className="py-14 lg:py-20 bg-ivory-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Building className="w-3.5 h-3.5 mr-1" />
            Learning Environment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Classroom Infrastructure &amp; Study Culture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A glimpse into the pedagogical spaces and study environment at First Floor, Kanishk Plaza, Vishal Nagar, Jule Solapur.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 block"
                    loading="lazy"
                    width={800}
                    height={500}
                    style={{ aspectRatio: '800 / 500' }}
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-white px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Visit Prompt */}
        <div className="mt-10 text-center text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            Parents and prospective students are welcome to visit our center at Kanishk Plaza in Vishal Nagar to interact with Prof. Bhandare Sir.
          </span>
          <a
            href={INSTITUTE_INFO.contact.geo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-bold hover:underline shrink-0"
          >
            View Map →
          </a>
        </div>

      </div>
    </section>
  );
};
