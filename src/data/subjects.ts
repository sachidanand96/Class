import { Subject } from '../types';

export const SUBJECTS: Subject[] = [
  {
    id: 'accountancy',
    title: 'Bookkeeping & Accountancy',
    shortCode: 'BK & ACC',
    description: 'The mathematical backbone of commerce. We teach the underlying logic of double-entry bookkeeping so debit-credit rules become second nature rather than rote memorization.',
    coreConcepts: [
      'Golden Rules of Accounting & Modern Classification',
      'Journalizing, Ledger Posting & Trial Balance',
      'Bank Reconciliation Statement (BRS) & Depreciation',
      'Partnership Final Accounts & Adjustments',
      'Not-For-Profit Organizations (NPO) Accounting',
      'Company Accounts: Issue & Forfeiture of Shares'
    ],
    careerRelevance: 'Essential bedrock for CA, CS, CMA, Investment Banking, Auditing, and Corporate Finance careers.',
    iconName: 'Calculator'
  },
  {
    id: 'economics',
    title: 'Economics',
    shortCode: 'ECO',
    description: 'Understanding market dynamics, consumer choice, monetary policies, and the macro-economic forces shaping national and global financial systems.',
    coreConcepts: [
      'Micro Economics: Utility Analysis & Demand Elasticity',
      'Theory of Supply & Market Structures',
      'Macro Economics: National Income Measurement & Aggregate Demand',
      'Public Finance in India: Taxation & Government Budgets',
      'Money Market & Capital Market Operations'
    ],
    careerRelevance: 'Vital for financial analysts, economic policy experts, corporate strategists, and banking professionals.',
    iconName: 'TrendingUp'
  },
  {
    id: 'ocm',
    title: 'Organization of Commerce & Management',
    shortCode: 'OCM',
    description: 'The science of running enterprises. Covers modern management principles, organizational hierarchies, consumer protection laws, and entrepreneurship development.',
    coreConcepts: [
      'Principles of Management (Fayol & Taylor Philosophies)',
      'Functions of Management: Planning, Organizing, Directing, Controlling',
      'Entrepreneurship Development & Startup Ecosystems',
      'Business Services: Banking, Insurance, Transport & Warehousing',
      'Consumer Protection Act (2019) & Redressal Forums'
    ],
    careerRelevance: 'Foundation for MBA aspirants, entrepreneurs, operations managers, and business executives.',
    iconName: 'Briefcase'
  },
  {
    id: 'sp',
    title: 'Secretarial Practice',
    shortCode: 'SP',
    description: 'Corporate governance, secretarial procedures, company law compliance, and statutory duties governing public and private companies in India.',
    coreConcepts: [
      'Corporate Finance: Capital Structure, Fixed & Working Capital',
      'Sources of Corporate Capital: Shares, Debentures, Deposits',
      'Issue of Shares: Allotment, Calls, Forfeiture, Transfer',
      'Company Meetings: Notice, Agenda, Quorum, Resolutions',
      'Dividend, Interest & Financial Market Compliance'
    ],
    careerRelevance: 'Direct springboard for Company Secretary (ICSI CS), corporate legal advisor, and board governance roles.',
    iconName: 'FileText'
  }
];
