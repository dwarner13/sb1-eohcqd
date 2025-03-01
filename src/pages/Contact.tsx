import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const PhoneNumber = () => (
  <a href="tel:825-888-3333" className="text-blue-600 hover:text-blue-500">
    (825) 888-3333
  </a>
);

const contactMethods = [
  {
    title: 'Phone Support',
    description: 'Immediate assistance for urgent repairs',
    contact: '(825) 888-3333',
    availability: '24/7 for emergencies',
    link: 'tel:825-888-3333',
    primary: true
  },
  {
    title: 'Email',
    description: 'For non-urgent inquiries and quotes',
    contact: 'ezappliance03@gmail.com',
    availability: 'Response within 24 hours',
    link: 'mailto:ezappliance03@gmail.com',
    primary: false
  }
];

const serviceAreas = [
  'Downtown Edmonton',
  'West Edmonton',
  'South Edmonton',
  'North Edmonton',
  'Sherwood Park',
  'St. Albert'
];

const commonQuestions = [
  {
    question: 'How quickly can you respond?',
    answer: 'We offer same-day service for most repairs, with emergency service available 24/7.'
  },
  {
    question: 'Do you provide free estimates?',
    answer: 'Yes, we provide free estimates before starting any repair work.'
  },
  {
    question: 'What brands do you service?',
    answer: 'We repair all major appliance brands including Samsung, LG, Whirlpool, GE, and more.'
  },
  {
    question: 'Are your technicians licensed?',
    answer: 'Yes, all our technicians are fully licensed, insured, and factory-trained.'
  }
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Edmonton Appliance Repair | Book Service"
        description="Book your appliance repair service in Edmonton. Same-day appointments available. Licensed technicians for all major appliance brands. Emergency repairs available."
        keywords="book appliance repair Edmonton, schedule appliance repair Edmonton, appliance repair quote Edmonton, emergency appliance repair Edmonton"
        canonical="/contact"
      />
      <main className="bg-white">
        {/* Header Section */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Schedule your <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">appliance repair</Link> service or request a quote. Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">expert technicians</Link> are ready to help.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-24">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className={`bg-white p-8 rounded-xl ${
                  method.primary ? 'border-2 border-blue-600' : 'border border-gray-200'
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h2>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.link}
                  className="text-xl font-semibold text-blue-600 hover:text-blue-500 block mb-2"
                >
                  {method.contact}
                </a>
                <p className="text-sm text-gray-500">{method.availability}</p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="mx-auto max-w-2xl mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Schedule Your Service
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below for a service request or quote
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-xl">
              <ContactForm />
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  to="/areas"
                  className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-900">{area}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Common Questions */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {commonQuestions.map((item) => (
                <div key={item.question} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Business Hours</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-gray-600">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">Emergency service</Link> available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="mt-24 bg-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Need Emergency Repairs?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">expert technicians</Link> are available 24/7 for urgent repairs.
              Call us now at <PhoneNumber /> for immediate assistance.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}