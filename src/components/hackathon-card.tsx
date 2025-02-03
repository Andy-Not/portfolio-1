import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon?: React.ReactNode;
    title?: string;
    href?: string;
    tools?: string[];
  }[];
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
          <div className="mt-2 flex flex-wrap items-start gap-2">
            {links.map((link, idx) => (
                <div key={idx} className="flex flex-wrap items-center gap-2 w-full">
                  {/* Check if link has a title, icon, and href */}
                  {link.title && link.href && (
                      <Link href={link.href}>
                        <Badge className="flex items-center gap-2">
                          {link.icon} {link.title}
                        </Badge>
                      </Link>
                  )}

                  {link.tools && link.tools.length > 0 && link.href && (
                      <Separator orientation="vertical" className="h-6 w-[1px] bg-gray-300" />
                  )}

                  {/* Tools Badges */}
                  {link.tools && (
                      <div className="flex flex-wrap gap-2">
                        {link.tools.map((tool, i) => (
                            <Badge key={i} variant="outline" className="flex items-center gap-2 flex-grow-0">
                              {tool}
                            </Badge>
                        ))}
                      </div>
                  )}
                </div>
            ))}
          </div>
      )}
    </li>
  );
}
