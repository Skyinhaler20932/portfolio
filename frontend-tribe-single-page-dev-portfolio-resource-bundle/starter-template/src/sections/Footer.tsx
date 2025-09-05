import LinkedIcon from '@/assets/icons/linkedIn.svg';
import GitIcon from '@/assets/icons/emerladGitHub.svg';
import EmailIcon from '@/assets/icons/email-1572-svgrepo-com.svg';
import MeetIcon from '@/assets/icons/google-meet-svgrepo-com.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    href: '#',
    icon: LinkedIcon,
  },
  {
    title: 'GitHub',
    href: '#',
    icon: GitIcon,
  },
  {
    title: 'Email',
    href: '#',
    icon: EmailIcon,
  },
  {
    title: 'Meet',
    href: '#',
    icon: MeetIcon,
  },
];


export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8 ">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a className="inline-flex items-center gap-1.5"
                  href={link.href}
                  key={link.title}
                  aria-label={link.title}
                >
                  <Icon className="size-5" />
                  <span className="sr-only">{link.title}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
