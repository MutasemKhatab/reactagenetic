export default function Footer() {
  return (
    <footer className="py-6 mt-8 border-t bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0 self-start text-left">
            <div className="text-xl text-primary mb-2">logo</div>
            <p className="text-gray-500 text-sm">
              Building the future of autonomous AI agents.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="ri-github-line"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="ri-discord-line"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Agentic AI Platform. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
