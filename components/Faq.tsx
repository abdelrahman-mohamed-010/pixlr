"use client";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  rating: number;
  title: string;
  content: string;
  author: string;
  role: string;
}

const truncateText = (text: string, maxLength: number = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
};

const Testimonial = ({
  rating,
  title,
  content,
  author,
  role,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-opacity-10 bg-white border-0 rounded-3xl h-[220px]">
        <CardHeader className="pb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating
                    ? "fill-white text-white"
                    : "fill-gray-600 text-gray-600"
                }`}
              />
            ))}
          </div>
          <h3 className="text-lg font-semibold mt-2 text-white">{title}</h3>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full">
          <p className="text-sm text-gray-300 line-clamp-4 h-[80px]">
            {truncateText(content)}
          </p>
          <div className="text-sm text-gray-400 italic mt-auto">
            {author}
            {role && `, ${role}`}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialSection = () => {
  const allTestimonials: TestimonialProps[] = [
    {
      rating: 5,
      title: "PicEdit.ai - The Bigger and Better Photoshop",
      content:
        "My overall experience with PicEdit.ai has been positive! I have realized how much of a 'hidden gem' this tool truly is and I wish that it was more well-known.",
      author: "Candice",
      role: "Medical Practice",
    },
    {
      rating: 5,
      title: "Best photo editing platform",
      content:
        "It has all basic image editing tools available on its application. I use it whenever I need to edit my business photos as it saves time and is easy to understand.",
      author: "Abhishek",
      role: "Customer Service",
    },
    {
      rating: 5,
      title: "Great for designing beautiful graphics",
      content:
        "PicEdit.ai is used by our organisation as a cheaper and more accessible version of photoshop. We use it to create graphics for our campaigns, posters, and report covers.",
      author: "Abhishek",
      role: "Manage Legal",
    },
    {
      rating: 5,
      title: "Full Scope Free Photo Editor",
      content:
        "Overall PicEdit.ai is an excellent tool! I highly recommend for small business designers, especially if you wear multiple hats within your organization.",
      author: "Braden",
      role: "Machinery",
    },
    {
      rating: 5,
      title: "PicEdit.ai is my Favorite",
      content:
        "I absolutely love PicEdit.ai and it is my go-to software when I need to edit a quick photo or make a quick logo. I would recommend it to anyone looking for photo editing.",
      author: "Luke",
      role: "Edu Management",
    },
    {
      rating: 5,
      title: "A fantastic option for doing quick photo work!",
      content:
        "I use the software as my go-to for quick photo edits and social media post creation. I've used this for so many uses for simple graphic editing.",
      author: "Anonymous",
      role: "",
    },
    {
      rating: 5,
      title: "Perfect for Social Media Content",
      content:
        "I use PicEdit.ai daily for my social media content creation. It's intuitive and powerful!",
      author: "Sarah",
      role: "Social Media Manager",
    },
    {
      rating: 4,
      title: "Great Alternative to Premium Tools",
      content:
        "PicEdit.ai offers everything I need for basic photo editing without the hefty price tag.",
      author: "Michael",
      role: "Freelance Designer",
    },
    {
      rating: 5,
      title: "Streamlined Workflow",
      content:
        "The interface is so well designed, I can edit photos faster than ever before.",
      author: "Emma",
      role: "Marketing Specialist",
    },
  ];

  // Split testimonials into two rows
  const firstRowTestimonials = [...allTestimonials, ...allTestimonials]; // Duplicate for continuous effect
  const secondRowTestimonials = [...allTestimonials, ...allTestimonials]; // Duplicate for continuous effect

  return (
    <div className="w-full py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {/* First row */}
          <div className="testimonial-row">
            <div className="testimonial-track">
              {firstRowTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - reverse direction */}
          <div className="testimonial-row">
            <div className="testimonial-track reverse">
              {secondRowTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        .testimonial-row {
          width: 100%;
          overflow: hidden;
        }

        .testimonial-track {
          display: flex;
          animation: scroll 60s linear infinite;
          width: fit-content;
        }

        .testimonial-track.reverse {
          animation: scroll-reverse 60s linear infinite;
        }

        .testimonial-item {
          flex: 0 0 350px;
          margin-right: 20px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

const Faq = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center py-16"
      style={{
        backgroundColor: "rgb(10, 15, 32)",
        backgroundImage:
          "radial-gradient(50% 100% at 50% -10%, rgba(120, 137, 223, 0.5), rgba(119, 138, 232, 0))",
      }}
    >
      <section className="container mx-auto px-4 py-20 pb-6 justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="text-sm font-medium tracking-wider text-white bg-yellow-500 p-2 uppercase">
            Loved by many!
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl uppercase font-bold mb-4 text-white"
        >
          Join millions of creators!
        </motion.h1>
      </section>

      <TestimonialSection />
    </motion.div>
  );
};

export default Faq;
