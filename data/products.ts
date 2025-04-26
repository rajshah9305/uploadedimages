export interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
  slug: string
  details: string
  story: string
  photographer: {
    name: string
    bio: string
    image: string
  }
  location: {
    name: string
    description: string
    coordinates: [number, number] // [longitude, latitude]
    country: string
  }
  specs: {
    sizes: string[]
    paper: string
    shipping: string
    framing: string
  }
  camera: {
    model: string
    lens: string
    settings: string
  }
}

export const products: Product[] = [
  {
    id: 0,
    title: "Northern Lights Over Mountains",
    description: "Aurora borealis dancing over snow-capped peaks",
    price: 79.99,
    image: "/images/northern-lights-1.png",
    slug: "northern-lights-mountains",
    details:
      "This breathtaking photograph captures the mesmerizing dance of the aurora borealis over a snow-covered mountain range. The vibrant green and blue hues of the northern lights contrast beautifully with the serene white of the snow and the deep blue of the night sky, creating a scene of otherworldly beauty.",
    story:
      "Captured during a frigid winter night in the Canadian Rockies, this image showcases the ethereal dance of the aurora borealis over jagged mountain peaks. I had been tracking solar activity for weeks, waiting for the perfect conditions. When alerts indicated a strong geomagnetic storm was approaching, I packed my gear and headed deep into the wilderness, far from any light pollution. After hiking for three hours in sub-zero temperatures, I set up my equipment and waited. Around 2 AM, the sky erupted in a spectacular display that lasted for nearly two hours. The temperature had dropped to -25°C, and my fingers were numb despite wearing thick gloves, but witnessing this magnificent natural phenomenon made every moment of discomfort worthwhile.",
    photographer: {
      name: "Alex Winters",
      bio: "Alex is a wilderness photographer specializing in night sky photography. With over 15 years of experience capturing the aurora borealis, he has developed techniques to photograph these elusive lights in the most challenging conditions. His work has been featured in National Geographic, Outdoor Photographer, and various international exhibitions.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Jasper National Park",
      description: "A remote area in the Canadian Rockies known for its dark skies and mountain vistas.",
      coordinates: [-117.9803, 52.8737],
      country: "Canada",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Sony Alpha a7S III",
      lens: "Sony FE 14mm f/1.8 GM",
      settings: "ISO 3200, f/2.0, 8 seconds",
    },
  },
  {
    id: 1,
    title: "Sunset at Mountain Lake",
    description: "Golden hour reflections with canoes",
    price: 69.99,
    image: "/images/lake-sunset.png",
    slug: "sunset-mountain-lake",
    details:
      "This stunning photograph captures the magical moment when the setting sun bathes the mountain peaks in golden light, creating a perfect reflection on the calm lake waters. The wooden canoes in the foreground add a touch of adventure and scale to this serene wilderness scene.",
    story:
      "This image was taken during a summer expedition to document the changing landscapes of alpine lakes. I had been camping by this lake for three days, waiting for the perfect conditions. On the final evening, after a brief rain shower, the clouds parted just as the sun was setting. The lake became perfectly still, creating a mirror-like surface that reflected the golden light hitting the mountain peaks. I quickly positioned myself to include the traditional wooden canoes in the foreground, adding a sense of scale and human connection to this vast landscape. The entire scene lasted less than five minutes before the light changed, but those moments of perfect harmony between light, water, and mountains created one of my most cherished photographs.",
    photographer: {
      name: "Sarah Chen",
      bio: "Sarah specializes in landscape photography that captures the relationship between humans and nature. Her work explores how natural light transforms landscapes throughout the day, with a particular focus on the golden hour. She leads photography workshops in national parks across North America.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Moraine Lake",
      description: "A glacier-fed lake in Banff National Park known for its vivid turquoise color.",
      coordinates: [-116.1773, 51.3217],
      country: "Canada",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Canon EOS R5",
      lens: "Canon RF 15-35mm f/2.8L IS USM",
      settings: "ISO 100, f/11, 1/30 second",
    },
  },
  {
    id: 2,
    title: "Aurora Valley",
    description: "Northern lights illuminating a mountain valley",
    price: 79.99,
    image: "/images/northern-lights-2.png",
    slug: "aurora-valley",
    details:
      "This captivating image showcases the ethereal beauty of the northern lights as they illuminate a pristine mountain valley. The vibrant green aurora dances across the night sky, creating a magical atmosphere above the rugged mountain peaks and reflecting in the partially frozen waters below.",
    story:
      "This photograph represents the culmination of a three-year project to document the aurora borealis in remote mountain valleys. After numerous unsuccessful attempts due to cloud cover or weak aurora activity, I finally experienced perfect conditions on this night in northern Alaska. I had hiked 12 miles into this remote valley, carrying all my gear on my back, and set up camp for a five-night stay. On the third night, the sky exploded with the most intense aurora display I had ever witnessed. The entire valley was bathed in an eerie green glow as the lights danced overhead and reflected in the partially frozen river below. I worked quickly, capturing multiple compositions as the aurora shifted and changed, knowing that such perfect conditions might not come again for years.",
    photographer: {
      name: "Erik Nordskov",
      bio: "Erik is a Norwegian photographer who has dedicated his career to documenting the aurora borealis across the Arctic Circle. His methodical approach combines scientific understanding of solar phenomena with artistic composition. His work has been published in astronomy journals and art publications alike.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Gates of the Arctic National Park",
      description:
        "One of the most remote national parks in the United States, located entirely north of the Arctic Circle.",
      coordinates: [-153.2917, 67.7806],
      country: "United States",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Nikon Z7 II",
      lens: "Nikkor Z 14-24mm f/2.8 S",
      settings: "ISO 2500, f/2.8, 13 seconds",
    },
  },
  {
    id: 3,
    title: "Watercolor Lake",
    description: "Artistic rendering of mountain lake with canoes",
    price: 59.99,
    image: "/images/watercolor-lake.png",
    slug: "watercolor-lake",
    details:
      "This beautiful watercolor-style image depicts a tranquil mountain lake scene at sunset. The warm golden light illuminates the mountain peaks while canoes rest peacefully at the shore, inviting viewers to imagine themselves in this serene wilderness setting.",
    story:
      "This piece represents my exploration of the boundary between photography and painting. Starting with a photograph I took at dawn at this alpine lake, I developed a digital technique that transforms the image into what appears to be a watercolor painting while preserving the essential truth of the scene. The process involves dozens of layers and selective color adjustments to create the impression of watercolor pigments bleeding into the paper. I wanted to capture not just how the scene looked, but how it felt to be there—the tranquility, the crisp mountain air, and the sense of possibility represented by the canoes waiting at the shore. This artistic approach allows me to convey the emotional experience of wilderness in ways that traditional photography sometimes cannot.",
    photographer: {
      name: "Maya Hernandez",
      bio: "Maya blends traditional photography with digital art techniques to create images that exist between reality and impression. With a background in both fine art and wilderness photography, she creates work that challenges the boundaries between these disciplines. Her pieces are in several permanent museum collections.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Jenny Lake",
      description: "A pristine mountain lake in Grand Teton National Park.",
      coordinates: [-110.7271, 43.7554],
      country: "United States",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Canon EOS 5D Mark IV",
      lens: "Canon EF 24-70mm f/2.8L II USM",
      settings: "ISO 100, f/8, 1/125 second, digitally processed",
    },
  },
  {
    id: 4,
    title: "Banff Night Sky",
    description: "Aurora borealis over Banff National Park",
    price: 89.99,
    image: "/images/banff-night.png",
    slug: "banff-night-sky",
    details:
      "This spectacular photograph captures the magic of Banff National Park under the dancing northern lights. The vibrant aurora borealis illuminates the night sky with swirling greens and purples, while the full moon adds an additional source of light, creating a truly magical scene over the iconic Canadian Rockies.",
    story:
      "Capturing this image required precise planning and a bit of luck. I had been monitoring space weather forecasts for months, waiting for a strong aurora event that coincided with clear skies in Banff. When the conditions finally aligned, I drove through the night to reach this vantage point. The temperature was -15°C, and I had to keep my spare batteries inside my jacket to prevent them from dying in the cold. Around midnight, the aurora began as a faint green glow on the horizon, but over the next hour, it intensified dramatically, filling the sky with dancing curtains of light. The nearly full moon, which would normally make aurora photography difficult, actually helped illuminate the mountain landscape, creating this rare combination of moonlit mountains and vibrant aurora. I worked quickly, capturing dozens of frames as the display evolved, knowing that this convergence of perfect conditions might never repeat exactly this way again.",
    photographer: {
      name: "Thomas Reid",
      bio: "Thomas specializes in night sky photography in mountain environments. A former astronomer, he brings scientific knowledge of celestial phenomena to his artistic work. He has spent over 500 nights photographing the night sky in national parks across North America and has published two books on astrophotography techniques.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Mount Rundle",
      description: "An iconic peak in Banff National Park with distinctive layers of sedimentary rock.",
      coordinates: [-115.4, 51.1],
      country: "Canada",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Sony Alpha a7R IV",
      lens: "Sony FE 16-35mm f/2.8 GM",
      settings: "ISO 3200, f/2.8, 10 seconds",
    },
  },
  {
    id: 5,
    title: "Winter Aurora",
    description: "Northern lights over frozen mountain stream",
    price: 79.99,
    image: "/images/winter-aurora.png",
    slug: "winter-aurora",
    details:
      "This breathtaking winter scene captures the northern lights dancing above a partially frozen mountain stream. The vibrant green aurora contrasts beautifully with the deep blue night sky and snow-covered landscape, while the moonlight creates a magical glow on the icy waters below.",
    story:
      "This image was captured during an expedition specifically planned to photograph the interaction between flowing water and ice during aurora displays. Finding the right location was crucial—I needed a stream that wouldn't completely freeze, even in the depths of winter, and that would be positioned correctly relative to potential aurora displays. After researching for months and scouting several locations, I found this perfect spot where a geothermally warmed stream remains partially open all winter. I camped nearby for a week, enduring temperatures that dropped to -30°C at night, waiting for aurora activity. On the fifth night, the forecast showed promise, and I hiked to this location through deep snow, arriving just as darkness fell. Around midnight, the aurora began to appear, and I worked quickly to find compositions that balanced the flowing water, ice formations, and the light display overhead. The extreme cold presented numerous challenges—batteries drained quickly, and any exposed skin risked frostbite within minutes. But the resulting image, showing the harmony between the frozen landscape and the dynamic aurora, made every hardship worthwhile.",
    photographer: {
      name: "Ingrid Bergman",
      bio: "Ingrid is a Swedish photographer specializing in winter landscapes and aurora photography. Having grown up in northern Sweden, she has a deep connection to Arctic environments and has developed specialized techniques for working in extreme cold. Her work explores the interplay between ice, water, and light in northern landscapes.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Abisko National Park",
      description: "A remote area in northern Sweden known for reliable aurora viewing and unique Arctic landscapes.",
      coordinates: [18.8167, 68.35],
      country: "Sweden",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Nikon Z9",
      lens: "Nikkor Z 14-30mm f/4 S",
      settings: "ISO 1600, f/4, 15 seconds",
    },
  },
  {
    id: 6,
    title: "Moraine Lake Sunrise",
    description: "Golden light on mountains with canoes",
    price: 69.99,
    image: "/images/moraine-lake.png",
    slug: "moraine-lake-sunrise",
    details:
      "This iconic photograph captures the breathtaking beauty of Moraine Lake at sunrise. The golden morning light bathes the mountain peaks in warm hues, creating a stunning contrast with the turquoise waters of the lake. Traditional wooden canoes rest on the shore, adding a sense of adventure to this peaceful wilderness scene.",
    story:
      "Capturing the perfect sunrise at Moraine Lake requires both planning and perseverance. This location is one of the most photographed in the Canadian Rockies, so finding a unique perspective was my first challenge. I arrived three hours before sunrise to secure a vantage point away from the main viewing area, hiking along the lakeshore in darkness with my equipment. As the first light began to appear, I set up my composition to include the iconic red canoes in the foreground, providing both a sense of scale and a human element to contrast with the massive landscape. The morning was unusually still, creating perfect reflections on the lake's surface. As the sun crested the horizon, it painted the peaks of the Valley of Ten Peaks with golden light while the valley remained in shadow, creating the dramatic lighting contrast seen in this image. The entire optimal light window lasted less than ten minutes, but years of experience helped me anticipate and capture this fleeting moment.",
    photographer: {
      name: "Robert Zhang",
      bio: "Robert specializes in capturing iconic landscapes in extraordinary light. His methodical approach involves extensive research and multiple visits to locations to understand how light interacts with the landscape throughout the seasons. His work has been featured in travel publications worldwide and has influenced a generation of landscape photographers.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "Moraine Lake",
      description:
        "A glacier-fed lake in Banff National Park known for its vivid turquoise color and the Valley of Ten Peaks.",
      coordinates: [-116.1773, 51.3217],
      country: "Canada",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Canon EOS R5",
      lens: "Canon RF 24-70mm f/2.8L IS USM",
      settings: "ISO 100, f/11, 1/30 second, 3-stop graduated ND filter",
    },
  },
  {
    id: 7,
    title: "Pastel Mountain Sunset",
    description: "Vibrant sunset colors reflecting on alpine lake",
    price: 69.99,
    image: "/images/sunset-mountains.png",
    slug: "pastel-mountain-sunset",
    details:
      "This stunning digital artwork captures the magical moment of sunset in the mountains. The pastel pinks and oranges of the sky create a dreamlike atmosphere as they reflect perfectly in the still waters of the alpine lake. Tall evergreen trees frame the scene, adding depth and scale to this breathtaking landscape.",
    story:
      "This image represents my exploration of color and light in mountain landscapes. While based on a photograph I took in the North Cascades, I enhanced the natural sunset colors to create a more emotional interpretation of the scene. I was inspired by the paintings of the Hudson River School, which often idealized natural landscapes to evoke specific emotional responses. The actual sunset was beautiful but more subdued; through careful digital painting techniques, I amplified the pastel colors to create the dreamlike quality that matched my emotional experience of being in this peaceful setting as day turned to night. The perfectly still water that evening provided an ideal canvas for these reflections, doubling the impact of the sunset colors. This piece sits at the intersection of photography and digital art, using the landscape as a starting point for a more expressive interpretation of nature's beauty.",
    photographer: {
      name: "Eliza Montgomery",
      bio: "Eliza creates work that blends traditional landscape photography with digital art techniques. With a background in both fine art painting and photography, she creates images that capture the emotional essence of landscapes rather than strictly documentary representations. Her work explores how color and light shape our emotional responses to natural environments.",
      image: "/placeholder.svg?height=200&width=200",
    },
    location: {
      name: "North Cascades National Park",
      description:
        "A remote wilderness area in Washington state known for jagged peaks, alpine lakes, and old-growth forests.",
      coordinates: [-121.2, 48.7],
      country: "United States",
    },
    specs: {
      sizes: ["8×10″", "11×14″", "16×20″", "24×30″"],
      paper: "Premium archival matte paper",
      shipping: "Free shipping worldwide",
      framing: "Optional custom framing available",
    },
    camera: {
      model: "Fujifilm GFX 100S",
      lens: "Fujinon GF 32-64mm f/4 R LM WR",
      settings: "ISO 100, f/16, 1/15 second, digitally enhanced",
    },
  },
]
