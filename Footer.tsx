import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg hero-gradient">
              <span className="text-sm font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-lg font-bold text-foreground">
              Stay<span className="text-primary">Mitra</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            India's trusted hostel finder for students. Find safe, affordable stays near your college.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Popular Cities</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/hostels?city=Bangalore" className="hover:text-primary">Bangalore</Link></li>
            <li><Link to="/hostels?city=Mumbai" className="hover:text-primary">Mumbai</Link></li>
            <li><Link to="/hostels?city=Delhi" className="hover:text-primary">Delhi</Link></li>
            <li><Link to="/hostels?city=Chennai" className="hover:text-primary">Chennai</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-primary cursor-pointer">About Us</span></li>
            <li><span className="hover:text-primary cursor-pointer">Contact</span></li>
            <li><span className="hover:text-primary cursor-pointer">Careers</span></li>
            <li><span className="hover:text-primary cursor-pointer">Blog</span></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-primary cursor-pointer">Help Center</span></li>
            <li><span className="hover:text-primary cursor-pointer">Safety</span></li>
            <li><span className="hover:text-primary cursor-pointer">Terms</span></li>
            <li><span className="hover:text-primary cursor-pointer">Privacy</span></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 StayMitra. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
