-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    reason TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins can view (you'll need to be authenticated to see submissions)
-- For now, we'll create a policy that denies direct select access
-- You can view via Cloud dashboard
CREATE POLICY "No direct select access"
ON public.contact_submissions
FOR SELECT
USING (false);