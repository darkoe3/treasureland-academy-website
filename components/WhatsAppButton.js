import { MessageCircle } from "lucide-react";
import { school } from "@/lib/schoolData";

export default function WhatsAppButton() {
  return (
    <a
      href={school.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-soft hover:scale-105 hover:bg-green-700"
      aria-label="Send Treasureland Academy a WhatsApp message"
    >
      <MessageCircle aria-hidden="true" />
    </a>
  );
}
