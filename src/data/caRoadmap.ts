import { CARoadmapStep } from '../types';

export const CA_FOUNDATION_PAPERS: CARoadmapStep[] = [
  {
    paperNumber: 'Paper 1',
    title: 'Accounting',
    weightage: '100 Marks (Descriptive / Subjective)',
    scope: 'Covers theoretical framework, accounting processes, bank reconciliation statements, inventory valuation, depreciation, special transactions, final accounts, and company accounts.',
    preparationAdvice: 'Builds directly on 11th and 12th Bookkeeping. Rigorous step-by-step working notes and adherence to ICAI accounting presentation standards are paramount.'
  },
  {
    paperNumber: 'Paper 2',
    title: 'Business Laws',
    weightage: '100 Marks (Descriptive / Subjective)',
    scope: 'Indian Regulatory Framework, The Indian Contract Act 1872, The Sale of Goods Act 1930, The Indian Partnership Act 1932, The Limited Liability Partnership Act 2008, and The Companies Act 2013.',
    preparationAdvice: 'Requires mastering legal terminology, case law referencing, and structured legal reasoning rather than plain summary writing.'
  },
  {
    paperNumber: 'Paper 3',
    title: 'Quantitative Aptitude',
    weightage: '100 Marks (Objective / MCQ with Negative Marking)',
    scope: 'Business Mathematics (Ratio, Indices, Logarithms, Time Value of Money), Logical Reasoning (Number Series, Seating Arrangements), and Statistics (Measures of Central Tendency, Probability, Index Numbers).',
    preparationAdvice: 'Time management and shortcut calculation methods are critical. High focus on Time Value of Money which carries significant weight.'
  },
  {
    paperNumber: 'Paper 4',
    title: 'Business Economics',
    weightage: '100 Marks (Objective / MCQ with Negative Marking)',
    scope: 'Introduction to Business Economics, Theory of Demand and Supply, Theory of Production and Cost, Price Determination in Different Markets, National Income, Public Finance, and International Trade.',
    preparationAdvice: 'Deep conceptual grasp of economic curves, elasticity calculations, and Indian macroeconomic policy updates.'
  }
];

export const CA_ROADMAP_MILESTONES = [
  {
    phase: 'Phase 01',
    title: 'Class 10 Transition & 11th Foundation',
    timeline: 'Class 11 Academic Year',
    summary: 'Master double entry bookkeeping, golden rules of debit/credit, and introductory microeconomics at Join Me Commerce Classes.',
    tag: 'Foundation Stage'
  },
  {
    phase: 'Phase 02',
    title: '12th Board Mastery & ICAI Registration',
    timeline: 'Class 12 Academic Year',
    summary: 'Score high in HSC Board commerce exams while completing provisional registration with the Institute of Chartered Accountants of India (ICAI).',
    tag: 'Board & Registration'
  },
  {
    phase: 'Phase 03',
    title: 'Intensive CA Foundation Training',
    timeline: '4 - 6 Months Intensive Batch',
    summary: 'Specialized coaching covering Business Laws, Quantitative Aptitude, Advanced Accounting, and timed mock tests under Prof. Bhandare\'s mentorship.',
    tag: 'Core Preparation'
  },
  {
    phase: 'Phase 04',
    title: 'ICAI Foundation Examination',
    timeline: 'May/June or Nov/Dec Cycles',
    summary: 'Appear for the national-level examination with proven test temperament, comprehensive revision, and conceptual mastery.',
    tag: 'Exam Milestone'
  }
];
