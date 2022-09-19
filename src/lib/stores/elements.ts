import { writable } from 'svelte/store';

export const elements = writable<{ [key: string]: HTMLElement }>({});

export function registerElement(node: HTMLElement, { key }: { key: string }) {
  elements.update((prev) => ({ ...prev, [key]: node }));
  return {
    destroy() {
      elements.update((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [key]: value, ...rest } = prev;
        return rest;
      });
    }
  };
}
