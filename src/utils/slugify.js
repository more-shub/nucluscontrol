export const slugify = (text) =>
  text
    .toString() // Ensure input is a string
    .normalize("NFD") // Normalize Unicode characters (e.g., é → e)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^a-z0-9\-]/g, "") // Remove non-alphanumeric and non-dash characters
    .replace(/-+/g, "-") // Replace multiple dashes with a single one
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
