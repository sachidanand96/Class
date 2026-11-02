import React, { useState } from 'react';
import { 
  Building, 
  BookOpen, 
  Users, 
  MapPin, 
  Layers, 
  ExternalLink,
  Info
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  placeholderNotice: string;
}

export const LearningEnvironment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const galleryItems: GalleryItem[] = [
    {
      id: 'lecture-setup',
      title: 'Classroom & Lecture Environment',
      category: 'Classroom',
      imageSrc: '/images/classrooms/classroom-interior.svg',
      description: 'Structured seating with whiteboard orientation designed for ledger problem walkthroughs and board exam presentation coaching.',
      placeholderNotice: 'Illustrative setup. Client photos of Kanishk Plaza classroom to be updated on clearance.'
    },
    {
      id: 'curriculum-resources',
      title: 'Ledgers, Calculations & Practice Sets',
      category: 'Resources',
      imageSrc: '/images/classrooms/study-books-accounting.svg',
      description: 'Dedicated focus on practical workbook solving, double-entry journalizing drills, and CA Foundation quantitative calculations.',
      placeholderNotice: 'Curriculum representation. Actual printed worksheets and study packets to be photographed.'
    },
    {
      id: 'peer-learning',
      title: 'Collaborative Problem Solving & Doubt Resolution',
      category: 'Study Culture',
      imageSrc: '/images/students/student-discussion.svg',
      description: 'Interactive academic atmosphere where commerce students clarify adjustment entries, economic theories, and case laws.',
      placeholderNotice: 'Academic representation. Authorized batch group photos to be supplied by institute.'
    }
  ];

  const categories = ['All', 'Classroom', 'Resources', 'Study Culture'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="environment" className="py-16 lg:py-24 bg-ivory-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
            <Building className="w-3.5 h-3.5 mr-1" />
            Learning Environment
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Classroom Infrastructure &amp; Study Culture
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Take a look at the pedagogical spaces and study environment at First Floor, Kanishk Plaza, Vishal Nagar, Jule Solapur.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-navy-950/80 text-white px-2 py-0.5 rounded backdrop-blur-sm">
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

              <div className="px-6 pb-5 pt-2">
                <div className="text-[11px] text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-start">
                  <Info className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0 mt-0.5" />
                  <span>{item.placeholderNotice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Visit Prompt */}
        <div className="mt-12 text-center text-xs text-slate-600">
          <p>
            Parents and prospective students are welcome to visit our physical facility at Kanishk Plaza in Vishal Nagar to inspect classroom setups and interact with Prof. Bhandare Sir.
          </p>
        </div>

      </div>
    </section>
  );
};
