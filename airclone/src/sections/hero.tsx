import { motion } from "framer-motion";
import Container from "../layout/container";
import hero from "../assets/logo.svg";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[58vh] min-h-[360px] w-full overflow-hidden">
        <img src={hero} alt="hero" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Container>
          <div className="relative z-10 flex h-[58vh] min-h-[360px] items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="max-w-xl text-white"
            >
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Not sure where to go? <span className="text-brand">Perfect.</span>
              </h1>
              <p className="mt-3 text-lg text-white/90">
                Explore nearby getaways, unique stays, and experiences.
              </p>
              <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-gray-100 shadow-soft">
                I’m flexible
              </button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
