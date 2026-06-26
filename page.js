export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden p-8 sm:p-12 space-y-8">
        
        <header className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Emily Goforth
            </h1>
            <p className="text-lg font-medium text-indigo-600 mt-1">
              Business Analyst
            </p>
          </div>
          <div className="text-sm text-slate-600 space-y-1 md:text-right">
            <p>
              <a href="mailto:jane.doe@example.com" className="hover:text-indigo-600 transition-colors">
                engoforth05@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+15551234567" className="hover:text-indigo-600 transition-colors">
                (555) 123-4567
              </a>
            </p>
            <p>
              <a href="https://linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
                linkedin.com/in/emilygoforth0
              </a>
            </p>
            <p>Tampa, FL</p>
          </div>
        </header>

        <section aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">
            Professional Summary
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Detail-oriented Business Analyst with over 2 years of experience in requirements gathering, data analysis, and process improvement. 
            Skilled in translating business needs into technical specifications and driving data-informed decision-making. 
            Committed to delivering high-quality solutions that align with organizational goals.
          </p>
        </section>

        <section aria-labelledby="experience-heading" className="border-t border-slate-200 pt-6">
          <h2 id="experience-heading" className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Work Experience
          </h2>
          <div className="space-y-6">
            <article>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-lg font-bold text-slate-900">
                  Financial Department Intern<span className="font-normal text-slate-500">at Manatee County</span>
                </h3>
                <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">
                  May 2025 — August 2025
                </span>
              </div>
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-700">
                <li>Designed data-driven budget presentations for county commissioners by transforming financial datasets into clear visuals and charts to support decision-making.</li>
                <li>Analyzed, cleaned, and organized financial data in Excel to support budgeting, forecasting, and departmental reporting.</li>
                <li>Collaborated with finance staff to build and maintain Excel-based budget models and datasets, ensuring data accuracy and usability for analysis.</li>
              </ul>
            </article>

            <article>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-lg font-bold text-slate-900">
                  Specialty Department Team Member <span className="font-normal text-slate-500">at Whole Foods</span>
                </h3>
                <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">
                  Dec 2024 — May 2025
                </span>
              </div>
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-700">
                <li>Prepared, wrapped, and labeled specialty cheese products with a high level of accuracy while maintaining compliance with food safety and quality standards.</li>
                <li>Managed inventory backstock and daily closing procedures, maintaining accurate product availability and supporting efficient department operations.</li>
                <li>Delivered proactive customer service by engaging with shoppers, answering product questions, and providing recommendations to enhance the customer experience.</li>
              </ul>
            </article>
          </div>
        </section>

        <section aria-labelledby="education-heading" className="border-t border-slate-200 pt-6">
          <h2 id="education-heading" className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Bachelor of Science in Business Analytics and Information Systems
                </h3>
                <p className="text-sm text-slate-600">University of South Florida</p>
              </div>
              <span className="text-sm font-medium text-slate-500 mt-1 sm:mt-0">
                Graduate Dec 2026
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="border-t border-slate-200 pt-6">
          <h2 id="skills-heading" className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git & GitHub', 'Node.js', 'REST APIs', 'Semantic HTML & WCAG Accessibility'].map((skill) => (
              <span 
                key={skill} 
                className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-100 pt-6 text-center">
          <p className="text-xs text-slate-400">
            Built with Next.js and Tailwind CSS. Open-source on GitHub.
          </p>
        </footer>

      </div>
    </main>
  );
}
