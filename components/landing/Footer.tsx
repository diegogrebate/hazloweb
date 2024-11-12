import InstaIcon from "@/public/icons/insta.svg";
import XSocial from "@/public/icons/x-social.svg";
import TikTokIcon from "@/public/icons/tiktok.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className="py-5 bg-background text-white/60 border-t border-white/20">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">
            2024 Hazlo Sports, Inc. All rights reserved.
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocial />
            </li>
            <li>
              <a href="https://www.instagram.com/hazlo.sports/" target="_blank">
                <InstaIcon />
              </a>
            </li>
            <li>
              <TikTokIcon />
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
