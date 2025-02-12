export interface Testimonial {
  id: string;
  projectType: string;
  name: string;
  role: string;
  image: string;
  content: string;
}

export interface TestimonialsData {
  testimonials: Testimonial[];
}
