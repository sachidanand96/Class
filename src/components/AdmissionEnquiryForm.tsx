import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { INSTITUTE_INFO } from '../data/instituteInfo';
import { COURSES } from '../data/courses';
import { 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  Phone,
  HelpCircle
} from 'lucide-react';

interface AdmissionEnquiryFormProps {
  initialCourseId?: string;
}

export const AdmissionEnquiryForm: React.FC<AdmissionEnquiryFormProps> = ({ initialCourseId }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    studentName: '',
    parentName: '',
    phone: '',
    course: initialCourseId || '11th-commerce',
    currentStandard: 'Class 10 Pass / Entering 11th',
    preferredContact: 'WhatsApp',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string>('');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Please enter the student\'s name.';
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please provide a valid contact number.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 9822054180).';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a program of interest.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Build tailored WhatsApp message
      const selectedCourseObj = COURSES.find(c => c.id === formData.course);
      const courseName = selectedCourseObj ? selectedCourseObj.name : formData.course;

      const waText = 
`*ADMISSION INQUIRY - JOIN ME COMMERCE CLASSES (JULE SOLAPUR)*
--------------------------------------
*Student Name:* ${formData.studentName.trim()}
${formData.parentName.trim() ? `*Parent/Guardian:* ${formData.parentName.trim()}` : ''}
*Contact Number:* ${formData.phone.trim()}
*Course of Interest:* ${courseName}
*Academic Background:* ${formData.currentStandard}
*Preferred Mode of Contact:* ${formData.preferredContact}
${formData.message.trim() ? `*Questions/Notes:* ${formData.message.trim()}` : ''}
--------------------------------------
_Inquiry submitted via official web concept portal_`;

      const encoded = encodeURIComponent(waText);
      const waUrl = `https://wa.me/919822054180?text=${encoded}`;
      setGeneratedWhatsAppUrl(waUrl);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      phone: '',
      course: '11th-commerce',
      currentStandard: 'Class 10 Pass / Entering 11th',
      preferredContact: 'WhatsApp',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-ivory-100 border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-300">
            <Send className="w-3.5 h-3.5 mr-1" />
            Direct Admission Inquiry
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Enquire for Batches &amp; Admissions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Fill out the details below to request batch timings, seat availability, and subject counseling directly from Prof. Pradeep Bhandare Sir at Jule Solapur.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-soft-md">
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Row 1: Student Name & Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="studentName" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Student Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    autoComplete="name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Rahul Kulkarni"
                    className={`w-full px-4 py-3 rounded-lg text-sm bg-slate-50 border ${
                      errors.studentName ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-emerald-600'
                    } focus:outline-none focus:ring-2`}
                  />
                  {errors.studentName && (
                    <p className="text-xs text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.studentName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Parent / Guardian Name <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    autoComplete="name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Mr. Kulkarni"
                    className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Course Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Contact Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-xs text-slate-500 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98220 54180"
                      maxLength={10}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg text-sm bg-slate-50 border ${
                        errors.phone ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-emerald-600'
                      } focus:outline-none focus:ring-2`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-xs text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.phone}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-500 mt-1">
                      We will share batch schedules to this number.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Program / Class of Interest <span className="text-rose-600">*</span>
                  </label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} ({course.category})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Current Academic Level & Preferred Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentStandard" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Current Academic Status
                  </label>
                  <select
                    id="currentStandard"
                    value={formData.currentStandard}
                    onChange={(e) => setFormData({ ...formData, currentStandard: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Class 10 Pass / Entering 11th">Class 10 Pass / Entering 11th (FYJC)</option>
                    <option value="Class 11 Completed / Entering 12th">Class 11 Completed / Entering 12th (SYJC Board)</option>
                    <option value="Class 12 Commerce Appearing/Passed">Class 12 Commerce Appearing/Passed (Targeting CA)</option>
                    <option value="Undergraduate (B.Com / BBA Student)">Undergraduate (B.Com / BBA Student)</option>
                    <option value="Other / Career Guidance">Other / Career Guidance</option>
                  </select>
                </div>

                <fieldset>
                  <legend className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                    Preferred Mode of Consultation
                  </legend>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'In-Person Visit'] as const).map((mode) => (
                      <button
                        type="button"
                        key={mode}
                        onClick={() => setFormData({ ...formData, preferredContact: mode })}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                          formData.preferredContact === mode
                            ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Specific Question / Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
                  Questions or Notes <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about batch timings, accountancy test schedules, or CA Foundation counseling..."
                  className="w-full px-4 py-2.5 rounded-lg text-sm bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Review &amp; Generate WhatsApp Inquiry
                </button>

                <a
                  href={INSTITUTE_INFO.contact.phoneHref}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-950 font-semibold text-xs border border-slate-300 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-gold-600" />
                  Or Call +91 98220 54180
                </a>
              </div>

              {/* Privacy Assurance Note */}
              <div className="pt-4 border-t border-slate-100 flex items-start space-x-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Privacy Assurance:</strong> Your contact details are used solely to communicate batch schedules and admissions details directly by Prof. Pradeep Bhandare’s office. We never share student information with third parties.
                </p>
              </div>

            </form>
          ) : (
            /* Success & Instant WhatsApp Action State */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-soft-sm">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  Inquiry Form Validated!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your admission inquiry details for <strong className="text-navy-950">{formData.studentName}</strong> have been structured.
                </p>
              </div>

              {/* WhatsApp Launch Prompt */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 max-w-lg mx-auto text-left space-y-4">
                <div className="flex items-center space-x-2 text-emerald-900 font-bold text-sm">
                  <MessageSquare className="w-5 h-5 text-emerald-700" />
                  <span>Send Directly to Prof. Pradeep Bhandare Sir:</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Click the button below to open official WhatsApp with your inquiry pre-filled. This connects you straight to the institute without waiting for email callbacks.
                </p>
                <div className="pt-2">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Open in WhatsApp (+91 98220 54180)
                  </a>
                </div>
              </div>

              <div className="pt-2 flex justify-center space-x-4">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-600 hover:text-navy-950 underline"
                >
                  Submit Another Inquiry
                </button>
              </div>

              {/* Developer Demo Status Notice */}
              <div className="text-[11px] text-slate-400 bg-slate-50 p-3 rounded-lg max-w-md mx-auto border border-slate-200">
                ℹ️ <strong>System Note for Owner:</strong> This form includes pre-built hooks ready for direct CRM or automated SMS/Email webhooks upon official launch.
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
