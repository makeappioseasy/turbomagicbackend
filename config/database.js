module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        /*
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'podtomaticdb'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'mysql1234'),
        ssl: env.bool('DATABASE_SSL', false),
        */

        
        host: env('DATABASE_HOST', 'dpg-c0k9o3bjbvm6a4mhaa0g'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'podtomatic'),
        username: env('DATABASE_USERNAME', 'podtomatic_user'),
        password: env('DATABASE_PASSWORD', 'HpvTAfXjgEyJooGyikmFCw04c6HHQqjn'),
        ssl: env.bool('DATABASE_SSL', false)
        
        /*
       host: env('DATABASE_HOST', 'oregon-postgres.render.com'),
       port: env.int('DATABASE_PORT', 5432),
       database: env('DATABASE_NAME', 'podtomatic'),
       username: env('DATABASE_USERNAME', 'podtomatic_user'),
       password: env('DATABASE_PASSWORD', 'HpvTAfXjgEyJooGyikmFCw04c6HHQqjn'),
       ssl: env.bool('DATABASE_SSL', true)
        */
      },
      options: {}
    },
  },
});
