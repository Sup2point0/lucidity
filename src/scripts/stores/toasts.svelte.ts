import { writable } from "svelte/store";

import type { Toast } from "#scripts/types";


export class Toasts
{
  static count = 0;

  active: Toast[] = $state([]);


  new_toast(toast: Partial<Toast>)
  {
    let id = ++Toasts.count;
    toast.id = id;
    this.active.push(toast as Toast);

    setTimeout(() => this.clear_toast(id), 5000);
  }

  clear_toast(id: number)
  {
    this.active.splice(this.active.findIndex(toast => toast.id === id), 1);
  }
}


export const toasts = writable(new Toasts());
