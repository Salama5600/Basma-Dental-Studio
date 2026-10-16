import React, { useState } from 'react';
import { Check, MessageCircle, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { useSmile } from '../context/SmileContext';
import { SHADES } from '../types';
import { useToast } from './Toast';
import { Reveal } from './Reveal';

const SERVICES = [
  'Teeth whitening',
  'Cosmetic dentistry',
  'Orthodontics',
  'Everyday dental care',
  'I’m not sure yet',
];

export function Booking() {
  const { shade } = useSmile();
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');
  const [serviceOpen, setServiceOpen] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    service?: string;
  }>({});

  const currentShadeObj = SHADES.find((s) => s.code === shade);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; service?: string } = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your name.';
    }

    const cleanedDigits = phone.replace(/\D/g, '');
    const phoneRegex = /^\+?[\d\s()-]{8,20}$/;
    if (!phone.trim() || !phoneRegex.test(phone.trim()) || cleanedDigits.length < 8) {
      newErrors.phone = 'Please enter a valid mobile number.';
    }

    if (!service) {
      newErrors.service = 'Please choose a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.success('Your smile journey is ready to begin.', {
        description: 'Demo complete — your details were validated, but no request was sent or saved.',
      });
      setName('');
      setPhone('');
      setService('');
      setNotes('');
      setErrors({});
    }
  };

  const handleWhatsApp = () => {
    toast.info('A little portfolio reminder', {
      description: 'This is a fictional clinic. WhatsApp messaging isn’t connected.',
    });
  };

  return (
    <section id="booking" className="booking section">
      <div className="container booking-layout">
        <Reveal className="booking-copy">
          <div className="eyebrow">YOUR NEXT CHAPTER</div>
          <h2>
            Let’s start
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            No big decisions. Just a little time to talk about your smile and what you have in mind.
          </p>

          <div className="booking-benefits">
            <span>
              <Check className="w-3.5 h-3.5" />
              Your first consultation is free
            </span>
            <span>
              <Check className="w-3.5 h-3.5" />
              A clear plan, with no pressure
            </span>
            <span>
              <Check className="w-3.5 h-3.5" />
              Your shade comes with you
            </span>
          </div>

          <div className="whatsapp-block">
            <span>More comfortable with a message?</span>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full border border-primary/25 bg-transparent text-primary hover:bg-secondary shadow-none min-h-12 px-6 py-3 text-sm"
            >
              <MessageCircle />
              Let’s chat on WhatsApp <ArrowUpRight />
            </button>
          </div>
        </Reveal>

        <Reveal className="booking-form-wrap">
          <div className="booking-form-heading">
            <h3>A little about you</h3>
            <span>FREE CONSULTATION</span>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="space-y-2">
                <label
                  className={`text-sm font-medium leading-none ${
                    errors.name ? 'text-destructive' : ''
                  }`}
                  htmlFor="booking-name"
                >
                  Your name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  autoComplete="name"
                  placeholder="What should we call you?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                {errors.name && (
                  <p className="text-[0.8rem] font-medium text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  className={`text-sm font-medium leading-none ${
                    errors.phone ? 'text-destructive' : ''
                  }`}
                  htmlFor="booking-phone"
                >
                  Mobile number
                </label>
                <input
                  id="booking-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your mobile number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                {errors.phone && (
                  <p className="text-[0.8rem] font-medium text-destructive">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-2 mt-4 relative">
              <label
                className={`text-sm font-medium leading-none ${
                  errors.service ? 'text-destructive' : ''
                }`}
                id="service-label"
              >
                What brings you here?
              </label>

              <button
                type="button"
                role="combobox"
                aria-expanded={serviceOpen}
                aria-labelledby="service-label"
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className={service ? 'text-foreground' : 'text-muted-foreground'}>
                  {service || 'Choose a service'}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50 transition-transform duration-200" />
              </button>

              {serviceOpen && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border border-border bg-background p-1 shadow-lg animate-in fade-in-50 duration-150">
                  {SERVICES.map((srv) => (
                    <div
                      key={srv}
                      className={`relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none hover:bg-sand transition-colors ${
                        service === srv ? 'font-semibold text-primary' : 'text-foreground'
                      }`}
                      onClick={() => {
                        setService(srv);
                        setServiceOpen(false);
                        if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                      }}
                    >
                      {srv}
                    </div>
                  ))}
                </div>
              )}

              {errors.service && (
                <p className="text-[0.8rem] font-medium text-destructive">{errors.service}</p>
              )}
            </div>

            <div className="form-shade mt-4">
              <span className={`mini-tooth shade-${shade.replace('.', '-')}`}>
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <span>YOUR CHOSEN SHADE</span>
                <strong>
                  {shade}{' '}
                  <span>· {currentShadeObj?.name}</span>
                </strong>
              </div>
              <a href="#smile-lab">Change ↗</a>
            </div>

            <div className="space-y-2 mt-4">
              <label className="text-sm font-medium leading-none" htmlFor="booking-notes">
                Anything you’d like us to know? <span className="optional">(optional)</span>
              </label>
              <textarea
                id="booking-notes"
                placeholder="Questions, worries, or a little about your smile…"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-none min-h-12 px-6 py-3 text-sm submit-button w-full mt-6"
            >
              Send my consultation request <ArrowUpRight />
            </button>

            <p className="form-demo mt-4">
              Portfolio demo only. Your details aren’t sent or stored.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
