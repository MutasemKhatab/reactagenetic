import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";
import { useTheme } from "../../../components/ui/theme-provider";

export default function Header() {
  const { setTheme } = useTheme();
  const items: { name: string; href: string }[] = [
    {
      name: "Logo",
      href: "/",
    },
    {
      name: "Dashboard",
      href: "/",
    },
    { name: "Agents", href: "/agents" },
    {
      name: "Runs",
      href: "/runs",
    },
    {
      name: "Console",
      href: "/console",
    },
  ];
  return (
    <div className="w-full flex flex-row items-center justify-between px-50 py-5 bg-secondary">
      <NavigationMenu className="flex-1">
        <NavigationMenuList className="w-full flex flex-row items-center">
          {items.map((item) => (
            <NavigationMenuLink
              className={
                window.location.pathname === item.href ? "text-primary" : ""
              }
              key={item.name}
              href={item.href}
            >
              {item.name}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="px-4 py-2 flex items-center gap-2">
            Account
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem asChild>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Logout <div className="flex-1"></div>
            <LogOutIcon />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
