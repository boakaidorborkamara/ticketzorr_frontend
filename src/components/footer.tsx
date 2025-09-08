"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 lg:py-16">
      <div className="container-responsive grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        <div>
          <h3 className="text-responsive-lg font-semibold mb-4 lg:mb-6">
            Explore Ticketzor
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                About Ticketzor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                How Ticketzor Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Pricing and Fees
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Help center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-responsive-lg font-semibold mb-4 lg:mb-6">
            Getting Started
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Create an account
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Sell Event Tickets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                My tickets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Forgot your password?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                How to Sign Up as an Organizer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                How to Sign Up as an Attendee
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                How to buy event tickets?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Adding a new event
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                What does a ticket look like?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Sell Physical Tickets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Payout request process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Check-in Accounts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-responsive-lg font-semibold mb-4 lg:mb-6">
            Top Locations
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Liberia
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Ghana
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Nigeria
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Sierra Leone
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Uganda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Rwanda
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                All Countries
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-responsive-lg font-semibold mb-4 lg:mb-6">
            Contact Ticketzor
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Call us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Email Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-responsive-sm hover:underline hover:text-primary transition-colors duration-200"
              >
                Helpdesk & FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex space-x-4 sm:space-x-6">
          <a
            href="#"
            className="text-white hover:text-primary transition-colors duration-200 touch-target"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors duration-200 touch-target"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors duration-200 touch-target"
          >
            <Twitter size={20} />
          </a>
        </div>
        <p className="text-responsive-xs text-center sm:text-right leading-relaxed">
          <span className="block sm:inline">
            Terms of service | Privacy policy | Cookie policy | Refund policy
          </span>
          <span className="block sm:inline sm:ml-2">© 2025 ticketZor</span>
        </p>
      </div>
    </footer>
  );
}
