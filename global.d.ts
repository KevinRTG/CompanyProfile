export {};

declare global {
  interface Window {
    botpress?: any; // Gunakan `any` agar fleksibel dan tidak konflik
  }
}
