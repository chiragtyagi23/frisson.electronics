import { ClientLinkIcon } from "@/components/icons/SharedIcons";

type ClientCardProps = {
  headerLogo: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  websiteUrl: string;
};

export default function ClientCard({
  headerLogo,
  title,
  subtitle,
  description,
  websiteUrl,
}: ClientCardProps) {
  return (
    <div className="client-card">
      <div className="client-header">{headerLogo}</div>
      <div className="client-divider" />
      <div className="client-body">
        <h3 className="client-title">{title}</h3>
        <p className="client-subtitle">{subtitle}</p>
        <p className="client-desc">{description}</p>
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="client-link">
          Visit Website
          <ClientLinkIcon />
        </a>
      </div>
    </div>
  );
}
