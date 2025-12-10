import { motion } from "framer-motion";

// -------- UI helpers --------
export const FadeIn: React.FC<{
	delay?: number;
	children: React.ReactNode;
}> = ({ delay = 0, children }) => (
	<motion.div
		initial={{ opacity: 0, y: 12 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6, delay }}
	>
		{children}
	</motion.div>
);
