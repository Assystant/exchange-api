module.exports = {
  apps: [
    {
      name: "server",
      script: "./server.js",
      instances: 1,
      exec_mode: "fork",
      interpreter: "node",
      watch: false
    },
    {
      name: "scraper",
      script: "./currscript.js",
      instances: 1,
      exec_mode: "fork",
      interpreter: "node",
      autorestart: false,
      cron_restart: "0 */12 * * *",
      watch: false
    }
  ]
};
