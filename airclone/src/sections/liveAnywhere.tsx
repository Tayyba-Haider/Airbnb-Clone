import Container from "../layout/container";
import { STAYS } from "../data/stays";
import StayCard from "../components/cards/stayCards";
import { motion } from "framer-motion";

export default function LiveAnywhere() {
  return (
    <section className="mt-14">
      <Container>
        <h2 className="section-title">Popular homes in Islamabad</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex gap-3 overflow-x-auto hide-scrollbar"
        >
          {STAYS.map((s) => (
            <div
              key={s.id}
              className="flex-shrink-0 w-[180px] md:w-[170px] lg:w-[180px] xl:w-[179px]"
            >
              <StayCard stay={s} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
