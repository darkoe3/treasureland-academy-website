import {
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MapPin,
  Palette,
  Phone,
  Recycle,
  School,
  ShieldCheck,
  Sprout,
  Star,
  Target,
  Trees,
  Users,
  Waves
} from "lucide-react";

export const school = {
  name: "Treasureland Academy",
  motto: "Knowledge, Character & Service",
  founded: "2011",
  location: "Kasoa-Brigade, Ga South, Ghana",
  phone: "+233 24 021 9372",
  phoneHref: "tel:+233240219372",
  whatsapp:
    "https://wa.me/233240219372?text=Hello%20Treasureland%20Academy%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20admission.",
  email: "info@treasurelandacademy.com"
};

export const seoKeywords = [
  "Treasureland Academy",
  "school in Kasoa",
  "school in Ga South",
  "Montessori school in Kasoa",
  "private school in Kasoa",
  "Nursery school Kasoa",
  "Kindergarten Kasoa",
  "Primary school Kasoa",
  "Junior High School Kasoa",
  "STEM school Ghana",
  "ICT school Ghana"
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" }
];

export const academicLevels = [
  {
    title: "Nursery",
    icon: Sprout,
    description:
      "A caring and stimulating foundation where young learners develop confidence, communication, coordination and social skills."
  },
  {
    title: "Kindergarten",
    icon: Brain,
    description:
      "Montessori-inspired learning that develops independence, creativity, early literacy, numeracy and curiosity."
  },
  {
    title: "Primary",
    icon: BookOpen,
    description:
      "A strong academic programme that builds literacy, numeracy, critical thinking, STEM knowledge, ICT skills and character."
  },
  {
    title: "Junior High School",
    icon: GraduationCap,
    description:
      "A focused and supportive programme that prepares learners for academic success, responsible citizenship and future opportunities."
  }
];

export const whyChooseUs = [
  ["Montessori-Based Learning", Compass],
  ["Strong Academic Foundation", Award],
  ["STEM and ICT Integration", Cpu],
  ["Safe and Inclusive Environment", ShieldCheck],
  ["Character and Leadership Development", Star],
  ["Sustainability Education", Leaf],
  ["Experienced and Caring Teachers", HandHeart],
  ["Parent and Community Partnership", HeartHandshake]
];

export const stemCards = [
  ["Coding and Digital Skills", Code2],
  ["Practical Science", Lightbulb],
  ["Mathematics and Logical Thinking", Target],
  ["Creativity and Innovation", Palette]
];

export const coreValues = [
  {
    title: "Excellence",
    icon: Award,
    text: "We pursue the highest standards in teaching, learning and personal achievement."
  },
  {
    title: "Integrity",
    icon: ShieldCheck,
    text: "We promote honesty, responsibility, accountability and ethical behaviour."
  },
  {
    title: "Respect",
    icon: Users,
    text: "We value every individual and encourage kindness, empathy and appreciation of diversity."
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    text: "We promote curiosity, creativity, critical thinking and problem-solving through STEM and ICT."
  },
  {
    title: "Independence",
    icon: Compass,
    text: "Guided by the Montessori philosophy, we develop confident, self-directed and lifelong learners."
  },
  {
    title: "Collaboration",
    icon: HeartHandshake,
    text: "We encourage teamwork, effective communication and strong school-community partnerships."
  },
  {
    title: "Discipline",
    icon: CheckCircle2,
    text: "We cultivate self-discipline, punctuality, resilience and responsible decision-making."
  },
  {
    title: "Service",
    icon: HandHeart,
    text: "We inspire learners to contribute positively to their school, community and nation."
  },
  {
    title: "Environmental Stewardship",
    icon: Trees,
    text: "We encourage appreciation for nature and the responsible use of resources."
  },
  {
    title: "Faith and Moral Values",
    icon: Star,
    text: "We promote compassion, honesty, respect for God and respect for humanity."
  }
];

export const sustainabilityGoals = [
  ["SDG 4 - Quality Education", School],
  ["SDG 5 - Gender Equality", Users],
  ["SDG 12 - Responsible Consumption and Production", Recycle],
  ["SDG 13 - Climate Action", Leaf]
];

export const facilities = [
  "Modern Classrooms",
  "Montessori Learning Spaces",
  "ICT and Digital Learning",
  "Science and STEM Activities",
  "Safe Play Areas",
  "Library and Reading Spaces"
];

export const contactMethods = [
  { label: school.location, icon: MapPin },
  { label: school.phone, icon: Phone },
  { label: school.email, icon: Waves }
];
