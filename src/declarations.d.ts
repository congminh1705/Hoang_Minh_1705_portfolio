declare module '@emailjs/browser' {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ): Promise<{ status: number; text: string }>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    publicKey?: string
  ): Promise<{ status: number; text: string }>;

  export function init(publicKey: string): void;
}