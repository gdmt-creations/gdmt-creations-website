'use client';

import { contactServices } from '@/data/contactData';
import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    services: [] as string[],
  });

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Add actual form submission logic here
  };

  return (
    <section className='px-6 py-20 text-gray-900 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-4 text-[var(--color-primary)]'>
          Contact Us
        </h1>
        <p className='text-center mb-10 text-gray-600 max-w-2xl mx-auto'>
          We’d love to hear from you! Whether you have a question, need a quote,
          or want to collaborate — just fill out the form and our team will get
          back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className='space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg'
        >
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-1'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Your full name'
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='you@example.com'
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='phone' className='block text-sm font-medium mb-1'>
              Phone Number
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Optional'
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='query' className='block text-sm font-medium mb-1'>
              Message / Query
            </label>
            <textarea
              name='query'
              id='query'
              rows={4}
              placeholder='How can we help you?'
              className='w-full p-3 border border-gray-300 rounded-md focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]'
              onChange={handleChange}
            />
          </div>

          <div>
            <p className='font-semibold mb-3 text-[var(--color-primary)]'>
              Services You’re Interested In
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {contactServices.map((service) => (
                <label
                  key={service}
                  className='flex items-center gap-2 text-sm'
                >
                  <input
                    type='checkbox'
                    checked={form.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className='accent-[var(--color-primary)]'
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <button
            type='submit'
            className='bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-red-600 transition'
          >
            Submit
          </button>
        </form>

        <div className='mt-12 text-center text-gray-600 text-sm max-w-xl mx-auto'>
          <p>
            Need more? Our content and strategy team can customize your
            experience. Let us know if you require additional services or
            specific support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
