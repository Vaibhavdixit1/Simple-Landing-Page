import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-4 md:px-12 border-t">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="w-40 h-32 relative mb-2">
          {" "}
          <Image
            src="/Logo.png"
            alt="Supreme Group Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Applications */}
          <div>
            <h4 className="text-base font-bold mb-3 text-black">
              APPLICATIONS
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Solutions</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-bold mb-3 text-black">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Innovation</li>
              <li>Global Competency</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-base font-bold mb-3 text-black">MORE</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-base font-bold mb-3 text-black">FOLLOW US</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="https://twitter.com">Twitter</Link>
              </li>
              <li>
                <Link href="https://linkedin.com">LinkedIn</Link>
              </li>
              <li>
                <Link href="https://instagram.com">Instagram</Link>
              </li>
              <li>
                <Link href="https://medium.com">Medium</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col md:flex-row justify-between text-sm text-gray-700">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
}
