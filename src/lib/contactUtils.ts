import { CONTACT_SUBMISSIONS_KEY } from "./siteConfig";

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  reason: string;
  message: string;
  timestamp: string;
}

export const createContactSubmission = (payload: Omit<ContactSubmission, "id" | "timestamp">): ContactSubmission => ({
  id: `submission_${Date.now()}`,
  timestamp: new Date().toISOString(),
  ...payload,
});

export const saveContactSubmission = (submission: ContactSubmission) => {
  const existing = localStorage.getItem(CONTACT_SUBMISSIONS_KEY);
  let submissions: ContactSubmission[] = [];

  if (existing) {
    try {
      submissions = JSON.parse(existing) as ContactSubmission[];
    } catch (error) {
      console.error("Failed to parse saved contact submissions", error);
    }
  }

  submissions.unshift(submission);
  localStorage.setItem(CONTACT_SUBMISSIONS_KEY, JSON.stringify(submissions));
};
