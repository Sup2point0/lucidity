export interface Toast {
  id?: number;
  text: string;
  kind: "success" | "error";
}
