// lib/db.ts
import postgres from 'postgres';

// Configure your connection string (ensure you have DATABASE_URL set in your env)
const sql = postgres({ 
    host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
    port                 : 54322,          // Postgres server port[s]
    database             : 'postgres',            // Name of database to connect to
    username             : 'postgres',            // Username of database user
    password             : 'postgres',            // Passwo
}) // will use psql environment variables


/**
 * Retrieves a GeoJSON FeatureCollection from the trees table.
 */
export async function getGeoJSON(): Promise<any> {
  const result = await sql`
    SELECT json_build_object(
      'type', 'FeatureCollection',
      'features', json_agg(feature)
    ) AS geojson
    FROM (
      SELECT json_build_object(
        'type', 'Feature',
        'id', id,
        'geometry', ST_AsGeoJSON(geom)::json,
        'properties', json_build_object(
          'lat', lat,
          'lng', lng,
          'tpz_m', tpz_m
        )
      ) AS feature
      FROM trees
    ) sub;
  `;
  // result is an array; we return the GeoJSON from the first (and only) row.
  return result[0].geojson;
}
