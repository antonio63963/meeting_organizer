const normalizePort = (val) => {
  if (typeof val === 'undefined') {
    return false;
  }

  s

  if (Number.isNaN(port)) {
    throw new Error(`Port ${val} incorect`);
  }

  if (port >= 0) {
    // port number
    return port;
  }

  throw new Error(`Port ${val} incorect`);
};

// если порт передали в process.env.PORT - нормализируй и используй, иначе порт по умолчанию
const httpPort = normalizePort(process.env.PORT) || 8000;

module.exports = {
  httpPort,
  ws: {
    origins: [
      'http://localhost:8000',
    ],
  },
};