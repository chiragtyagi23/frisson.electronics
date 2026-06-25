import Image from "next/image";

const SHEELA_FOAM_LOGO =
  "https://res.cloudinary.com/dduaiugsj/images/v1775114982/Logo-1/Logo-1.png";

const SERVOTECH_LOGO =
  "https://www.servotech.in/blog/wp-content/uploads/2023/04/logo.png";

export function SheelaFoamHeaderLogo() {
  return (
    <div className="client-header-brand client-header-brand--logo">
      <Image
        src={SHEELA_FOAM_LOGO}
        alt="Sheela Foam logo"
        width={174}
        height={24}
        className="client-brand-logo-img"
      />
    </div>
  );
}

export function ServotechHeaderLogo() {
  return (
    <div className="client-header-brand client-header-brand--logo">
      <Image
        src={SERVOTECH_LOGO}
        alt="Servotech logo"
        width={181}
        height={51}
        className="client-brand-logo-img"
      />
    </div>
  );
}
