import { writable } from "svelte/store";


export class Preferences
{
  confirm_before_paste: boolean = $state(true);

  reset()
  {
    this.confirm_before_paste = true;
  }
}


export const prefs = writable(new Preferences());
