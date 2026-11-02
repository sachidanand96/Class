export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Location & Batches';
}

export const FAQS: FAQItem[] = [
  {
    category: 'Admissions',
    question: 'How do I enroll in Join Me Commerce Classes for Class 11th or 12th Commerce?',
    answer: 'Admissions are conducted in-person at our Jule Solapur branch (First Floor, Kanishk Plaza, Vishal Nagar). Prospective students and parents can visit the center or call Prof. Pradeep Bhandare Sir at +91 98220 54180 to enquire about current batches and registration.'
  },
  {
    category: 'Academics',
    question: 'Can a student start CA Foundation preparation alongside 11th or 12th Commerce?',
    answer: 'Yes. Beginning foundation preparation during Class 11th or 12th provides strong conceptual support, as core subjects like Bookkeeping & Accountancy and Economics closely align with CA Foundation papers.'
  },
  {
    category: 'Location & Batches',
    question: 'Where is the coaching institute located in Jule Solapur?',
    answer: 'The institute is located at First Floor, Kanishk Plaza, Vishal Nagar, Jule Solapur, Solapur — above Annapurna Sweet Mart. It is easily accessible by two-wheelers and local transit for students across Jule Solapur and nearby areas.'
  },
  {
    category: 'Location & Batches',
    question: 'How can I find out the current batch timings?',
    answer: 'Batch timings are scheduled to accommodate college hours for Junior College (HSC) and Degree College students. Please contact the office directly at +91 98220 54180 or visit our center for current shift schedules and seat availability.'
  },
  {
    category: 'Academics',
    question: 'Which subjects are covered for HSC Commerce students?',
    answer: 'Instruction is provided for the four primary commerce subjects: Bookkeeping & Accountancy, Economics, Organization of Commerce & Management (OCM), and Secretarial Practice (SP).'
  },
  {
    category: 'Admissions',
    question: 'Are regular tests conducted during the academic year?',
    answer: 'Yes, periodic unit tests, practice problem sets, and board-pattern preliminary examinations are conducted to evaluate progress and build examination confidence.'
  }
];
