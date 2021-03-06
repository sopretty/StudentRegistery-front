export const environment = {
  production: false,
  header: {
    json: {'Content-Type': 'application/json'}
  },
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      checkConnexion: '/connexion'
    }
  },
  frontend: {
    protocol: 'http',
    host: 'localhost',
    port: '4200'
  }
};
