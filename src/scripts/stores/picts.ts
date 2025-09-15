import { writable, type Writable } from "svelte/store";


export let pict: Writable<string | null> = writable(null);
