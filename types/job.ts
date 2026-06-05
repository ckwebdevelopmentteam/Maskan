export interface Job {
  id: string | number;
  _id?: string;
  slug?: string;
  title: string;
  category: string;
  location: string;
  employmentType?: string;
  experience?: string;
  salary?: string;
  shortDescription?: string;
  description: string;
  requirements?: string[];
}
