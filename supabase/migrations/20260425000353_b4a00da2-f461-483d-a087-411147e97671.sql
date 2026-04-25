-- Briefing subscribers table
CREATE TABLE public.briefing_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL,
  interest_area TEXT NOT NULL,
  source_page TEXT NOT NULL DEFAULT 'briefing',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.briefing_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit briefing signup"
ON public.briefing_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_briefing_subscribers_email ON public.briefing_subscribers(email);
CREATE INDEX idx_briefing_subscribers_created_at ON public.briefing_subscribers(created_at DESC);

-- Contact inquiries table
CREATE TABLE public.contact_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  source_page TEXT NOT NULL DEFAULT 'contact',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiry"
ON public.contact_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX idx_contact_inquiries_email ON public.contact_inquiries(email);
CREATE INDEX idx_contact_inquiries_created_at ON public.contact_inquiries(created_at DESC);