export function load_pict_from_clipboard(
  e: ClipboardEvent,
  reader: FileReader,
): string | undefined
{
  if (!e.clipboardData) return;

  for (let each of e.clipboardData.items)
  {
    if (each.type.startsWith("image"))
    {
      let blob = each.getAsFile();
      reader.readAsDataURL(blob);
      return reader.result as string;
    }
  }
}
