module.exports = {
  apps: [{
    name: "epoxy-backend",
    script: "./src/app.js",
    watch: false,
    max_memory_restart: "1G",
    exec_mode: "fork",
    instances: 1,
    autorestart: true,
    max_restarts: 10,
    env: {
      NODE_ENV: "production",
      PORT: 5000
    }
  }]
};