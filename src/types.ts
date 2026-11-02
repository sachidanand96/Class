export interface Course {
  id: string;
  name: string;
  code: string;
  category: 'Higher Secondary' | 'Undergraduate' | 'Professional Foundation';
  targetAudience: string;
  headline: string;
  description: string;
  subjects: string[];
  features: string[];
  batchInfo: string;
  whatsappMessage: string;
}

export interface Subject {
  id: string;
  title: string;
  shortCode: string;
  description: string;
  coreConcepts: string[];
  careerRelevance: string;
  iconName: string;
}

export interface CARoadmapStep {
  paperNumber: string;
  title: string;
  weightage: string;
  scope: string;
  preparationAdvice: string;
}

export interface AssetManifestEntry {
  filename: string;
  intendedSection: string;
  sourceUrl: string;
  license: string;
  productionReady: boolean;
  notes: string;
}

export interface InquiryFormData {
  studentName: string;
  parentName: string;
  phone: string;
  course: string;
  currentStandard: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'In-Person Visit';
  message: string;
}
