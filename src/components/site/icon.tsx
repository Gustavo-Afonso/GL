import {
  TrendingUp,
  Headphones,
  Rocket,
  Users,
  Gamepad2,
  ShieldCheck,
  Percent,
  Gift,
  CalendarDays,
  Megaphone,
  Flag,
  Puzzle,
  Target,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  "trending-up": TrendingUp,
  headphones: Headphones,
  rocket: Rocket,
  users: Users,
  gamepad: Gamepad2,
  shield: ShieldCheck,
  percent: Percent,
  gift: Gift,
  calendar: CalendarDays,
  megaphone: Megaphone,
  flag: Flag,
  puzzle: Puzzle,
  target: Target,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = ICONS[name];
  return <Cmp {...props} />;
}
