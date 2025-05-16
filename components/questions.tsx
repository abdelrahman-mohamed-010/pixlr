"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const questionsData = [
  {
    question: "What makes PicEdit.ai different from other photo editors?",
    answer:
      "PicEdit.ai combines powerful AI capabilities with traditional editing tools, offering features like one-click background removal, AI-powered face editing, and advanced generative fill. Our platform is designed to be both powerful and user-friendly, making professional-grade editing accessible to everyone.",
  },
  {
    question: "Is PicEdit.ai free to use?",
    answer:
      "We offer both free and premium plans. The free plan includes access to basic editing tools and limited AI features. Premium subscribers get unlimited access to all AI features, advanced tools, and priority processing.",
  },
  {
    question: "Can I use PicEdit.ai for commercial projects?",
    answer:
      "Yes! Images created with PicEdit.ai can be used for both personal and commercial purposes. Premium subscribers get additional commercial usage rights and access to premium stock assets.",
  },
  {
    question: "Do I need to download any software to use PicEdit.ai?",
    answer:
      "No, PicEdit.ai is a fully cloud-based solution. You can access all features directly through your web browser, with no downloads or installations required.",
  },
  {
    question: "How secure are my uploaded images?",
    answer:
      "We take security seriously. All uploaded images are encrypted, processed securely, and automatically deleted from our servers after processing. We never share or use your images for any purpose other than providing our service.",
  },
  {
    question: "Can I edit photos on my mobile device?",
    answer:
      "Yes! PicEdit.ai is fully responsive and works on all devices. We also offer dedicated mobile apps for iOS and Android for an optimized mobile editing experience.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "PicEdit.ai supports all major image formats including JPG, PNG, WEBP, and TIFF. Premium users can also export to additional formats including PSD and SVG.",
  },
  {
    question: "How fast is the AI processing?",
    answer:
      "Most AI operations complete within seconds. Processing time may vary based on image size and complexity. Premium users get priority processing for faster results.",
  },
  {
    question: "Can I batch process multiple images?",
    answer:
      "Yes, batch processing is available for premium users. You can apply the same edits or AI effects to multiple images simultaneously, saving time on repetitive tasks.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 customer support through chat and email. Premium users get priority support and access to video tutorials and live training sessions.",
  },
];

export default function Questions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-screen py-10 md:py-20 flex items-center"
      style={{
        backgroundColor: "rgb(10, 15, 32)",
        backgroundImage:
          "radial-gradient(50% 100% at 50% -10%, rgba(120, 137, 223, 0.5), rgba(119, 138, 232, 0))",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="text-sm font-medium tracking-wider text-white bg-purple-500 p-1.5 md:p-2 uppercase rounded">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white uppercase"
          >
            Common Questions
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-2 md:px-0"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {questionsData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/5 rounded-lg border border-white/10 px-2 md:px-4"
                >
                  <AccordionTrigger className="text-white hover:text-white/90 text-left text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm md:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
}
