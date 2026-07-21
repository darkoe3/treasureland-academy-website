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
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Recycle,
  School,
  ShieldCheck,
  Sprout,
  Star,
  Target,
  Trees,
  Users
} from "lucide-react";

export const school = {
  name: "Treasureland Academy",
  logoSrc: "/images/treasureland-logo.jpeg",
  motto: "Knowledge, Character & Service",
  constitutionHref: "/documents/treasureland-academy-constitution.pdf",
  schoolAppHref: "https://ta.schoolerpghana.com",
  founded: "2011",
  location: "Kasoa-Brigade, Ga South, Ghana",
  phone: "027 728 8312",
  phoneHref: "tel:0277288312",
  phoneNumbers: [
    { label: "0302 952 792", href: "tel:0302952792" },
    { label: "027 728 8312", href: "tel:0277288312" },
    { label: "024 021 9372", href: "tel:0240219372" }
  ],
  whatsappNumber: "027 728 8312",
  whatsapp:
    "https://wa.me/233277288312?text=Hello%20Treasureland%20Academy%2C%0A%0AI%20would%20like%20to%20enquire%20about%20admission%20for%20my%20child.%0A%0ACould%20you%20please%20provide%20me%20with%20more%20information%3F%0A%0AThank%20you.",
  email: "Treasurelandacademy2011@gmail.com",
  emailHref: "mailto:Treasurelandacademy2011@gmail.com"
};

export const seoKeywords = [
  "Treasureland Academy",
  "school in Kasoa",
  "school in Ga South",
  "Montessori school in Kasoa",
  "private school in Kasoa",
  "Creche in Kasoa",
  "Creche in Ga South",
  "Early childhood education in Kasoa",
  "Montessori Creche Kasoa",
  "Treasureland Academy Creche",
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

export const desktopNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student Life", href: "/student-life" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Gallery", href: "/gallery" },
  { label: "News and Events", href: "/news" },
  { label: "Contact", href: "/contact" }
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const footerExploreLinks = [
  { label: "Student Life", href: "/student-life" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News and Events", href: "/news" }
];

export const academicLevelNames = ["Creche", "Nursery", "Kindergarten", "Primary", "Junior High School"];
export const academicLevelLabel = "Creche, Nursery, Kindergarten, Primary and Junior High School";

export const academicsMenuItems = [
  { label: "Creche", href: "/academics#academic-levels" },
  { label: "Nursery", href: "/academics#academic-levels" },
  { label: "Kindergarten", href: "/academics#academic-levels" },
  { label: "Primary", href: "/academics#academic-levels" },
  { label: "Junior High School", href: "/academics#academic-levels" },
  { label: "Montessori Education", href: "/academics#montessori" },
  { label: "STEM and ICT", href: "/academics#stem-ict" },
  { label: "Creative Arts", href: "/academics#whole-child-learning" },
  { label: "Character Development", href: "/academics#whole-child-learning" }
];

export const academicLevels = [
  {
    title: "Creche",
    icon: HandHeart,
    description:
      "A safe, caring and stimulating environment where infants and toddlers receive quality care while developing early social, emotional, sensory and motor skills."
  },
  {
    title: "Nursery",
    icon: Sprout,
    description:
      "A caring and engaging foundation where children develop communication, confidence, creativity and essential early learning skills through guided play."
  },
  {
    title: "Kindergarten",
    icon: Brain,
    description:
      "Montessori-inspired learning that nurtures independence, curiosity, early literacy, numeracy and problem-solving."
  },
  {
    title: "Primary",
    icon: BookOpen,
    description:
      "A strong academic programme integrating literacy, numeracy, STEM, ICT, creativity and character development."
  },
  {
    title: "Junior High School",
    icon: GraduationCap,
    description:
      "A focused programme preparing learners for academic excellence, leadership, responsible citizenship and lifelong success."
  }
];

export const whyChooseUs = [
  {
    title: "Founded in 2011",
    text: "Over a decade of commitment to quality education and character development.",
    icon: Award
  },
  {
    title: "Montessori Learning",
    text: "Child-centred, practical and independence-focused teaching.",
    icon: Compass
  },
  {
    title: "STEM and ICT Focus",
    text: "Preparing learners with digital, scientific and problem-solving skills.",
    icon: Cpu
  },
  {
    title: "Safe and Inclusive Environment",
    text: "A caring learning community where every child is valued and supported.",
    icon: ShieldCheck
  }
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
  { label: school.phoneNumbers.map((item) => item.label).join(", "), icon: Phone },
  { label: school.email, icon: Mail },
  { label: school.whatsappNumber, icon: MessageCircle }
];
