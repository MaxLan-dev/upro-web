"use client";

import { useState } from "react";
import { HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HelpButton() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <>
      {/* Help Button - Fixed position */}
      <Button
        onClick={() => setIsHelpOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-upro-green text-black hover:bg-upro-green/90 rounded-full p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-upro-green focus:ring-offset-2 focus:ring-offset-[#020d02]"
        aria-label="Open help and support"
        title="Help & Support"
      >
        <HelpCircle className="h-6 w-6" />
      </Button>

      {/* Help Modal */}
      {isHelpOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-title"
        >
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 id="help-title" className="text-xl font-bold text-black">
                Help & Support
              </h2>
              <Button
                onClick={() => setIsHelpOpen(false)}
                variant="ghost"
                size="sm"
                className="text-black hover:bg-gray-100"
                aria-label="Close help dialog"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4 text-black">
              <div>
                <h3 className="font-semibold mb-2">Quick Help</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Use Tab to navigate between elements</li>
                  <li>• Use arrow keys in the testimonials carousel</li>
                  <li>• Press Enter or Space to activate buttons</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:support@uprosoccer.com"
                    className="text-blue-600 underline"
                  >
                    support@uprosoccer.com
                  </a>
                </p>
                <p className="text-sm">
                  Phone:{" "}
                  <a
                    href="tel:+1-800-UPRO-123"
                    className="text-blue-600 underline"
                  >
                    1-800-UPRO-123
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <p className="text-sm">
                  This site is designed to be accessible. If you encounter any
                  issues, please contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
