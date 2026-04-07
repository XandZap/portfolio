import Link from "next/link";
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import ScrollReveal from "./ScrollReveal";

function CTA() {
  return (
    <ScrollReveal>
      <section className="py-20 text-center" id="contato">
        <h2 className="text-3xl font-bold text-secondary-foreground mb-4 max-lg:text-2xl">
          Vamos conversar?
        </h2>
        <p className="text-zinc-50/50 text-lg mb-8 max-w-2xl mx-auto">
          Estou sempre aberto a novas oportunidades, projetos desafiadores ou simplesmente trocar uma ideia sobre tecnologia.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://wa.me/5592993265953?text=Olá Alexandre, vi seu portfólio e gostaria de conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg shadow-green-600/20"
          >
            <BsWhatsapp className="text-xl" />
            WhatsApp
          </Link>
          <Link
            href="mailto:alexandreroberto.94@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-accent rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg"
          >
            <BsEnvelope className="text-xl" />
            Enviar E-mail
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default CTA;