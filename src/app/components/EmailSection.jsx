"use client";

import { useState } from 'react';

const initialForm = { name: '', email: '', message: '' };

export default function EmailSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const isSending = status === 'sending';

  const validateForm = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Escribe tu nombre.';
    if (!form.email.trim()) {
      nextErrors.email = 'Escribe tu correo.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Introduce un correo válido.';
    }
    if (!form.message.trim()) nextErrors.message = 'Cuéntame brevemente tu proyecto.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Unable to send');
      setForm(initialForm);
      setErrors({});
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => {
      if (!current[field]) return current;

      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  return (
    <div className="mx-auto grid w-full gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
      <div>
        <div className="section-heading">
          <p className="editorial-label mb-5 text-[var(--accent)]">05 / Contacto</p>
          <h2 id="contact-title" className="max-w-lg text-5xl font-medium tracking-[-0.06em] text-[var(--ink)] sm:text-7xl">Ponte en contacto conmigo</h2>
        </div>
        <p className="max-w-sm text-lg leading-relaxed text-[var(--muted)]">Puedes escribirme directamente mediante el formulario.</p>
        <div className="mt-10 max-w-sm text-[var(--muted)]">
          <p className="text-lg leading-relaxed">¿Buscas disponibilidad en concreto para hablar conmigo?</p>
          <p className="mt-3 text-base leading-relaxed">Propón dos franjas horarias y te contesto directamente con un enlace de calendario con nuestra reunión programada.</p>
        </div>
      </div>

      <form
        aria-labelledby="contact-title"
        aria-busy={isSending}
        noValidate
        onSubmit={handleSubmit}
        className="section-card rounded-sm p-6 sm:p-8 lg:p-10"
      >
        <div className="border-b border-[var(--line)] pb-6">
          <p className="editorial-label text-[var(--accent)]">Formulario de contacto</p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">Cuéntame qué necesitas resolver</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">Los campos marcados con * son obligatorios. Te responderé lo antes posible.</p>
        </div>

        <div className="space-y-6 pt-7">
          <div>
            <label htmlFor="contact-name" className="editorial-label mb-2 block text-[var(--ink)]">
              Tu nombre <span className="text-[var(--accent)]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={updateField('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              className={`w-full rounded-sm border bg-[var(--surface)] px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--quiet)] transition-colors focus:border-[var(--accent)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${errors.name ? 'border-red-300' : 'border-[var(--line)]'}`}
              placeholder="Tu nombre"
              disabled={isSending}
            />
            {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-red-200" role="alert">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-email" className="editorial-label mb-2 block text-[var(--ink)]">
              Tu correo <span className="text-[var(--accent)]" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={updateField('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={`w-full rounded-sm border bg-[var(--surface)] px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--quiet)] transition-colors focus:border-[var(--accent)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${errors.email ? 'border-red-300' : 'border-[var(--line)]'}`}
              placeholder="nombre@empresa.com"
              disabled={isSending}
            />
            {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-red-200" role="alert">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="contact-message" className="editorial-label mb-2 block text-[var(--ink)]">
              El proyecto <span className="text-[var(--accent)]" aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              required
              value={form.message}
              onChange={updateField('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`w-full resize-y rounded-sm border bg-[var(--surface)] px-4 py-3 text-base leading-relaxed text-[var(--ink)] placeholder:text-[var(--quiet)] transition-colors focus:border-[var(--accent)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${errors.message ? 'border-red-300' : 'border-[var(--line)]'}`}
              placeholder="Cuéntame qué estás intentando resolver."
              disabled={isSending}
            />
            {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-red-200" role="alert">{errors.message}</p>}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSending}
            aria-busy={isSending}
            className="inline-flex w-full items-center justify-center gap-3 rounded-sm border border-[var(--accent)] bg-[var(--accent)] px-6 py-3.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--paper)] transition-colors hover:bg-transparent hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
          >
            {isSending && <span className="h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />}
            {isSending ? 'Enviando...' : 'Enviar mensaje ↗'}
          </button>
          <div aria-live="polite" role={status === 'error' ? 'alert' : 'status'} className={`min-h-5 text-sm ${status === 'sent' ? 'text-[var(--accent)]' : status === 'error' ? 'text-red-200' : 'text-[var(--muted)]'}`}>
            {status === 'sent' && 'Mensaje enviado. Gracias.'}
            {status === 'error' && 'No se pudo enviar el mensaje. Inténtalo de nuevo.'}
          </div>
        </div>
      </form>
    </div>
  );
}
