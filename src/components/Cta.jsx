import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const CTASection = () => (
  <footer className="w-full bg-gray-800 dark:bg-blue-900 py-16 text-center text-white ">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Join Our Growth Journey?
      </h2>
      <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
        Discover how we can help your business scale new heights. Get in touch
        with our team or start a free trial today!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <a
          href="https://in.linkedin.com/company/weboin"
          className="inline-block bg-white text-blue-600 font-semibold rounded-md px-8 py-3 hover:bg-indigo-50 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Contact & Social */}
      <div className="flex flex-col sm:flex-row justify-center gap-12 text-indigo-200 text-sm font-medium">
        {/* Phone */}
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaPhoneAlt /> +91 9123456780
        </a>

        {/* Email */}
        <a
          href="mailto:hello@company.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaEnvelope /> hello@weboin.com
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/weboin/#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaInstagram /> Instagram
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/weboin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaFacebookF /> Facebook
        </a>
      </div>
    </div>
  </footer>
);

export default CTASection;
