-- Create separate tables for homepage vs contact page submissions

CREATE TABLE IF NOT EXISTS public.contact_submissions_home (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  reason TEXT NOT NULL,
  message TEXT NULL
);

ALTER TABLE public.contact_submissions_home ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_submissions_home'
      AND policyname = 'Anyone can submit homepage contact form'
  ) THEN
    CREATE POLICY "Anyone can submit homepage contact form"
    ON public.contact_submissions_home
    FOR INSERT
    WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_submissions_home'
      AND policyname = 'No direct select access'
  ) THEN
    CREATE POLICY "No direct select access"
    ON public.contact_submissions_home
    FOR SELECT
    USING (false);
  END IF;
END $$;


CREATE TABLE IF NOT EXISTS public.contact_submissions_page (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  reason TEXT NOT NULL,
  message TEXT NULL
);

ALTER TABLE public.contact_submissions_page ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_submissions_page'
      AND policyname = 'Anyone can submit contact page form'
  ) THEN
    CREATE POLICY "Anyone can submit contact page form"
    ON public.contact_submissions_page
    FOR INSERT
    WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_submissions_page'
      AND policyname = 'No direct select access'
  ) THEN
    CREATE POLICY "No direct select access"
    ON public.contact_submissions_page
    FOR SELECT
    USING (false);
  END IF;
END $$;