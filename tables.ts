import { Knex } from 'knex';
import { AlbumI, TrackI } from './types/db';

declare module 'knex/types/tables' {
  interface Tables {
    // If you want to add advanced stuff
    Album: Knex.CompositeTableType<
      // return type
      AlbumI,
      // When inserting, have to provide 'Title', can provide 'ArtistId', 'ReleaseDate'
      // can't provide AlbumId
      Pick<AlbumI, 'Title'> & Partial<Pick<AlbumI, 'ArtistId' | 'ReleaseDate'>>,
      // All fields can be updated except AlbumId
      Partial<Omit<AlbumI, 'AlbumId'>>
    >;
    // If you want to be simple
    Track: TrackI;
  }
}
