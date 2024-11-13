import InstaIcon from "@/public/icons/insta.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className="py-5 bg-background text-slate-400 border-t border-slate-700">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            2024 Hazlo Sports, Inc. All rights reserved.
          </div>
          <a className="text-center hover:underline cursor-pointer">
            Privacy Policy
          </a>
          <ul className="flex justify-center gap-2.5">
            <li>
              <a href="https://www.instagram.com/hazlo.sports/" target="_blank">
                <InstaIcon />
              </a>
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
