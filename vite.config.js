import { resolve } from 'node:path';

export default {
  server: {
    port: 3333,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        alta: resolve('views/alta.html'),
        carrito: resolve('views/carrito.html'),
        contacto: resolve('views/contacto.html'),
        nosotros: resolve('views/nosotros.html'),
        cuenta: resolve('views/cuenta.html'),
        inicio: resolve('index.html'),
      },
    },
  },
};
