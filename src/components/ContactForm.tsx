import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/lib/i18n';
import { toast } from 'sonner';
import { MessageCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

/**
 * Contact form powered by Lovable Cloud + Resend
 * Submissions are automatically sent to hello@nustudios.co.uk
 */

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid URL').or(z.literal('')),
  package: z.string().min(1, 'Please select a package'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      website: '',
      package: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const { data: responseData, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) {
        throw error;
      }

      toast.success(t.form.success);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    t.pricing.starter.name,
    t.pricing.scale.name,
    t.pricing.bespokeAI.name,
    t.pricing.bespokeVFX.name,
  ];

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=351939517942', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8 xl:px-[100px]">
        <div className="w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display md:text-4xl mb-4">
              <span className="font-bold">{t.form.title.split(' ')[0]}</span>{' '}
              <span className="italic bg-gradient-to-r from-[#ff9a56] via-[#ff6b9d] to-[#c96dd8] bg-clip-text text-transparent">{t.form.title.split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form Column */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.name}</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.email}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.website}</FormLabel>
                        <FormControl>
                          <Input type="url" {...field} className="border-2 border-border focus:border-primary h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="package"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.package}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-2 border-border focus:border-primary h-12">
                              <SelectValue placeholder={t.form.selectPackage} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {packages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">{t.form.message}</FormLabel>
                        <FormControl>
                          <Textarea rows={5} {...field} className="border-2 border-border focus:border-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                    {isSubmitting ? '...' : t.form.submit}
                  </Button>
                </form>
              </Form>
            </div>

            {/* WhatsApp Column */}
            <div className="flex flex-col justify-center items-center p-6 md:p-12 bg-muted/30 rounded-lg border-2 border-border">
              <div className="mb-4 md:mb-6">
                <MessageCircle 
                  className="h-32 w-32 md:h-48 md:w-48 lg:h-72 lg:w-72" 
                  strokeWidth={1.5}
                  style={{
                    stroke: 'url(#whatsapp-gradient)',
                  }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="whatsapp-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff9a56" />
                      <stop offset="50%" stopColor="#ff6b9d" />
                      <stop offset="100%" stopColor="#c96dd8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-center">
                Prefer WhatsApp?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-8 leading-relaxed">
                Get instant responses and personalized support through WhatsApp. Connect with us directly for a faster conversation.
              </p>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="w-full max-w-xs h-12 text-base"
              >
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
