export interface Service {
  slug: string;
  title: string;
  description: string;
  items: string[];
  /** Array of SVG path "d" attributes rendered as sibling <path> children of a 24x24 outline icon. */
  icon: string[];
}

export const services: Service[] = [
  {
    slug: "contabilidad-general",
    title: "Contabilidad General",
    description: "Registro, control y estados financieros al día.",
    items: [
      "Registro y control de operaciones contables.",
      "Elaboración de estados financieros bajo NIIF.",
      "Conciliaciones bancarias y revisión de cuentas.",
      "Contabilidad mensual, trimestral o anual.",
    ],
    icon: ["M4 20V10", "M12 20V4", "M20 20v-7"],
  },
  {
    slug: "asesoria-tributaria",
    title: "Asesoría Tributaria",
    description: "Declaraciones y planeación fiscal sin sorpresas.",
    items: [
      "Declaración de renta personas naturales y jurídicas.",
      "Declaraciones de IVA, retención en la fuente, ICA, entre otros.",
      "Planeación tributaria para optimizar cargas fiscales.",
      "Atención de requerimientos por parte de la DIAN y entes territoriales.",
    ],
    icon: ["M6 3h9l3 3v15H6z", "M15 3v3h3", "M9 9h3", "M9 12h6", "M9 15h6"],
  },
  {
    slug: "nomina-seguridad-social",
    title: "Nómina y Seguridad Social",
    description: "Liquidación y cumplimiento laboral completo.",
    items: [
      "Liquidación de nómina mensual y prestaciones sociales.",
      "Elaboración de planillas PILA.",
      "Asesoría laboral y cumplimiento normativo.",
    ],
    icon: [
      "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    ],
  },
  {
    slug: "constitucion-empresas",
    title: "Constitución y Formalización de Empresas",
    description: "Acompañamiento desde la idea hasta la operación.",
    items: [
      "Acompañamiento en el proceso de creación de empresas.",
      "Registro en Cámara de Comercio y DIAN.",
      "Asesoría en elección de régimen tributario.",
      "Diseño de estructura contable y administrativa.",
    ],
    icon: ["M4 21V7l8-4 8 4v14", "M9 21v-6h6v6", "M9 10h.01", "M15 10h.01", "M9 14h.01", "M15 14h.01"],
  },
];
