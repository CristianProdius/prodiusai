import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CheckCircle2, Sparkles } from "lucide-react";

const pricingCardVariants = cva(
  "relative rounded-xl p-6 py-8 w-full transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border border-gray-200 hover:border-gray-300",
        highlighted:
          "text-white border border-white/20 shadow-2xl hover:shadow-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const pricingCardIconVariants = cva("size-5", {
  variants: {
    variant: {
      default: "fill-primary text-white",
      highlighted: "fill-white text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const pricingCardSecondaryTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-600",
      highlighted: "text-white/80",
    },
  },
});

const pricingCardBadgeVariants = cva(
  "text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm",
  {
    variants: {
      variant: {
        default: "bg-primary/10 text-primary",
        highlighted: "bg-white/20 text-white border border-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props extends VariantProps<typeof pricingCardVariants> {
  badge?: string | null;
  price: number;
  features: string[];
  title: string;
  description?: string | null;
  priceSuffix: string;
  className?: string;
  buttonText: string;
  onClick: () => void;
}

export const PricingCard = ({
  variant,
  badge,
  price,
  features,
  title,
  description,
  priceSuffix,
  className,
  buttonText,
  onClick,
}: Props) => {
  const isHighlighted = variant === "highlighted";

  return (
    <div
      className={cn(pricingCardVariants({ variant }), className)}
      style={
        isHighlighted
          ? {
              background: `linear-gradient(135deg, 
          oklch(0.3051 0.1361 264.45), 
          oklch(0.5295 0.2 265.61)
        )`,
            }
          : undefined
      }
    >
      {/* Subtle gradient overlay for depth */}
      {isHighlighted && (
        <>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </>
      )}

      {/* Popular badge indicator */}
      {isHighlighted && badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 bg-white text-primary px-3 py-1.5 rounded-full shadow-lg">
            <Sparkles className="size-3.5" />
            <span className="text-xs font-semibold">{badge}</span>
          </div>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-end gap-x-4 justify-between">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
              <h6 className="font-semibold text-2xl">{title}</h6>
              {badge && !isHighlighted ? (
                <Badge className={cn(pricingCardBadgeVariants({ variant }))}>
                  {badge}
                </Badge>
              ) : null}
            </div>
            <p
              className={cn(
                "text-sm",
                pricingCardSecondaryTextVariants({ variant })
              )}
            >
              {description}
            </p>
          </div>
          <div className="flex items-end shrink-0 gap-x-1">
            <h4 className="text-4xl font-bold tracking-tight">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
              }).format(price)}
            </h4>
            <span
              className={cn(
                "text-sm mb-1",
                pricingCardSecondaryTextVariants({ variant })
              )}
            >
              {priceSuffix}
            </span>
          </div>
        </div>

        <div className="py-6">
          <Separator
            className={cn(
              "opacity-20",
              isHighlighted ? "bg-white" : "bg-gray-300"
            )}
          />
        </div>

        <Button
          className={cn(
            "w-full shadow-md hover:shadow-lg transition-shadow",
            isHighlighted &&
              "bg-white text-primary hover:bg-gray-100 font-semibold"
          )}
          size="lg"
          variant={isHighlighted ? "secondary" : "outline"}
          onClick={onClick}
        >
          {buttonText}
        </Button>

        <div className="flex flex-col gap-y-3 mt-8">
          <p
            className={cn(
              "font-semibold uppercase text-xs tracking-wider",
              isHighlighted ? "text-white/90" : "text-gray-500"
            )}
          >
            Features included
          </p>
          <ul
            className={cn(
              "flex flex-col gap-y-3",
              pricingCardSecondaryTextVariants({ variant })
            )}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-x-3 group">
                <div
                  className={cn(
                    "mt-0.5 transition-transform group-hover:scale-110",
                    isHighlighted && "drop-shadow-sm"
                  )}
                >
                  <CheckCircle2
                    className={cn(pricingCardIconVariants({ variant }))}
                  />
                </div>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
