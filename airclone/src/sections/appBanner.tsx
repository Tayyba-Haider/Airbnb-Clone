import Container from "../layout/container";
import appBanner from "../assets/logo.svg";

export default function AppBanner() {
  return (
    <section className="mt-14">
      <Container>
        <div className="relative overflow-hidden rounded-2xl">
          <img src={appBanner} alt="Get the app" className="h-72 w-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-semibold">It’s all on the app</h3>
              <p className="mt-2 max-w-lg text-white/90">
                Book stays, message Hosts, and experience the world on the go.
              </p>
              <button className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand hover:bg-gray-100">
                Get the app
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
