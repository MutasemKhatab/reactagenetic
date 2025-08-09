export default function switchTheme(
  e: React.MouseEvent | MouseEvent,
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
