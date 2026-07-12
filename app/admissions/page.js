import AdmissionForm from "@/components/AdmissionForm";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import { school } from "@/lib/schoolData";

export const metadata = {
  title: "Admissions",
  description: "Start an admission enquiry for Treasureland Academy in Kasoa-Brigade for Nursery, Kindergarten, Primary or Junior High School.",
  openGraph: {
    title: "Admissions | Treasureland Academy",
    description: "Admission steps, requirements, school visits and enquiry form for Treasureland Academy."
  }
};

const steps = [
  "Submit an enquiry.",
  "Speak with the admissions team.",
  "Visit the school.",
  "Complete the application form.",
  "Submit the required documents.",
  "Receive admission confirmation."
];

const requirements = ["Child's birth certificate", "Previous school report where applicable", "Parent or guardian contact details", "Passport photograph", "Health or special support information where relevant"];

export default function AdmissionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Admissions"
        title="Begin your Treasureland Academy admission enquiry"
        text="We welcome families seeking a safe, inclusive and academically focused school community for their children."
      />
      <section className="section-pad bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading align="left" eyebrow="How to Apply" title="Simple admission steps" />
            <ol className="grid gap-3">
              {steps.map((step, index) => (
                <li key={step} className="card flex gap-4 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-purple-brand font-black text-yellow-brand">{index + 1}</span>
                  <span className="pt-1 font-semibold text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 card p-6">
              <h2 className="text-xl font-black text-purple-brand">Classes Available</h2>
              <p className="mt-3 leading-8 text-slate-600">Nursery, Kindergarten, Primary and Junior High School.</p>
            </div>
            <div className="mt-6 card p-6">
              <h2 className="text-xl font-black text-purple-brand">Requirements Checklist</h2>
              <ul className="mt-3 grid gap-2 text-slate-600">
                {requirements.map((item) => <li key={item}>- {item}</li>)}
              </ul>
            </div>
            <div className="mt-6 card p-6">
              <h2 className="text-xl font-black text-purple-brand">School Visit</h2>
              <p className="mt-3 leading-8 text-slate-600">Families are encouraged to visit the school, meet the admissions team and learn more about classroom life.</p>
              <a href={school.phoneHref} className="mt-3 inline-flex font-black text-purple-brand hover:text-gold-brand">{school.phone}</a>
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Enquiry Form" title="Start admission enquiry" />
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
