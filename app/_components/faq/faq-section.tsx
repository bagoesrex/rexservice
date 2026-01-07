import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Accordion } from "@/components/ui/accordion";
import { FAQ } from "@/types/faq";
import FAQItem from "./faq-item";

const faqs: FAQ[] = [
  {
    question: "Apa itu Unlock Bootloader (UBL)?",
    answer:
      "Unlock Bootloader adalah proses membuka kunci sistem Android sehingga kamu bisa menginstall custom recovery, custom ROM, atau melakukan root. Ini adalah langkah pertama untuk modifikasi sistem Android.",
  },
  {
    question: "Apakah root dan custom ROM aman?",
    answer:
      "Ya, jika dilakukan dengan benar. Di REXSERVICE, kami selalu menggunakan metode yang sudah teruji. Kami juga memberikan garansi service untuk setiap pengerjaan.",
  },
  {
    question: "Apakah garansi HP akan hangus?",
    answer:
      "Secara umum, modifikasi seperti UBL, root, atau custom ROM dapat membatalkan garansi resmi. Namun, beberapa brand memperbolehkan UBL tanpa hangus garansi. Kami sarankan cek kebijakan brand HP kamu.",
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer:
      "Untuk UBL dan Root, kurang lebih 45 menit. Pengerjaan bergantung kompleksitas dan ROM yang dipilih. Kami akan informasikan estimasi waktu sebelum pengerjaan.",
  },
  {
    question: "Apakah bisa remote atau harus datang langsung?",
    answer:
      "Kami menyediakan layanan remote untuk beberapa tipe HP yang memungkinkan. Untuk proses yang lebih kompleks, disarankan datang langsung atau kirim HP via kurir dengan ongkir ditanggung customer.",
  },
  {
    question: "Bagaimana jika HP bermasalah setelah oprek?",
    answer:
      "Kami memberikan garansi service hingga 1 bulan. Jika ada masalah, bisa langsung hubungi kami via WhatsApp dan kami akan bantu perbaiki tanpa biaya tambahan selama masih dalam masa garansi.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq">
      <MaxWidthWrapper className="flex flex-col items-center justify-center gap-13 py-18">
        <div className="space-y-3 text-center">
          <span className="text-primary block text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl font-bold">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-sm">Jawaban untuk pertanyaan yang sering ditanyakan seputar layanan kami.</p>
        </div>
        <div className="w-full max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} index={index} faq={faq} />
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
