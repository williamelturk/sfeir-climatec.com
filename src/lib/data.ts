export const siteConfig = {
  name: "Sfeir Climatec",
  description:
    "The Sfeir family has been cultivating enduring relationships and delivering lasting projects for more than 47 years. Our commitment extends beyond air conditioning technology as we construct secure environments and implement eco-friendly solutions within the communities we serve.",
  phone: "+961 3 616 644",
  phoneHref: "tel:+9613616644",
  whatsapp:
    "https://api.whatsapp.com/send?phone=9613616644&text=Write%20your%20message%20here",
  email: "info@sfeir-climatec.com",
  address: "Dora, Beirut, Lebanon",
  youtubeVideo: "https://www.youtube.com/embed/G6zv3wFvpHM?autoplay=1",
  workingHours: [
    { days: "Monday–Friday", hours: "9am to 5pm" },
    { days: "Saturday", hours: "10am to 3pm" },
    { days: "Sunday", hours: "Closed" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/library", label: "Library" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    img: "/img/slider/Slide1.jpg",
    header: "We are more than an air conditioning company",
    content:
      "The foundations and aspirations of our air conditioning company remain steadfast, reflecting the principles established by our visionary founders. Their innovation and energy continue to inspire us as we strive to exceed customer expectations. Driven by our passion and entrepreneurial culture, we are committed to delivering exceptional safety, quality, and assurance both now and in the future.",
  },
  {
    img: "/img/slider/Slide2.jpg",
    header: "We are more than an air conditioning company",
    content:
      "The foundations and aspirations of our air conditioning company remain steadfast, reflecting the principles established by our visionary founders. Their innovation and energy continue to inspire us as we strive to exceed customer expectations. Driven by our passion and entrepreneurial culture, we are committed to delivering exceptional safety, quality, and assurance both now and in the future.",
  },
  {
    img: "/img/slider/Slide3.jpg",
    header: "We are more than an air conditioning company",
    content:
      "The foundations and aspirations of our air conditioning company remain steadfast, reflecting the principles established by our visionary founders. Their innovation and energy continue to inspire us as we strive to exceed customer expectations. Driven by our passion and entrepreneurial culture, we are committed to delivering exceptional safety, quality, and assurance both now and in the future.",
  },
];

export const homeServices = [
  {
    icon: "/img/services/services-icon-1.png",
    title: "Installation Services",
    description:
      "This includes assessing the space, recommending the appropriate system size and type, and expertly installing the air conditioning unit to ensure optimal performance and energy efficiency.",
  },
  {
    icon: "/img/services/services-icon-2.png",
    title: "Repair and Maintenance Services",
    description:
      "We provide repair services to fix any issues with the cooling system, such as faulty components, refrigerant leaks, or electrical problems.",
  },
  {
    icon: "/img/services/services-icon-3.png",
    title: "System Upgrades and Retrofitting",
    description:
      "We assist our customers in upgrading existing systems to more energy-efficient models to enhance performance, save on energy costs and reduce the environmental impact.",
  },
  {
    icon: "/img/services/services-icon-4.png",
    title: "Indoor Air Quality Solutions",
    description:
      "We offer services and products aimed at improving indoor air quality, such as installing air purifiers, UV lights, or humidity control systems.",
  },
];

export type Product = {
  name: string;
  image?: string; // filename inside /img/services/images/
};

export const products: Product[] = [
  { name: "Chilled Water AC Machines", image: "Chilled-Water-Dunham-Bush.jpg" },
  { name: "VRF AC Machines", image: "Vrf-mitsubishi.jpg" },
  { name: "DX AC Machines", image: "Daikin.jpg" },
  { name: "Black Seamless Pipes" },
  { name: "Circulation Pumps", image: "Pumps-Wilo.jpg" },
  { name: "Valves", image: "Valves-Hattersley.jpg" },
  { name: "PICV (Pressure Independent Control Valves)", image: "FlowCon.jpg" },
  { name: "MCC (Motor Control Center)" },
  { name: "MDP (Main Distribution Panel)" },
  { name: "Fans", image: "SodecaFans.jpg" },
  { name: "Copper Pipes" },
  { name: "Air Ducts" },
  { name: "Grilles" },
  { name: "Dampers" },
  { name: "Insulation" },
];

export type Service = {
  id: number;
  title: string;
  description: string;
  thumb: string; // filename inside /img/services/thumbs/
  image?: string; // filename inside /img/services/images/ for lightbox
};

export const services: Service[] = [
  {
    id: 1,
    title: "Chilled Water AC Machines",
    description:
      "Our advanced chilled water air conditioning machines provide efficient cooling solutions for large-scale applications. With state-of-the-art technology, they ensure optimal comfort and energy savings while maintaining a consistent temperature throughout your space.",
    thumb: "Chilled-Water-Dunham-Bush.jpg",
    image: "Chilled-Water-Dunham-Bush.jpg",
  },
  {
    id: 2,
    title: "VRF AC Machines",
    description:
      "Our Variable Refrigerant Flow (VRF) air conditioning machines offer a flexible and customizable solution for both residential and commercial settings. These systems provide precise temperature control, individual zone management, and energy-efficient operation, allowing you to create the perfect indoor environment.",
    thumb: "Vrf-mitsubishi.jpg",
    image: "Vrf-mitsubishi.jpg",
  },
  {
    id: 3,
    title: "DX AC Machines",
    description:
      "Our DX (Direct Expansion) air conditioning machines are designed for smaller spaces or specific cooling requirements. These compact and versatile units deliver efficient cooling performance while being easy to install and maintain. They are an ideal choice for individual rooms, offices, or smaller residential areas.",
    thumb: "Daikin.jpg",
    image: "Daikin.jpg",
  },
  {
    id: 4,
    title: "Black Seamless Pipes",
    description:
      "We offer high-quality black seamless pipes that are suitable for air conditioning systems. These pipes provide excellent durability, corrosion resistance, and a seamless finish, ensuring reliable and efficient distribution of chilled water or refrigerant throughout your AC system.",
    thumb: "logo.jpg",
  },
  {
    id: 5,
    title: "Circulation Pumps",
    description:
      "Our circulation pumps are designed to enhance the performance and efficiency of your air conditioning system. They ensure smooth and continuous circulation of water or refrigerant, enabling optimal heat transfer and maintaining consistent cooling comfort throughout your space.",
    thumb: "Pumps-Wilo.jpg",
    image: "Pumps-Wilo.jpg",
  },
  {
    id: 6,
    title: "Valves",
    description:
      "We provide a wide range of valves, including control valves, isolation valves, and balancing valves, that are crucial components of any air conditioning system. Our valves are designed to regulate the flow and pressure of water or refrigerant, ensuring efficient operation and precise control over your cooling system.",
    thumb: "Valves-Hattersley.jpg",
    image: "Valves-Hattersley.jpg",
  },
  {
    id: 7,
    title: "PICV (Pressure Independent Control Valves)",
    description:
      "Our Pressure Independent Control Valves (PICV) combine flow control, pressure regulation, and temperature control in a single unit. These innovative valves ensure stable and accurate control over chilled water flow, resulting in optimal comfort and energy efficiency in your air conditioning system.",
    thumb: "FlowCon.jpg",
    image: "FlowCon.jpg",
  },
  {
    id: 8,
    title: "MCC (Motor Control Center)",
    description:
      "Our Motor Control Center (MCC) panels provide centralized control and protection for the motors and electrical components of your air conditioning system. These panels ensure safe and efficient operation, allowing for easy monitoring, troubleshooting, and maintenance of your AC system.",
    thumb: "logo.jpg",
  },
  {
    id: 9,
    title: "MDP (Main Distribution Panel)",
    description:
      "We provide a comprehensive solution for your electrical power distribution needs. With expertise in designing, installing, and maintaining main distribution panels, we ensure efficient and reliable power distribution throughout your facility.",
    thumb: "logo.jpg",
  },
  {
    id: 10,
    title: "Fans",
    description:
      "We offer a variety of fans, including axial fans and centrifugal fans, that are essential for proper air circulation and ventilation in your air conditioning system. Our fans are designed to deliver optimal airflow, quiet operation, and energy efficiency, contributing to a comfortable and well-ventilated indoor environment.",
    thumb: "SodecaFans.jpg",
    image: "SodecaFans.jpg",
  },
  {
    id: 11,
    title: "Copper Pipes",
    description:
      "Our high-quality copper pipes are widely used in air conditioning systems for their excellent heat transfer properties and durability. These pipes ensure efficient refrigerant flow, minimizing energy consumption and maximizing cooling performance, resulting in reliable and effective air conditioning.",
    thumb: "logo.jpg",
  },
  {
    id: 12,
    title: "Air Ducts",
    description:
      "We provide a comprehensive range of air ducts that facilitate the efficient distribution of conditioned air throughout your space. Our ducts are designed for optimal airflow, low pressure loss, and effective insulation, ensuring even cooling and comfort in every room.",
    thumb: "logo.jpg",
  },
  {
    id: 13,
    title: "Grilles",
    description:
      "Our selection of grilles includes supply grilles, return grilles, and diffusers, which play a crucial role in directing and distributing air from your air conditioning system. These grilles are designed for optimal air diffusion, aesthetics, and ease of installation, enhancing the overall performance and appearance of your AC system.",
    thumb: "logo.jpg",
  },
  {
    id: 14,
    title: "Dampers",
    description:
      "Our dampers are essential components for regulating airflow and controlling ventilation in your air conditioning system. We offer a variety of dampers, including volume control dampers, fire dampers, and smoke dampers, ensuring safe and efficient operation while maintaining proper air balance in your space.",
    thumb: "logo.jpg",
  },
  {
    id: 15,
    title: "Insulation",
    description:
      "We provide high-quality insulation materials specifically designed for air conditioning systems. Proper insulation helps prevent heat loss or gain, improving energy efficiency and reducing operational costs while maintaining optimal comfort in your space.",
    thumb: "logo.jpg",
  },
];

export const principles = [
  {
    number: "01",
    title: "Humility",
    description:
      "Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.",
  },
  {
    number: "02",
    title: "Honesty",
    description:
      "Be sure of our facts and be honest and straightforward in all of our dealings with each other and our clients.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Over the years, we have gained a reputation for integrity and trust from our customers who continue to use our services.",
  },
  {
    number: "04",
    title: "Quality Work",
    description:
      "We ensure that all projects are done with professionalism using quality materials while offering clients the support and accessibility.",
  },
];

export const libraryPhotos = [
  { src: "/img/library/1.jpg", width: 1920, height: 1280 },
  { src: "/img/library/5.jpg", width: 1920, height: 1267 },
  { src: "/img/library/4.jpg", width: 1920, height: 1280 },
  { src: "/img/library/2.jpg", width: 1920, height: 1920 },
  { src: "/img/library/3.jpg", width: 1920, height: 1276 },
];

export const team = [
  {
    slug: "nicolas-sfeir",
    name: "Nicolas Sfeir",
    title: "Owner",
    address: "Dora, Beirut, Lebanon",
    phone: "+961 3 616 644",
    email: "info@sfeir-climatec.com",
  },
];
