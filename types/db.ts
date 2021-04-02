export interface AlbumI {
  AlbumId: number;
  Title: string;
  ArtistId: number;
  ReleaseDate: Date;
}

export interface TrackI {
  TrackId: number;
  Name: string;
  AlbumId?: number;
  MediaTypeId: number;
  GenreId?: number;
}
