import { Link } from 'react-router-dom';

interface FooterLinksProps {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
  columns?: number;
}

export function FooterLinks({ title, links, columns = 1 }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className={`grid grid-cols-${columns} gap-2`}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}