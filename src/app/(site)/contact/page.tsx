'use client';

import { contactServices } from '@/data/contactData';
import toast from 'react-hot-toast';
import { useState } from 'react';

type FormErrors = {
  name?: string;
  email?: string;
  query?: string;
};

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
    services: [] as string[],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim() || form.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email.';
    }

    if (!form.query || form.query.length < 10) {
      newErrors.query = 'Message should be at least 10 characters.';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success('Thank you! Your message has been sent.');
        setForm({
          name: '',
          email: '',
          phone: '',
          query: '',
          services: [],
        });
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='px-4 sm:px-6 py-14 sm:py-20 text-gray-900 bg-white'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4 text-[var(--color-primary)]'>
          Contact Us
        </h1>
        <p className='text-center mb-8 sm:mb-10 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
          We’d love to hear from you! Whether you have a question, need a quote,
          or want to collaborate — just fill out the form and our team will get
          back to you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className='space-y-5 sm:space-y-6 bg-gray-50 p-5 sm:p-8 rounded-2xl shadow-lg'
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
              value={form.name}
              placeholder='Your full name'
              className='w-full p-3 sm:p-3 border border-gray-300 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-base'
              onChange={handleChange}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>{errors.name}</p>
            )}
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
              value={form.email}
              placeholder='you@example.com'
              className='w-full p-3 sm:p-3 border border-gray-300 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-base'
              onChange={handleChange}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor='phone' className='block text-sm font-medium mb-1'>
              Phone Number
            </label>
            <input
              type='tel'
              name='phone'
              id='phone'
              value={form.phone}
              placeholder='Optional'
              className='w-full p-3 sm:p-3 border border-gray-300 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-base'
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
              value={form.query}
              placeholder='How can we help you?'
              className='w-full p-3 sm:p-3 border border-gray-300 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] text-base'
              onChange={handleChange}
            />
            {errors.query && (
              <p className='text-red-500 text-sm'>{errors.query}</p>
            )}
          </div>

          <div>
            <p className='font-semibold mb-3 text-[var(--color-primary)] text-sm sm:text-base'>
              Services You&apos;re Interested In
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {contactServices.map((service) => (
                <label
                  key={service}
                  className='flex items-center gap-2.5 text-sm p-2 rounded-lg active:bg-gray-100 transition'
                >
                  <input
                    type='checkbox'
                    checked={form.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className='accent-[var(--color-primary)] w-4 h-4'
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full bg-[var(--color-primary)] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[var(--color-primary-hover)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base'
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

        <div className='mt-8 sm:mt-12 text-center text-gray-600 text-xs sm:text-sm max-w-xl mx-auto'>
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
