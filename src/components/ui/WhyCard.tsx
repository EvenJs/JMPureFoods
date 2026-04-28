import { motion } from "framer-motion";

interface CardItem {
  number: string;
  image: string;
  title: string;
  paragraphs: string[];
}

export default function WhyCard({
  item,
  active,
}: {
  item: CardItem;
  active: boolean;
}) {
  return (
    <motion.div
      layout
      animate={{
        opacity: active ? 1 : 0.5,
        scale: active ? 1 : 0.95,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`
        rounded-2xl overflow-hidden
        ${active ? "shadow-xl" : "shadow-sm"}
      `}
    >
      <div className="md-h-105 w-full">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-text-muted text-sm">{item.title}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
