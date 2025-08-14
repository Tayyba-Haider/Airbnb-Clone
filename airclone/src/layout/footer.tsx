import Container from "./container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <Container>
        <div className="py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Help Center</li><li>AirCover</li><li>Anti-discrimination</li><li>Disability support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Hosting</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Try hosting</li><li>AirCover for Hosts</li><li>Explore hosting resources</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Airbnb</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Newsroom</li><li>Investors</li><li>Careers</li>
            </ul>
          </div>
          <div className="text-gray-600">
            <div className="font-semibold mb-2">© {new Date().getFullYear()} staybnb</div>
            <p className="leading-relaxed">Demo landing page built with React, Tailwind, MUI, and Framer Motion.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
