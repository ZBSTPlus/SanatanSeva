export const temples = [
  {
    slug: "tirumala-venkateswara-temple",
    name: "Tirumala Venkateswara Temple",
    city: "Tirupati",
    state: "Andhra Pradesh",
    image: "/images/temple-tirumala.svg",
    description:
      "Perched on the sacred Tirumala hills, this revered shrine radiates divine grace and timeless devotion.",
    services: [
      {
        id: "archana",
        name: "Archana",
        description:
          "A heartfelt offering of names and devotion, inviting the Lord's blessings.",
        price: 501,
      },
      {
        id: "kalyanotsavam",
        name: "Kalyanotsavam",
        description:
          "Witness the celestial wedding ceremony, filled with sacred chants and grace.",
        price: 2500,
      },
      {
        id: "sahasranama-archana",
        name: "Sahasranama Archana",
        description:
          "Recitation of a thousand divine names to illuminate the devotee's path.",
        price: 1100,
      },
    ],
  },
  {
    slug: "kapila-theertham",
    name: "Kapila Theertham",
    city: "Tirupati",
    state: "Andhra Pradesh",
    image: "/images/temple-kapila.svg",
    description:
      "Nestled near a sacred waterfall, Kapila Theertham is a serene space for purification and prayer.",
    services: [
      {
        id: "abhishekam",
        name: "Abhishekam",
        description:
          "Sacred bathing ritual with holy waters and fragrant offerings.",
        price: 701,
      },
      {
        id: "rudra-archana",
        name: "Rudra Archana",
        description:
          "A powerful invocation to Lord Shiva for strength and peace.",
        price: 901,
      },
    ],
  },
  {
    slug: "meenakshi-amman-temple",
    name: "Meenakshi Amman Temple",
    city: "Madurai",
    state: "Tamil Nadu",
    image: "/images/temple-meenakshi.svg",
    description:
      "A marvel of Dravidian architecture, this temple celebrates the divine union of Meenakshi and Sundareswarar.",
    services: [
      {
        id: "meenakshi-archana",
        name: "Meenakshi Archana",
        description:
          "Offer prayers to the goddess with flowers, lamps, and sacred mantras.",
        price: 601,
      },
      {
        id: "special-pooja",
        name: "Special Pooja",
        description:
          "A grand ceremonial worship for prosperity, harmony, and grace.",
        price: 1500,
      },
    ],
  },
  {
    slug: "padmanabhaswamy-temple",
    name: "Padmanabhaswamy Temple",
    city: "Thiruvananthapuram",
    state: "Kerala",
    image: "/images/temple-padmanabhaswamy.svg",
    description:
      "An ocean of divinity where Lord Vishnu rests in eternal serenity.",
    services: [
      {
        id: "sahasranama-archana",
        name: "Sahasranama Archana",
        description:
          "Thousand-name recitation to awaken inner light and reverence.",
        price: 1200,
      },
      {
        id: "lakshmi-pooja",
        name: "Lakshmi Pooja",
        description:
          "Invoke abundance and auspicious energy through sacred offerings.",
        price: 1800,
      },
    ],
  },
];

export const getTempleBySlug = (slug) =>
  temples.find((temple) => temple.slug === slug);

export const getSevaById = (temple, sevaId) =>
  temple?.services?.find((service) => service.id === sevaId);

export const groupTemplesByState = () => {
  return temples.reduce((acc, temple) => {
    if (!acc[temple.state]) acc[temple.state] = [];
    acc[temple.state].push(temple);
    return acc;
  }, {});
};
