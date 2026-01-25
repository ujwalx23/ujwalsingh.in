-- Tighten public INSERT policies to avoid always-true checks (basic non-empty validation)

-- contact_submissions (existing)
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact form " ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (
  length(trim(name)) > 0
  AND length(trim(email)) > 0
  AND length(trim(reason)) > 0
);

-- contact_submissions_home
DROP POLICY IF EXISTS "Anyone can submit homepage contact form" ON public.contact_submissions_home;
CREATE POLICY "Anyone can submit homepage contact form"
ON public.contact_submissions_home
FOR INSERT
WITH CHECK (
  length(trim(name)) > 0
  AND length(trim(email)) > 0
  AND length(trim(reason)) > 0
);

-- contact_submissions_page
DROP POLICY IF EXISTS "Anyone can submit contact page form" ON public.contact_submissions_page;
CREATE POLICY "Anyone can submit contact page form"
ON public.contact_submissions_page
FOR INSERT
WITH CHECK (
  length(trim(name)) > 0
  AND length(trim(email)) > 0
  AND length(trim(reason)) > 0
);