module.exports = {
    apps: [
      {
        name: "Backend 3DQuality",
        script: "./src/server.js",
        exp_backoff_restart_delay: 100,
        env: {
            NODE_ENV: "prod",
            PORT: "3001",
            MYSQL_HOST:"108.167.188.28",
            MYSQL_USER:"hg3dqu67_root",
            MYSQL_PASSWORD:"A813200DLT!@rg",
            MYSQL_DATABASE:"hg3dqu67_site",
        },
      },
    ],
  };
  