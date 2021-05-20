import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { AlbumInterface } from './interfaces/album.interface';

@Injectable()
export class AppService {
  private readonly albums: AlbumInterface[] = [
    { id: 1, name: 'Black', artist: 'Metallica' },
    { id: 2, name: 'Red', artist: 'Taylor Swift' },
  ];

  create(album: CreateAlbumDto): AlbumInterface {
    const newAlbum = { id: Date.now(), ...album };
    this.albums.push(newAlbum);
    return newAlbum;
  }

  findOne(id: number): AlbumInterface {
    return this.albums.find((album) => album.id === id);
  }

  findAll(): AlbumInterface[] {
    return this.albums;
  }
}
