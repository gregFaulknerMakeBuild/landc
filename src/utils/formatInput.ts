import type { Input } from 'src/types';

export function formatInput(input: Input): void {
  if (input instanceof HTMLInputElement) {
    const { type, value } = input;
    if (type !== 'number') return;

    input.value = Math.round(Number(value)).toString();
  }
}