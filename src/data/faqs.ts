export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Location & Batches';
}

export const FAQS: FAQItem[] = [
  {
    category: 'Admissions',
    question: 'How do I enroll in Join Me Commerce Classes for Class 11th or 12th Commerce?',
    answer: 'Admissions are conducted in-person at our Jule Solapur branch (First Floor, Kanishk Plaza, Vishal Nagar). Prospective students and parents can visit during office hours or contact Prof. Pradeep Bhandare Sir at +91 98220 54180 / WhatsApp to schedule an academic counseling session.'
  },
  {
    category: 'Academics',
    question: 'Can a student start CA Foundation preparation alongside 11th or 12th Commerce?',
    answer: 'Yes. In fact, starting early during Class 11th or 12th creates a formidable conceptual advantage because Bookkeeping & Accountancy and Economics in the HSC curriculum directly overlap with CA Foundation Paper 1 and Paper 4. Our coaching helps students align both tracks systematically.'
  },
  {
    category: 'Location & Batches',
    question: 'Where is the coaching institute located in Jule Solapur?',
    answer: 'We are conveniently located at First Floor, Kanishk Plaza, Vishal Nagar, Jule Solapur, Solapur — right above the prominent Annapurna Sweet Mart landmark. It is easily accessible by city transit, two-wheelers, and walking distance for students residing in Jule Solapur, Dnyaneshwar Nagar, and surrounding localities.'
  },
  {
    category: 'Location & Batches',
    question: 'What batch timings are offered for college students?',
    answer: 'To accommodate Junior College (HSC) and Degree College (B.Com/BBA) schedules across Solapur, morning and evening batches are scheduled so students never have timetable conflicts. Please contact the branch office for exact shift timings.'
  },
  {
    category: 'Academics',
    question: 'Which subjects are covered for HSC Commerce students?',
    answer: 'We provide specialized instruction across all four primary commerce subjects: Bookkeeping & Accountancy, Economics, Organization of Commerce & Management (OCM), and Secretarial Practice (SP).'
  },
  {
    category: 'Admissions',
    question: 'Are study notes and chapter-wise tests provided?',
    answer: 'Yes, comprehensive practice problem sets, board question bank discussions, and periodic unit tests are conducted to evaluate conceptual retention and exam writing presentation.'
  }
];
