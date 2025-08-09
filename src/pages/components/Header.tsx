import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Label } from "../../components/ui/label";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Switch } from "../../components/ui/switch";

export default function Header() {
  const [theme, setTheme] = useState<boolean>(false);
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
                window.location.pathname === item.href ? "text-red-500" : ""
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
          <DropdownMenuItem
            onClick={(e) => {
              _switchTheme(e, setTheme);
            }}
          >
            <Label htmlFor="theme">Dark Mode</Label>
            <span className="flex-1" />
            <Switch id="themeSwitch" checked={theme} />
          </DropdownMenuItem>
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

function _switchTheme(
  e: React.MouseEvent<HTMLDivElement>,
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
) {
  e.preventDefault();
  e.stopPropagation();
  const root = document.documentElement;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    setTheme(false);
  } else {
    root.classList.add("dark");
    setTheme(true);
  }
}
